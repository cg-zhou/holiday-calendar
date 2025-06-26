const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const indexPath = path.resolve(__dirname, '../src/index.js');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = indexContent.replace(/__VERSION__/g, version);

fs.writeFileSync(indexPath, indexContent, 'utf8');

console.log(`Injected version ${version} into ${indexPath}`);
