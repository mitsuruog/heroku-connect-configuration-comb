'use strict';

const fs = require('fs');
const path = require('path');

function alphabeticalOrder(data) {
  if(Array.isArray(data)) {
    return data.map((row) => alphabeticalOrder(row));
  }
  if(data !== null && typeof data === 'object') {
    const keys = Object.keys(data).sort((a, b) => a.localeCompare(b));
    let sortedData = {};
    keys.forEach((key) => {
      sortedData[key] = alphabeticalOrder(data[key]);
    });
    return sortedData;
  }
  return data;
}

function alphabeticalOrderByObjectName(data) {
  let sortedData = JSON.parse(JSON.stringify(data));
  sortedData.mappings = data.mappings.sort((a, b) => {
    return a.object_name.localeCompare(b.object_name);
  });
  return sortedData;
};

function HerokuConnectConfigurationComb(input, output, opts) {

	// TODO validation

	opts = opts || {};
	output = output || input;

	const inputFile = path.join(process.cwd(), input);
	const outputFile = path.join(process.cwd(), output);

	fs.readFile(inputFile, { encoding: 'utf-8' }, (err, data) => {
	  if (err) {
	    console.error(err);
	  } else {
	    fs.writeFile(outputFile, JSON.stringify(alphabeticalOrderByObjectName(alphabeticalOrder(JSON.parse(data))), null, 4), 'utf-8');
	  }
	});

	console.log(`${inputFile} => ${outputFile}`);
	return `done :)`;

}

module.exports = HerokuConnectConfigurationComb;
