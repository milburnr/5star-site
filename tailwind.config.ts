import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        // Display + serif heading stack — design system editorial language
        // (ART-BIBLE-5STAR.md §2). Cormorant Garamond loaded per-page by
        // components that use it (see AltHeroFrame) to keep mobile PSI green.
        display: [
          "Cormorant",
          "Cormorant Garamond",
          "Bodoni 72 Display",
          "Didot",
          "Times New Roman",
          "serif",
        ],
        "heading-serif": [
          "Cormorant Garamond",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        // Body uses system font stack — instant render, no network round-trip.
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          // Legacy tokens — kept for backwards compatibility with existing pages.
          gold: "#E4C66E",
          "gold-light": "#F7E291",
          "gold-bright": "#EEC835",
          "gold-vibrant": "#F1B609",
          brown: "#815D01",
          "brown-dark": "#A57F0F",
          // Design system tokens (design-tokens-5star.json) — names match
          // the token file so they're self-documenting. Prefer these on new
          // components built against the editorial language.
          "primary-gold": "#D6B274",
          "display-gold": "#D6B274",
          "accent-gold": "#F5C77A",
          "gold-warm-bright": "#EEC835",
          "nav-gold": "#F7E291",
          "cta-cream": "#F5F0E8",
          "cta-amber": "#F1C77A",
          "cta-orange": "#E08A36",
          "cta-burnt-orange": "#B84A11",
          "burnt-orange": "#B84A11",
          cream: "#F5F0E8",
          "dark-bg": "#050403",
          "surface-ink": "#050403",
          "surface-brown-deep": "#120B06",
          "cta-text-dark": "#2B1810",
          "text-ivory": "#F2EADB",
        },
        gray: {
          primary: "#111827",
          text: "#1F2937",
          footer: "#747474",
          "footer-text": "#C8D5DC",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
