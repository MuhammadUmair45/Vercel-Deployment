import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      // screens: {
      //   "2xl": "1400px",
      // },
    },
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        rokkitt: "var(--font-rokkitt)",
      },
      colors: {
        border: "var(--border-color)",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        background: {
          grey: "var(--light-grey-bg)",
          blue: "var(--light-blue-bg)",
          footer: "var(--footer-bg)",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary-color)",
          headline: "var(--sub-heading-color)",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
        },

        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionProperty: {
        "opacity-transform": "opacity, transform",
      },
      transitionDuration: {
        "600": "600ms",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        "@media (max-width: 1024px)": {
          ".relative-important-mbl": {
            position: "relative !important",
          },
        },
        // Add other custom important utilities if needed
      });
    },
  ],
} satisfies Config;

export default config;
