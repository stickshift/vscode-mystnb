import { ExtensionContext } from "vscode";
import * as commands from "./commands";
import * as config from "./config";

/**
 * Extension activate hook.
 */
export function activate(context: ExtensionContext) {
    console.log("mystnb: Activated");

    // Initialize state
    config.initialize(context);

    // Register commands
    commands.register(context);
}

/**
 * Extension deactivate hook.
 */
export function deactivate() {
    console.log("mystnb: Deactivated");
}
