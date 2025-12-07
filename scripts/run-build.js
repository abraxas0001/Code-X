import { existsSync, statSync, cpSync } from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Locate the client directory from common working directories.
const cwd = process.cwd();
const candidateDirs = [
  path.resolve(cwd, 'client'),
  path.resolve(cwd, '..', 'client'),
  path.resolve(cwd, '..', '..', 'client')
];

const clientDir = candidateDirs.find(
  (dirPath) => existsSync(dirPath) && statSync(dirPath).isDirectory()
);

if (!clientDir) {
  console.error('Unable to find the client directory for the build.');
  process.exit(1);
}

execSync('npm install', { cwd: clientDir, stdio: 'inherit' });
execSync('npm run build', { cwd: clientDir, stdio: 'inherit' });

// Ensure Vercel can find the built assets even if it looks in the repo root.
const clientDist = path.join(clientDir, 'dist');
const rootDist = path.resolve(clientDir, '..', 'dist');
if (existsSync(clientDist) && clientDist !== rootDist) {
  // Copy dist to the root-level dist for platforms that expect ./dist.
  cpSync(clientDist, rootDist, { recursive: true });
}
