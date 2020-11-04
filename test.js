import test from "ava";
import testee from "./index.js";
import { mkdirSync, readFileSync, rmdirSync } from "fs";

const ENCODING = "utf-8";
const TEMP_PATH = "./.tmp";
const INPUT_PATH = "./fixtures/input.json";
const OUTPUT_PATH = "./.tmp/output.json";

test.before(() => {
	rmdirSync(TEMP_PATH, { recursive: true });
	mkdirSync(TEMP_PATH, { recursive: true });
});

test.serial("Should output file be beautiful ", (t) => {
	testee(INPUT_PATH, OUTPUT_PATH);
	const actual = readFileSync(OUTPUT_PATH, ENCODING);
	const expect = readFileSync("./fixtures/output.json", ENCODING);
	t.is(actual, expect);
});
