import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
		"!./src/pages/og-image/[slug].png.ts",
	],
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [],
	theme: {
		extend: {
			colors: {
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
				textColor: "hsl(var(--theme-text) / <alpha-value>)",
				textMuted: "hsl(var(--theme-text-muted) / <alpha-value>)",
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				serif: [...defaultTheme.fontFamily.serif],
			},
			transitionProperty: {
				height: "height",
			},
		},
	},
} satisfies Config;
