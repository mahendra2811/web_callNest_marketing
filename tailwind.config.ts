import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "var(--brand-500)",
          600: "var(--brand-600)",
        },
        accent: {
          500: "var(--accent-500)",
        },
        ink: {
          900: "var(--ink-900)",
          600: "var(--ink-600)",
        },
        surface: {
          0: "var(--surface-0)",
          50: "var(--surface-50)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neu: "0 1px 2px rgba(15, 23, 42, 0.05), 0 8px 24px -12px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
        "neu-dark":
          "0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
