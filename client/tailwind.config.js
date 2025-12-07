/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Electric 90s Notebook Theme - VIBRANT!
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        lines: 'var(--lines)',
        
        // Neon Crayon Colors
        'crayon-pink': '#ff7675',
        'crayon-blue': '#74b9ff',
        'crayon-purple': '#6c5ce7',
        'crayon-mint': '#00b894',
        'crayon-yellow': '#fdcb6e',
        'crayon-red': '#ff5e57',
        'crayon-green': '#2ecc71',
        'crayon-orange': '#ff9f43',
        
        // Legacy (keeping for compatibility)
        pencil: '#fdcb6e',
        eraser: '#ff7675',
        chalkboard: '#2d3436',
        chalk: '#dfe6e9',
        'teacher-red': '#eb5757',
        'dusty-green': '#00b894',
        'muted-orange': '#ff9f43',
        'notebook-cream': '#ffffff',
        'ruled-line': '#e5e7eb',
        
        // Legacy colors for compatibility
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      backgroundImage: {
        'ruled-paper': "repeating-linear-gradient(transparent, transparent 31px, #e5e5e5 31px, #e5e5e5 32px)",
        'grid-paper': "linear-gradient(#e5e5e510 1px, transparent 1px), linear-gradient(90deg, #e5e5e510 1px, transparent 1px)",
        'chalkboard-texture': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23noise)\" opacity=\"0.05\" /%3E%3C/svg%3E')",
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"paper\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.04\" numOctaves=\"5\" /%3E%3CfeColorMatrix type=\"saturate\" values=\"0\" /%3E%3C/filter%3E%3Crect width=\"200\" height=\"200\" filter=\"url(%23paper)\" opacity=\"0.03\" /%3E%3C/svg%3E')",
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px rgba(0,0,0,1)',
        'hard-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'hard-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'sketch': '3px 3px 0px 0px rgba(0,0,0,1)',
        'sketch-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'sticker': '0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
      },
      fontFamily: {
        'handwritten': ['Patrick Hand', 'Caveat', 'cursive'],
        'typewriter': ['Courier Prime', 'Courier New', 'monospace'],
        'textbook': ['Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'peel': 'peel 0.3s ease-out',
        'squish': 'squish 0.2s ease-in-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        peel: {
          '0%': { transform: 'rotate(0deg) translateY(0)' },
          '100%': { transform: 'rotate(-2deg) translateY(-2px)' },
        },
        squish: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95) scaleY(0.9)' },
        },
      },
      backgroundSize: {
        'ruled': '100% 32px',
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
};
