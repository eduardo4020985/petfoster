function validateEnvVariables(envVars: string[]): void {
    for (const envVar of envVars) {
      if (!process.env[envVar]) {
        throw new Error(`${envVar} environment variable is not defined`);
      }
    }
  }

export {validateEnvVariables}