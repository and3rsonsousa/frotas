import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			colors: {
				brand: "#0000a8",
				accent: "#E84E0F",
			},
		},
	},
	plugins: [],
} satisfies Config;
