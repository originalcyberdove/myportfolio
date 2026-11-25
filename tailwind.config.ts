import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        cyber: {
          darkest: "#0b0d11",
          dark: "#11151b",
          navy: "#171d26",
          surface: "#202833",
          card: "rgba(25, 31, 40, 0.92)",
          border: "rgba(148, 163, 184, 0.18)",
          cyan: "#7daeff",
          blue: "#5b91f5",
          electric: "#3d78e8",
          emerald: "#71a6ff",
          amber: "#fbbf24",
          crimson: "#f87171",
        },
        black: {
          DEFAULT: "#000",
          100: "#040711",
          200: "rgba(10, 17, 36, 0.75)",
          300: "rgba(255, 255, 255, 0.08)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#E2E8F0",
          200: "#94A3B8",
        },
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      boxShadow: {
        "cyan-glow": "0 8px 24px -12px rgba(61, 120, 232, 0.45)",
        "blue-glow": "0 8px 24px -12px rgba(61, 120, 232, 0.35)",
        "emerald-glow": "0 8px 24px -12px rgba(61, 120, 232, 0.3)",
        "card-hover":
          "0 18px 34px -22px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(125, 174, 255, 0.12)",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        progressFill: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        blink: "blink 1s step-end infinite",
        "slide-up": "slideUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "progress-fill": "progressFill 3s ease-in-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
