/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
	plugins: [
		require('tailwindcss')('./tailwind.config.cjs'),
		require('autoprefixer'),
	],
};
