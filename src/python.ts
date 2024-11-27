import { activateExtension } from "./tools";
import { exec, ExecException } from "child_process";
import * as config from "./config";

/**
 * Execute python module in active environment.
 */
export async function executeModule(
    module: string,
    args: string[],
    stdin?: string,
): Promise<string> {
    // Activate python extension
    const pythonExtension = await activateExtension("ms-python.python");

    // Lookup path to Python executable
    const pythonApi = pythonExtension.exports;
    const env = await pythonApi.environments.getActiveEnvironmentPath();
    const pythonPath = env.path;

    // Execute Python command
    const command = `${pythonPath} -m ${module} ${args.join(" ")}`;

    // Initialize options with current environment and custom python path
    const sitePackagesUri = config.getSitePackagesUri();
    const options = { env: { ...process.env, PYTHONPATH: sitePackagesUri.fsPath } };

    return new Promise((resolve, reject) => {
        const process = exec(
            command,
            options,
            (error: ExecException | null, stdout: string, stderr: string) => {
                if (error) {
                    reject(error);
                }
                if (stderr) {
                    reject(stderr);
                }

                // Remove trailing newline
                stdout = stdout.trimEnd();

                resolve(stdout);
            },
        );

        if (stdin) {
            process.stdin?.write(stdin);
            process.stdin?.end();
        }
    });
}
