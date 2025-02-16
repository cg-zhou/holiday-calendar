const fs = require('fs');
const path = require('path');

// Get all JSON files recursively from directory
function getAllJsonFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile() && path.extname(fullPath) === '.json' && !fullPath.endsWith('.min.json')) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Minify JSON file
function minifyJson(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(content);
  const minified = JSON.stringify(json);
  
  const dir = path.dirname(filePath);
  const basename = path.basename(filePath, '.json');
  const minPath = path.join(dir, `${basename}.min.json`);
  
  fs.writeFileSync(minPath, minified);
  console.log(`Minified: ${filePath} -> ${minPath}`);
}

// Generate index JSON file
function generateIndexFile(dataDir) {
  const index = {
    regions: []
  };

  const regions = fs.readdirSync(dataDir).filter(item => {
    const fullPath = path.join(dataDir, item);
    return fs.statSync(fullPath).isDirectory();
  });

  regions.forEach(region => {
    const regionDir = path.join(dataDir, region);
    const files = fs.readdirSync(regionDir).filter(file => file.endsWith('.json') && !file.endsWith('.min.json'));

    const years = files.map(file => parseInt(path.basename(file, '.json')));
    const startYear = Math.min(...years);
    const endYear = Math.max(...years);

    index.regions.push({
      name: region,
      startYear: startYear,
      endYear: endYear
    });
  });

  const indexPath = path.join(dataDir, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');
}

// Main function
function main() {
  const dataDir = path.join(__dirname, '..', 'data');
  
  // Generate index JSON file
  generateIndexFile(dataDir);

  // Minify all JSON files
  const jsonFiles = getAllJsonFiles(dataDir);
  
  jsonFiles.forEach(file => {
    try {
      minifyJson(file);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  });
}

main();