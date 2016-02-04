import test from 'ava';
import testee from './';

const mkdirp = require('mkdirp');

const INPUT_PATH = './fixtures/input.json';
const OUTPUT_PATH = './.tmp/output.json';

const expect = require('./fixtures/output.json');

test.before(() => {
	mkdirp('./.tmp');
});

test.serial('Should output file be beautiful ', t => {
	testee(INPUT_PATH, OUTPUT_PATH).then(() => {
		const actual = require(OUTPUT_PATH);
		t.same(actual, expect);
	});
});
