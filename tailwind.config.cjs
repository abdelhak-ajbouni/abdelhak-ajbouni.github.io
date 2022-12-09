/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
	},
  // TODO: remove unused plugins
	plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
}
