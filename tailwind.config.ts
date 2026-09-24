import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        titanium: {
          950: '#06080E',
          900: '#0B0F19',
          800: '#111827',
          700: '#1F2937',
        },
        andina: {
          cyan: '#06B6D4',
          sky: '#0284C7',
          blue: '#2563EB',
          emerald: '#10B981',
          gold: '#F59E0B',
          cordano: '#80093A',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
