/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'var(--background)',
		  foreground: 'var(--foreground)'
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		animation: {
		  blob: "blob 7s infinite",
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
		keyframes: {
		  blob: {
			"0%": {
			  transform: "translate(0px, 0px) scale(1)",
			},
			"33%": {
			  transform: "translate(30px, -50px) scale(1.1)",
			},
			"66%": {
			  transform: "translate(-20px, 20px) scale(0.9)",
			},
			"100%": {
			  transform: "translate(0px, 0px) scale(1)",
			},
		  },
		  "accordion-down": {
			from: { height: 0 },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: 0 },
		  },
		},
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };