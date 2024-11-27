import { ExtensionContext } from "vscode";
import * as vscode from "vscode";

/**
 * Register commands.
 */
export function register(context: ExtensionContext) {
    // Command: mystnb.activate
    const disposable = vscode.commands.registerCommand(
        "mystnb.activate",
        () => {
            console.log("mystnb.activate");
        },
    );
    context.subscriptions.push(disposable);
}
