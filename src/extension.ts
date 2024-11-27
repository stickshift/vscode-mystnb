import { ExtensionContext } from "vscode";
import * as commands from "./commands";

/**
 * Extension activate hook.
 */
export function activate(context: ExtensionContext) {
    console.log("mystnb: Activated");

    // Register commands
    commands.register(context)
}

/**
 * Extension deactivate hook.
 */
export function deactivate() {
    console.log("mystnb: Deactivated");
}
