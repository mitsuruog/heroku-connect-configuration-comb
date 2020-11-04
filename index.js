import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

function alphabeticalOrder(data) {
	if (Array.isArray(data)) {
		return data.map((row) => alphabeticalOrder(row));
	}
	if (data instanceof Object) {
		const keys = Object.keys(data).sort((a, b) => a.localeCompare(b));
		const sortedData = {};
		keys.forEach((key) => {
			sortedData[key] = alphabeticalOrder(data[key]);
		});
		return sortedData;
	}
	return data;
}

function alphabeticalOrderByObjectName(data) {
	const sortedData = JSON.parse(JSON.stringify(data));
	sortedData.mappings = data.mappings.sort((a, b) => {
		return a.object_name.localeCompare(b.object_name);
	});
	return sortedData;
}

function HerokuConnectConfigurationComb(input, output) {
	// TODO validation

	output = output || input;

	const encoding = "utf-8";
	const inputFile = join(process.cwd(), input);
	const outputFile = join(process.cwd(), output);

	const inputJson = readFileSync(inputFile, encoding);
	const outputJson = JSON.stringify(
		alphabeticalOrderByObjectName(alphabeticalOrder(JSON.parse(inputJson))),
		null,
		4
	);
	writeFileSync(outputFile, outputJson, encoding);
	console.log(`${inputFile} => ${outputFile}`);
	console.log("done :)");
}

export default HerokuConnectConfigurationComb;
