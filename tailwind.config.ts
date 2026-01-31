import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Lora', 'sans-serif']
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" }
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" }
                },
                "shimmer-x": {
                    "0%": { transform: "translateX(-200%)" },
                    "100%": { transform: "translateX(200%)" }
                },
                "shimmer-y": {
                    "0%": { transform: "translateY(-200%)" },
                    "100%": { transform: "translateY(200%)" }
                },
                "twinkle": {
                    "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
                    "50%": { opacity: "1", transform: "scale(1.2)" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 1s ease-out forwards",
                "fade-in-up": "fade-in-up 1s ease-out forwards",
                "scale-in": "scale-in 1s ease-out forwards",
                "bounce-gentle": "bounce-gentle 2s infinite",
                "shimmer-x": "shimmer-x 3s infinite linear",
                "shimmer-y": "shimmer-y 3s infinite linear",
                "twinkle": "twinkle 3s ease-in-out infinite",
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
