import { mockTopics } from './mockData.js';
import fs from 'fs';
console.log('File Size:', fs.statSync('./mockData.js').size);
console.log('Successfully imported mockTopics. Count:', mockTopics.length);
if (mockTopics.length > 0) {
    console.log('First Topic:', mockTopics[0].meta.title);
    console.log('Last Topic:', mockTopics[mockTopics.length - 1].meta.title);
}
