import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        ink: '#07080b',
        paper: '#f5f7fb',
        electric: '#8b5cf6',
        cyan: '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 60px rgba(139, 92, 246, .20)',
      },
    },
  },
  plugins: [],
} satisfies Config