
const fs = require('fs');
const path = require('path');

try {
    const filePath = 'd:\\web projects\\DSA Mania\\server\\src\\mockData.js';
    if (!fs.existsSync(filePath)) {
        console.error('File not found:', filePath);
        process.exit(1);
    }

    const rawContent = fs.readFileSync(filePath, 'utf8');
    const topics = [];

    // Split by _id to get potential topic blocks
    const chunks = rawContent.split(/_id:\s*'/);

    for (let i = 1; i < chunks.length; i++) {
        const chunk = chunks[i];

        // Find title
        const titleMatch = chunk.match(/title:\s*'([^']+)'/);
        const title = titleMatch ? titleMatch[1] : 'Unknown';

        // Find visualizations
        // Check if there's a visualizations array and if it has content
        const vizBlockMatch = chunk.match(/visualizations:\s*\[([\s\S]*?)\]/);

        let hasImages = false;
        if (vizBlockMatch) {
            const vizContent = vizBlockMatch[1].trim();
            // If it contains "imageUrl", it likely has images
            if (vizContent.includes('imageUrl')) {
                hasImages = true;
            }
        }

        if (!hasImages) {
            topics.push(title);
        }
    }

    console.log('MISSING_TOPICS_START');
    console.log(JSON.stringify(topics));
    console.log('MISSING_TOPICS_END');

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
