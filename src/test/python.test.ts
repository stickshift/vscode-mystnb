import * as assert from "assert";
import * as vscode from "vscode";
import { executeModule } from "../python";
import { activateExtension, randomString } from "../tools";

suite("Python Test Suite", () => {
    test("Execute Module", async () => {
        //
        // Givens
        //

        // I activated extension
        await activateExtension("stickshift.mystnb");

        // I generated random value
        const value = randomString();

        //
        // Whens
        //

        // I pass value to python's base64 module
        const result = await executeModule("base64", [], value);

        //
        // Thens
        //

        // result should be value base64 encoded
        assert.strictEqual(result, Buffer.from(value).toString("base64"));
    });
});
