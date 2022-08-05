/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				robott: ["Roboto", "sans-serif"],
			},

			fontSize: {
				heroTitle: "30px",
				heroPara: "20px",
			},

			colors: {
				bodyMain: "#1f2632",
				clrSmall: "#5ec5b0",
				clrBtn: "#ffe031",
				clrLink: "#9ca3af",
			},
		},
	},
	plugins: [],
};
