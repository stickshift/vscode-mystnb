import { ExtensionContext, Uri } from "vscode";
import * as path from "path";

let extensionUri: Uri;

export function initialize(context: ExtensionContext) {
    extensionUri = context.extensionUri;
}

export function getExtensionUri() {
    return extensionUri;
}

export function getSitePackagesUri() {
    return Uri.file(path.join(extensionUri.fsPath, "site-packages"));
}
