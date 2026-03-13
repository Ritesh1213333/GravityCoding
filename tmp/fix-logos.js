const fs = require('fs');

// Fix MongoDB
const mongoFile = 'C:\\Users\\Ritesh Kumar\\OneDrive\\Desktop\\GravityCoding\\public\\Logos\\mongodb-plain-wordmark.svg';
let mongoSvg = fs.readFileSync(mongoFile, 'utf8');

// The text parts appear to start from M106.474. ZM is the separator between subpaths.
// We keep everything before ZM106.474.
const index = mongoSvg.indexOf('ZM106.474');
if (index !== -1) {
  // Replace the path data
  // The path data ends with the closing quote
  const originalPathMatch = mongoSvg.match(/d="([^"]+)"/);
  if (originalPathMatch) {
    const originalPath = originalPathMatch[1];
    const newPath = originalPath.split('ZM106.474')[0] + 'Z';
    mongoSvg = mongoSvg.replace(originalPath, newPath);
    fs.writeFileSync(mongoFile, mongoSvg);
    console.log('MongoDB fixed');
  }
}

// Fix Docker
const dockerFile = 'C:\\Users\\Ritesh Kumar\\OneDrive\\Desktop\\GravityCoding\\public\\Logos\\docker-original-wordmark.svg';
let dockerSvg = fs.readFileSync(dockerFile, 'utf8');

// Docker has two text paths with fill="#3A4D54"
// Let's filter out lines with "#3A4D54"
const dockerLines = dockerSvg.split('\n');
const newDockerLines = dockerLines.filter(line => !line.includes('fill="#3A4D54"'));
fs.writeFileSync(dockerFile, newDockerLines.join('\n'));
console.log('Docker fixed');
