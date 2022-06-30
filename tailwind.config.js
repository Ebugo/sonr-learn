module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: "1.20rem",
				sm: "1.20rem",
				lg: "4rem",
				xl: "6rem",
				"2xl": "10rem",
			},
		},
		colors: {
			"gray-100": "#E5E5E5",
			"black-100": "#424141",
			"black-400": "#0E040C",
			"blue-100": "#55ceff",
			"blue-400": "#1792ff",
			"green-400": "#0F6664",
			"white": "#FFFFFF",
		},
		fontFamily: {
			"josefin-sans": ["Josefin Sans", "sans-serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "100%",
					"@screen sm": {
						maxWidth: "768px",
					},
					"@screen md": {
						maxWidth: "992px",
					},
					"@screen lg": {
						maxWidth: "1536px",
					},
					"@screen xl": {
						maxWidth: "1800px",
					},
					"@screen 2xl": {
						maxWidth: "2160px",
					},
				},
			});
		},
	],
};
