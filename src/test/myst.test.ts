import * as assert from "assert";
import * as tmp from "tmp";
import { Uri } from "vscode";
import * as vscode from "vscode";
import { executeModule } from "../python";
import { activateExtension, randomString } from "../tools";
import { readNotebook } from "../myst";

suite("MyST Test Suite", () => {
    test("Load Minimal MyST Notebook", async () => {
        //
        // Givens
        //

        // I activated extension
        await activateExtension("stickshift.mystnb");

        // I allocated a temp notebook file
        const notebookFile = tmp.fileSync();
        const notebookUri = Uri.file(notebookFile.name + ".md");

        // I wrote minimal MyST notebook to temp file
        const markdownContent = `
---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
kernelspec:
  name: python3
  display_name: python3
---

# Lorem Ipsum
`;
        await vscode.workspace.fs.writeFile(
            notebookUri,
            Buffer.from(markdownContent),
        );

        //
        // Whens
        //

        // I load notebook from file
        const notebookContent = await readNotebook(notebookUri);
        const notebook = JSON.parse(notebookContent);

        //
        // Thens
        //

        // notebook should have 2 cells
        assert.strictEqual(notebook.cells.length, 2);
    });
});
