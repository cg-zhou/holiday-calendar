const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const indexPath = path.resolve(__dirname, '../src/index.js');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

let indexContent = fs.readFileSync(indexPath, 'utf8');
const versionAssignment = /this\.version = '[^']*';/;
if (!versionAssignment.test(indexContent)) {
  throw new Error('Cannot find HolidayCalendar version assignment');
}
indexContent = indexContent.replace(versionAssignment, `this.version = '${version}';`);

fs.writeFileSync(indexPath, indexContent, 'utf8');

console.log(`Injected version ${version} into ${indexPath}`);
