import { Uri } from "vscode";
import { executeModule } from "./python";

/**
 * Load MyST notebook in Jupyter format.
 * @param notebookUri
 * @returns
 */
export async function readNotebook(notebookUri: Uri): Promise<string> {
    // Convert notebook from myst to notebook
    const result = await executeModule("jupytext", [
        "--to",
        "notebook",
        "--output",
        "-",
        notebookUri.fsPath,
    ]);
    return result;
}
