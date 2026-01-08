
const fs = require('fs');
const path = require('path');

const filePath = path.join('server', 'src', 'mockData.js');
const rawContent = fs.readFileSync(filePath, 'utf8');

// Regex to find topic blocks
// Each topic starts with something like { _id: '...'
// We'll search for title and visualizations within reasonable chunks

const topicMatches = rawContent.split(/_id:\s*'/);
const results = [];

topicMatches.forEach((chunk, index) => {
    if (index === 0) return; // Skip preamble

    const titleMatch = chunk.match(/title:\s*'([^']+)'/);
    const title = titleMatch ? titleMatch[1] : 'Unknown';

    // Check for visualizations array content
    // We look for 'visualizations: [' and then see if it has any objects '{}' inside before the closing ']'
    const vizMatch = chunk.match(/visualizations:\s*\[([\s\S]*?)\]/);

    let hasImages = false;
    if (vizMatch) {
        const vizContent = vizMatch[1].trim();
        if (vizContent.length > 0 && vizContent !== '[]') {
            // Check if it actually contains an image URL
            if (vizContent.includes('imageUrl:')) {
                hasImages = true;
            }
        }
    }

    if (!hasImages) {
        results.push(title);
    }
});

console.log('---MISSING_IMAGES_START---');
console.log(JSON.stringify(results, null, 2));
console.log('---MISSING_IMAGES_END---');
