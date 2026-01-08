
const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, 'server/src/mockData.js');
const content = fs.readFileSync(mockDataPath, 'utf8');

// Simple regex extraction since we can't easily import the ES module without setup
// We assume the structure is consistent
const topics = [];
let currentIndex = 0;

// This is a naive parser. A better way might be to regex for title and then looking for visualizations in the following lines
// or just regexing for blocks.

// Let's try to identify topic blocks. 
// Each topic starts with { and has an _id.

const lines = content.split('\n');
let currentTopic = null;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('title:')) {
        const titleMatch = line.match(/title:\s*'([^']+)'/);
        if (titleMatch) {
            if (currentTopic) {
                // Check previous topic
                topics.push(currentTopic);
            }
            currentTopic = { title: titleMatch[1], hasVisualizations: false };
        }
    }

    if (currentTopic && line.includes('visualizations: [')) {
        // Check if it's not empty
        // We look ahead to see if the next line is not ']' or similar, 
        // but finding "visualizations: [" strongly suggests it exists.
        // However, we want to know if it has items.
        // If the next line closes it immediately, it's empty.

        // Actually, just the presence of this key usually implies intent.
        // The user said "look for the topics which hasnt implemented images in it".
        // If "visualizations: [" is missing, it's definitely missing images.
        // If it is present, we check if it has content.
        currentTopic.hasVisualizations = true;

        // Let's check if it's empty
        // We can check if the next non-whitespace char is ]
        // but line-based check:
        // if line ends with [], then empty.
    }
}
if (currentTopic) topics.push(currentTopic);

// Now let's try a more robust way: execute the file?
// Replace "export const mockTopics" with "const mockTopics" and add "console.log(JSON.stringify(mockTopics.map(t => ({title: t.meta.title, hasImages: t.content?.beginner?.visualizations?.length > 0}))))"
// This requires the file to be valid JS without other imports.
// Lines 1-4 are comments / console.log.
// It seems safe to eval or running it.

