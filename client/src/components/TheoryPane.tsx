import { motion } from 'framer-motion';
import { ExternalLink, Lightbulb, CheckCircle2, Copy, Check } from 'lucide-react';
import { useTopicStore } from '@/store/topicStore';
import { TierSwitcher } from './TierSwitcher';
import { TextSkeleton } from './ui/SkeletonLoader';
import { useState } from 'react';
import { AnalogyVisualizer } from './AnalogyVisualizer';

// Code Snippet Tabs Component
const CodeSnippetTabs = ({ snippets }: { snippets: Array<{ language: string; code: string; explanation?: string }> }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const languageColors: Record<string, string> = {
    python: 'crayon-blue',
    javascript: 'crayon-yellow',
    cpp: 'crayon-purple',
    java: 'crayon-red',
    c: 'crayon-green',
    'c#': 'crayon-purple',
  };

  const languageIcons: Record<string, string> = {
    python: '🐍',
    javascript: '⚡',
    cpp: '⚙️',
    java: '☕',
    c: '🔧',
    'c#': '💎',
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-handwritten font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        📝 Code Examples
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 border-4 border-ink rounded-xl shadow-2xl"
      >
        {/* Language Tabs */}
        <div className="flex flex-wrap gap-1 bg-gray-100 dark:bg-gray-900 p-2 border-b-4 border-ink">
          {snippets.map((snippet, idx) => {
            const lang = snippet.language.toLowerCase();
            const isActive = activeTab === idx;
            return (
              <motion.button
                key={idx}
                onClick={() => setActiveTab(idx)}
                whileHover={{ scale: isActive ? 1 : 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 py-2 font-handwritten font-bold text-lg rounded-lg border-3 border-black transition-all
                  ${isActive
                    ? `icon-sticker ${languageColors[lang] || 'crayon-blue'} text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }
                `}
              >
                <span className="mr-2">{languageIcons[lang] || '💻'}</span>
                {snippet.language.toUpperCase()}
              </motion.button>
            );
          })}
        </div>

        {/* Code Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1e1e1e] dark:bg-gray-950 relative group"
        >
          <div className="sticky top-0 right-0 z-20 flex justify-end p-2 pointer-events-none">
            <button
              onClick={() => handleCopy(snippets[activeTab].code)}
              className="pointer-events-auto p-2 rounded-md bg-white/10 dark:bg-black/20 hover:bg-white/20 backdrop-blur-md text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 border border-white/10"
              title="Copy code"
            >
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          <pre className="p-6 pt-0 overflow-x-auto">
            <code className="text-sm font-mono text-green-400 leading-relaxed whitespace-pre">
              {snippets[activeTab].code}
            </code>
          </pre>
        </motion.div>

        {/* Explanation */}
        {snippets[activeTab].explanation && (
          <motion.div
            key={`explanation-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-yellow-100 dark:bg-yellow-900/30 px-6 py-4 border-t-4 border-ink/20"
          >
            <p className="text-sm font-typewriter text-gray-900 dark:text-gray-100 flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <span>{snippets[activeTab].explanation}</span>
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

// Helper function to parse markdown into structured content
const parseMarkdown = (text: string) => {
  const lines = text.split('\n').filter(line => line.trim());
  const sections: Array<{ type: string; content: string; level?: number; items?: string[]; headers?: string[]; rows?: string[][] }> = [];
  let currentList: string[] = [];
  let inCodeBlock = false;
  let codeBlock = '';
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];

  lines.forEach((line, idx) => {
    // Code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        sections.push({ type: 'code', content: codeBlock.trim() });
        codeBlock = '';
      }
      inCodeBlock = !inCodeBlock;
      return;
    }

    if (inCodeBlock) {
      codeBlock += line + '\n';
      return;
    }

    // Tables - improved detection
    if (line.includes('|') && !line.startsWith('#')) {
      const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);

      // Check if it's a separator line (|---|---|)
      if (cells.every(cell => cell.match(/^[\-:]+$/))) {
        inTable = true;
        return;
      }

      // If we haven't started a table yet, this is the header
      if (!inTable && tableHeaders.length === 0) {
        tableHeaders = cells;
        return;
      }

      // If we're in a table, add rows
      if (inTable || tableHeaders.length > 0) {
        tableRows.push(cells);

        // Check if next line is not a table line
        const nextLine = lines[idx + 1];
        if (!nextLine || !nextLine.includes('|')) {
          sections.push({
            type: 'table',
            content: '',
            headers: tableHeaders,
            rows: tableRows
          });
          inTable = false;
          tableHeaders = [];
          tableRows = [];
        }
        return;
      }
    }

    // Headers
    if (line.startsWith('#')) {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: '', items: [...currentList] });
        currentList = [];
      }
      const level = line.match(/^#+/)?.[0].length || 1;
      sections.push({
        type: 'heading',
        content: line.replace(/^#+\s*/, '').replace(/[🚀📦🔍⚡🏆🌊🎯📚🎫🌳]/g, '').trim(),
        level
      });
    }
    // List items
    else if (line.match(/^[\-\*\d\.]\s/) || line.match(/^[✅❌]/)) {
      const item = line.replace(/^[\-\*\d\.]\s*/, '').replace(/^[✅❌]\s*/, '').trim();
      if (item) currentList.push(item);
    }
    // Regular paragraphs
    else if (line.trim()) {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: '', items: [...currentList] });
        currentList = [];
      }
      sections.push({ type: 'paragraph', content: line.trim() });
    }
  });

  if (currentList.length > 0) {
    sections.push({ type: 'list', content: '', items: currentList });
  }

  return sections;
};

export const TheoryPane = () => {
  const { currentTopic, currentTier } = useTopicStore();

  if (!currentTopic) {
    return (
      <div className="h-full p-6">
        <TextSkeleton />
      </div>
    );
  }

  const content = currentTopic.content[currentTier];
  const sections = parseMarkdown(content.markdownText);

  return (
    <div className="bg-white dark:bg-gray-800 border-4 border-ink rounded-xl shadow-2xl overflow-hidden">
      <TierSwitcher />

      <motion.div
        key={currentTier}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-16rem)]"
      >
        {/* Analogy Card (Beginner only) - Yellow Sticky Note */}
        {currentTier === 'beginner' && content.analogy && (
          <motion.div
            initial={{ scale: 0.9, rotate: -2 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="bg-yellow-200 dark:bg-yellow-900/60 p-6 rounded-sm shadow-xl transform rotate-1 border-2 border-yellow-300 dark:border-yellow-700"
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <Lightbulb className="h-8 w-8 text-gray-900 dark:text-yellow-100 flex-shrink-0" />
                <div className="absolute inset-0 border-2 border-gray-900 dark:border-yellow-100 rounded-full scale-125 opacity-50" />
              </div>
              <div className="flex-1">
                <p className="font-handwritten text-2xl font-bold text-gray-900 dark:text-yellow-100 mb-3">
                  Think of it like this...
                </p>
                <p className="font-typewriter text-lg text-gray-900 dark:text-gray-200 leading-relaxed">
                  {content.analogy}
                </p>
                <AnalogyVisualizer
                  analogy={content.analogy}
                  topicTitle={currentTopic.meta.title}
                  imagePath={`/images/analogies/${currentTopic.meta.slug}.png`}
                  visualizations={content.visualizations}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Time Complexity Analysis Box (Intermediate/Expert) */}
        {
          content.timeComplexityAnalysis && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-5 shadow-md mb-6"
            >
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-handwritten text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ⚡ Complexity Analysis
                  </h4>
                  <p className="font-typewriter text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {content.timeComplexityAnalysis}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        }

        {/* Parsed Content */}
        <div className="space-y-4">
          {sections.map((section, idx) => {
            if (section.type === 'heading') {
              const HeadingTag = `h${Math.min(section.level || 1, 3)}` as keyof JSX.IntrinsicElements;
              const sizes = ['text-3xl', 'text-2xl', 'text-xl'];
              return (
                <HeadingTag
                  key={idx}
                  className={`${sizes[(section.level || 1) - 1]} font-handwritten font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4 first:mt-0`}
                >
                  {section.content}
                </HeadingTag>
              );
            }

            if (section.type === 'paragraph') {
              // Check if it's a special callout
              const isCallout = section.content.startsWith('**') || section.content.includes('✅') || section.content.includes('❌');

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`${isCallout
                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border-l-4 border-yellow-500 dark:border-yellow-600'
                    : 'bg-gray-50 dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600'
                    } rounded-lg p-4 shadow-sm hover:shadow-md transition-all`}
                >
                  <p
                    className="font-typewriter text-gray-900 dark:text-gray-100 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: section.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-blue-600 dark:text-blue-400">$1</strong>')
                        .replace(/`(.*?)`/g, '<code class="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-pink-600 dark:text-pink-400">$1</code>')
                    }}
                  />
                </motion.div>
              );
            }

            if (section.type === 'list' && section.items) {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-50 dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-5 shadow-sm"
                >
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span
                          className="font-typewriter text-gray-900 dark:text-gray-100 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-blue-600 dark:text-blue-400">$1</strong>')
                              .replace(/`(.*?)`/g, '<code class="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-pink-600 dark:text-pink-400">$1</code>')
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            }

            if (section.type === 'table' && section.headers && section.rows) {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="overflow-x-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg shadow-md"
                >
                  <table className="w-full font-typewriter text-sm">
                    <thead className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-b-2 border-gray-300 dark:border-gray-600">
                      <tr>
                        {section.headers.map((header, hIdx) => (
                          <th
                            key={hIdx}
                            className="px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={`border-b border-gray-200 dark:border-gray-700 ${rIdx % 2 === 0
                            ? 'bg-gray-50 dark:bg-gray-900/30'
                            : 'bg-white dark:bg-gray-800'
                            } hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors`}
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className="px-4 py-3 text-gray-700 dark:text-gray-300"
                              dangerouslySetInnerHTML={{
                                __html: cell
                                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-blue-600 dark:text-blue-400">$1</strong>')
                                  .replace(/`(.*?)`/g, '<code class="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono text-pink-600 dark:text-pink-400">$1</code>')
                              }}
                            />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              );
            }

            return null;
          })}
        </div>

        {/* Code Snippets - Multi-Language Tabs */}
        {
          content.codeSnippets && content.codeSnippets.length > 0 && (
            <CodeSnippetTabs snippets={content.codeSnippets} />
          )
        }

        {/* References - Colorful Sticker Links */}
        <div className="mt-10 pt-6 border-t-2 border-dashed border-ink/30">
          <h3 className="text-xl font-handwritten font-bold text-ink mb-4">
            🔗 Learn More
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'GeeksForGeeks', color: 'crayon-green' },
              { name: 'MDN Docs', color: 'crayon-blue' },
              { name: 'LeetCode', color: 'crayon-yellow' },
              { name: 'StackOverflow', color: 'crayon-red' }
            ].map((site, idx) => (
              <motion.a
                key={site.name}
                href={`https://www.google.com/search?q=${currentTopic.meta.title}+${site.name}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ rotate: -3, y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`sticker icon-sticker ${site.color} px-5 py-3 flex items-center gap-2 text-white font-handwritten font-bold text-lg shadow-lg`}
                style={{ transform: `rotate(${(idx % 2 === 0 ? 2 : -2)}deg)` }}
              >
                <ExternalLink className="h-5 w-5" />
                {site.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div >
    </div >
  );
};
