
const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, 'server/src/mockData.js');
const content = fs.readFileSync(mockDataPath, 'utf8');

const lines = content.split('\n');
const topics = [];
let currentTopic = null;

for (const line of lines) {
    // Check for topic start/id
    const idMatch = line.match(/_id:\s*'([^']+)'/);
    if (idMatch) {
        if (currentTopic) {
            topics.push(currentTopic);
        }
        currentTopic = { id: idMatch[1], title: 'Unknown', hasVisualizations: false };
    }

    // Check for title
    const titleMatch = line.match(/title:\s*'([^']+)'/);
    if (currentTopic && titleMatch) {
        currentTopic.title = titleMatch[1];
    }

    // Check for visualizations
    if (currentTopic && line.includes('visualizations: [')) {
        // We assume if this key exists, there are visualizations or intent for them.
        // To be stricter, we could check if the next line is NOT ']'
        currentTopic.hasVisualizations = true;
    }
}
if (currentTopic) {
    topics.push(currentTopic);
}

// Filter and print
const missing = topics.filter(t => !t.hasVisualizations);
console.log(JSON.stringify(missing.map(t => t.title)));
