import * as vscode from "vscode";

const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Generate random string.
 *
 * @param length (Optional) length of string. Defaults to 8.
 */
export function randomString(length?: number): string {
    // Defaults
    length = length || 8;

    let result = "";
    for (let i = 0; i < length; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}

/**
 * Activate extension.
 *
 * @param extensionId Extension ID.
 */
export async function activateExtension(
    extensionId: string,
): Promise<vscode.Extension<any>> {
    // Lookup extension
    const extension = vscode.extensions.getExtension(extensionId);
    if (!extension) {
        throw new Error(`Extension ${extensionId} not found`);
    }

    // Ensure extension is activated
    if (!extension.isActive) {
        await extension.activate();
    }

    return extension;
}
