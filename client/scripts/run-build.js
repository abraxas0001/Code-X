import { execSync } from 'child_process';
import path from 'path';
import { existsSync } from 'fs';

// Delegate to the root-level builder if present.
const rootScript = path.resolve(__dirname, '..', '..', 'scripts', 'run-build.js');

if (!existsSync(rootScript)) {
  console.error('Root build helper not found at', rootScript);
  process.exit(1);
}

execSync(`node ${rootScript}`, { stdio: 'inherit' });
