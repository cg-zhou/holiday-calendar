const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Unix resolves npm from PATH; Windows needs Node to invoke npm-cli.js.
const npmCli = process.env.npm_execpath || path.join(path.dirname(process.execPath), 'node_modules/npm/bin/npm-cli.js');
const args = ['pack', '--ignore-scripts', '--dry-run', '--json'];
const command = process.platform === 'win32' ? process.execPath : 'npm';
const commandArgs = process.platform === 'win32' ? [npmCli, ...args] : args;
const [pack] = JSON.parse(execFileSync(command, commandArgs, { encoding: 'utf8' }));
const paths = new Set(pack.files.map(file => file.path));
const { version } = require('../package.json');
const root = path.join(__dirname, '..');

for (const file of ['src/index.js', 'src/index.min.js', 'data/index.json', 'data/index.min.json']) {
  assert(paths.has(file), `Missing release artifact: ${file}`);
}
for (const file of ['src/index.js', 'src/index.min.js']) {
  const context = { module: { exports: {} } };
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
  assert.equal(new context.module.exports().version, version, `${file} version mismatch`);
}
// Every source dataset must be packed together with its matching minified data.
function checkData(dir) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const file = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      checkData(file);
    } else if (file.endsWith('.json') && !file.endsWith('.min.json')) {
      const minFile = file.replace(/\.json$/, '.min.json');
      assert(paths.has(file), `Missing dataset: ${file}`);
      assert(paths.has(minFile), `Missing minified dataset: ${minFile}`);
      assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root, file), 'utf8')), JSON.parse(fs.readFileSync(path.join(root, minFile), 'utf8')));
    }
  }
}
checkData('data');
console.log(`Verified ${pack.name}@${pack.version}: ${paths.size} files`);
