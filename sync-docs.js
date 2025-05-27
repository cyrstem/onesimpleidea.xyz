const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const DIST_DIR = path.join(__dirname, 'dist');
const DOCS_DIR = path.join(__dirname, 'docs');

// Ensure docs directory exists
if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR);
}

// Backup CNAME if it exists
const cnamePath = path.join(DOCS_DIR, 'CNAME');
let cnameContent = null;
if (fs.existsSync(cnamePath)) {
    cnameContent = fs.readFileSync(cnamePath, 'utf8');
}

// Remove all files from docs except CNAME
fs.readdirSync(DOCS_DIR).forEach(file => {
    if (file !== 'CNAME') {
        const filePath = path.join(DOCS_DIR, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            fs.rmSync(filePath, { recursive: true, force: true });
        } else {
            fs.unlinkSync(filePath);
        }
    }
});

// Copy all files from dist to docs
fs.readdirSync(DIST_DIR).forEach(file => {
    const sourcePath = path.join(DIST_DIR, file);
    const destPath = path.join(DOCS_DIR, file);
    
    if (fs.lstatSync(sourcePath).isDirectory()) {
        // Copy directory recursively
        fs.cpSync(sourcePath, destPath, { recursive: true });
    } else {
        // Copy file
        fs.copyFileSync(sourcePath, destPath);
    }
});

// Restore CNAME if it existed
if (cnameContent) {
    fs.writeFileSync(cnamePath, cnameContent);
}

console.log('Successfully synced dist folder to docs folder while preserving CNAME'); 