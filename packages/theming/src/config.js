import tailwindColors from "tailwindcss/colors";

export default (config) => ({
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        primary: "hsl(var(--p) / <alpha-value>)",
        "primary-focus": "hsl(var(--pf) / <alpha-value>)",
        "primary-content": "hsl(var(--pc) / <alpha-value>)",

        secondary: "hsl(var(--s) / <alpha-value>)",
        "secondary-focus": "hsl(var(--sf) / <alpha-value>)",
        "secondary-content": "hsl(var(--sc) / <alpha-value>)",

        accent: "hsl(var(--a) / <alpha-value>)",
        "accent-focus": "hsl(var(--af) / <alpha-value>)",
        "accent-content": "hsl(var(--ac) / <alpha-value>)",

        neutral: "hsl(var(--n) / <alpha-value>)",
        "neutral-focus": "hsl(var(--nf) / <alpha-value>)",
        "neutral-content": "hsl(var(--nc) / <alpha-value>)",

        "base-100": "hsl(var(--b1) / <alpha-value>)",
        "base-200": "hsl(var(--b2) / <alpha-value>)",
        "base-300": "hsl(var(--b3) / <alpha-value>)",
        "base-content": "hsl(var(--bc) / <alpha-value>)",

        info: "hsl(var(--in) / <alpha-value>)",
        "info-content": "hsl(var(--inc) / <alpha-value>)",

        success: "hsl(var(--su) / <alpha-value>)",
        "success-content": "hsl(var(--suc) / <alpha-value>)",

        warning: "hsl(var(--wa) / <alpha-value>)",
        "warning-content": "hsl(var(--wac) / <alpha-value>)",

        error: "hsl(var(--er) / <alpha-value>)",
        "error-content": "hsl(var(--erc) / <alpha-value>)",

        "neutral-50": tailwindColors.neutral[50],
        "neutral-100": tailwindColors.neutral[100],
        "neutral-200": tailwindColors.neutral[200],
        "neutral-300": tailwindColors.neutral[300],
        "neutral-400": tailwindColors.neutral[400],
        "neutral-500": tailwindColors.neutral[500],
        "neutral-600": tailwindColors.neutral[600],
        "neutral-700": tailwindColors.neutral[700],
        "neutral-800": tailwindColors.neutral[800],
        "neutral-900": tailwindColors.neutral[900],
        "neutral-950": tailwindColors.neutral[950],
      },
    },
  },
});
