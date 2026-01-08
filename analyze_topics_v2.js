
const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, 'server/src/mockData.js');
let content = fs.readFileSync(mockDataPath, 'utf8');

// Remove export keyword to make it executable as a simple script
content = content.replace('export const mockTopics', 'const mockTopics');
// Also assume there might be other exports or imports. 
// If there are other exports, we should handle them. 
// But looking at the file snippet, it seems to be the main export.

// We will append code to print the analysis
const analysisCode = `
const missingImages = mockTopics.filter(t => {
    const viz = t.content && t.content.beginner && t.content.beginner.visualizations;
    return !viz || viz.length === 0;
}).map(t => t.meta.title);

console.log(JSON.stringify(missingImages));
`;

// Evaluate the content + analysis code
try {
    eval(content + analysisCode);
} catch (e) {
    console.error("Error evaluating mockData.js:", e.message);
    // Fallback to regex if eval fails (e.g. if there are imports)
    const matches = content.matchAll(/title:\s*'([^']+)'/g);
    const titles = [...matches].map(m => m[1]);
    console.log("Titles found (fallback):", titles);
}
