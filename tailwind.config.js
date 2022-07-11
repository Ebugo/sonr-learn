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
				lg: "3.5rem",
				xl: "3.5rem",
				"2xl": "3.5rem",
			},
		},
		colors: {
			"gray-100": "#E5E5E5",
			"black-100": "#424141",
			"black-400": "#0E040C",
			"black-500": "#13111A",
			"blue-100": "#55ceff",
			"blue-400": "#1792ff",
			"blue-500": "#0D6ECC",
			"green-400": "#0F6664",
			"white": "#FFFFFF",
		},
		fontFamily: {
			"thicccboi": ["THICCCBOI-Regular", "sans-serif"],
			"thicccboi-bold": ["THICCCBOI-Bold", "sans-serif"],
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
						maxWidth: "1440px",
					},
					"@screen xl": {
						maxWidth: "1440px",
					},
					"@screen 2xl": {
						maxWidth: "1440px",
					},
				},
			});
		},
	],
};
