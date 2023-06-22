import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"
//@ts-ignore
import animatePlugin from "tailwindcss-animate";

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "222.2 47.4% 11.2%",

        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",

        "--popover": "0 0% 100%",
        "--popover-foreground": "222.2 47.4% 11.2%",

        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",

        "--card": "0 0% 100%",
        "--card-foreground": "222.2 47.4% 11.2%",

        "--primary": "212 100% 48%",
        "--primary-foreground": "210 40% 98%",

        "--secondary": "210 40% 96.1%",
        "--secondary-foreground": "222.2 47.4% 11.2%",

        "--accent": "210 40% 96.1%",
        "--accent-foreground": "222.2 47.4% 11.2%",

        "--destructive": "339 90% 51%",
        "--destructive-foreground": "210 40% 98%",

        "--ring": "215 20.2% 65.1%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "0 0% 0%",
        "--foreground": "0 0% 100%",

        "--muted": "223 47% 11%",
        "--muted-foreground": "215.4 16.3% 56.9%",

        "--accent": "210 8% 9%",
        "--accent-foreground": "210 40% 98%",

        "--popover": "210 8% 9%",
        "--popover-foreground": "215 20.2% 65.1%",

        "--border": "210 8% 9%",
        "--input": "210 8% 9%",

        "--card": "224 71% 4%",
        "--card-foreground": "213 31% 91%",

        "--primary": "212 100% 48%",
        "--primary-foreground": "211 100% 96%",

        "--secondary": "222.2 47.4% 11.2%",
        "--secondary-foreground": "210 40% 98%",

        "--destructive": "339 90% 51%",
        "--destructive-foreground": "210 40% 98%",

        "--ring": "210 8% 9%",
        "--radius": "0.5rem",
      },
    })

    addBase({
      "*": {
        "@apply border-border": {},
        "text-rendering": "geometric-precision"
      },
      body: {
        "@apply bg-background text-foreground": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
    })
  },
  {
    darkMode: ["class"],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
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
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
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
          "rebound": {
            "0%": {
              transform: "scale(0.95)",
            },
            "40%": {
              transform: "scale(1.02)",
            },
            "80%": {
              transform: "scale(0.98)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
          "appearance-in": {
            "0%": {
              opacity: "0",
              transform: "translateZ(0)  scale(0.95)",
            },
            "60%": {
              opacity: "0.75",
              /* Avoid blurriness */
              // backfaceVisibility: "hidden",
              // webkitFontSmoothing: "antialiased",
              transform: "translateZ(0) scale(1.05)",
            },
            "100%": {
              opacity: "1",
              transform: "translateZ(0) scale(1)",
            },
          },
          "appearance-out": {
            "0%": {
              opacity: "1",
              transform: "scale(1)",
            },
            "100%": {
              opacity: "0",
              transform: "scale(0.5)",
            },
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "rebound": "rebound 0.3s ease-out",
          "appearance-in": "appearance-in 0.3s ease-out",
          "appearance-out": "appearance-out 0.1s ease-out",
        },
      },
    },
    plugins: [animatePlugin]
  }
)
