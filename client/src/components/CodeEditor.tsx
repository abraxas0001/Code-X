import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';
import { Play, Loader2, Monitor } from 'lucide-react';
import { Button } from './ui/Button';
import { useTopicStore } from '@/store/topicStore';
import { executeCode } from '@/lib/api';
import { toast } from 'sonner';
import type { Language } from '@/types';

const languageMap: Record<Language, { label: string; monacoLang: string; color: string }> = {
  python: { label: 'Python', monacoLang: 'python', color: 'bg-blue-400' },
  javascript: { label: 'JavaScript', monacoLang: 'javascript', color: 'bg-yellow-400' },
  cpp: { label: 'C++', monacoLang: 'cpp', color: 'bg-purple-400' },
  java: { label: 'Java', monacoLang: 'java', color: 'bg-red-400' },
};

export const CodeEditor = () => {
  const { currentTopic, currentLanguage, setCurrentLanguage } = useTopicStore();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Compiling...');
    
    try {
      const result = await executeCode(code, currentLanguage);
      
      if (result.success) {
        setOutput(result.output || 'Execution completed successfully');
        toast.success('Code executed successfully!');
      } else {
        setOutput(`Error: ${result.error}`);
        toast.error('Compilation failed');
      }
    } catch (error) {
      setOutput('Failed to execute code. Please try again.');
      toast.error('Execution error');
    } finally {
      setIsRunning(false);
    }
  };

  const initialCode = currentTopic?.interactive.playgroundInitialCode[currentLanguage] || 
    '# Write your code here\nprint("Hello, OmniLearn!")';

  return (
    <div className="flex flex-col h-full">
      {/* Computer Monitor Bezel */}
      <div className="bg-gradient-to-b from-[#e8e8d0] to-[#d4d4c8] dark:from-gray-800 dark:to-gray-900 p-4 rounded-t-lg border-4 border-[#a0a090] dark:border-gray-700 shadow-sketch">
        {/* Monitor Brand Label */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            <span className="text-sm font-typewriter font-bold text-gray-700 dark:text-gray-300">Your Coding Playground</span>
          </div>
          {/* Power LED */}
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
        </div>

        {/* Language Tabs - Floppy Disk Style */}
        <div className="flex gap-2 mb-3">
          {(Object.keys(languageMap) as Language[]).map((lang) => (
            <motion.button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 rounded-lg text-sm font-typewriter font-bold border-2 transition-all ${
                currentLanguage === lang
                  ? `${languageMap[lang].color} border-gray-800 dark:border-gray-200 text-gray-900 dark:text-gray-900 shadow-lg`
                  : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            >
              💾 {languageMap[lang].label}
            </motion.button>
          ))}
        </div>

        {/* Screen */}
        <div className="bg-[#1a1a1a] rounded-sm border-4 border-[#2a2a2a] shadow-inner overflow-hidden">
          <div className="h-[400px]">
            <Editor
              height="100%"
              language={languageMap[currentLanguage].monacoLang}
              theme="vs-dark"
              value={code || initialCode}
              onChange={(value) => setCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                fontFamily: 'Courier Prime, Courier New, monospace',
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                cursorStyle: 'block',
                cursorBlinking: 'solid',
              }}
            />
          </div>
        </div>

        {/* Run Button - Big Red Button Style */}
        <div className="mt-3 flex justify-center">
          <Button
            onClick={handleRun}
            disabled={isRunning}
            variant="eraser"
            size="lg"
            className="min-w-[200px] font-bold text-base"
          >
            {isRunning ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                RUNNING...
              </>
            ) : (
              <>
                <Play className="mr-2 h-5 w-5 fill-current" />
                RUN CODE
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Output Console - Green Screen Terminal */}
      <div className="flex-1 bg-[#0a0a0a] dark:bg-gray-950 p-4 border-4 border-[#a0a090] dark:border-gray-700 border-t-0 rounded-b-lg shadow-inner">
        <div className="h-full bg-[#001100] dark:bg-gray-900 rounded-sm p-3 font-typewriter text-sm overflow-auto border-2 border-[#003300] dark:border-gray-700">
          <div className="text-[#00ff00] dark:text-green-400 mb-2 font-bold text-base">
            {'>'} OUTPUT CONSOLE
          </div>
          <pre className="text-[#00ff00] dark:text-green-400 whitespace-pre-wrap">
            {output || '> Waiting for code execution...'}
          </pre>
          {/* Blinking cursor */}
          {!isRunning && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-[#00ff00] dark:bg-green-400 ml-1"
            />
          )}
        </div>
      </div>
    </div>
  );
};
