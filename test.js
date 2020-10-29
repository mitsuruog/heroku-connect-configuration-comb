import test from "ava";
import testee from "./index.js";
import { readFileSync } from "fs";
import mkdirp from "mkdirp";

const ENCODING = "utf-8";
const INPUT_PATH = "./fixtures/input.json";
const OUTPUT_PATH = "./.tmp/output.json";

test.before(() => {
	mkdirp("./.tmp");
});

test.serial("Should output file be beautiful ", (t) => {
	testee(INPUT_PATH, OUTPUT_PATH);
	const actual = readFileSync(OUTPUT_PATH, ENCODING);
	const expect = readFileSync("./fixtures/output.json", ENCODING);
	t.is(actual, expect);
});
