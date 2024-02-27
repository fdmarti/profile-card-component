/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-cyan': 'hsl(185, 75%, 39%)'
			},
			backgroundImage: {
				'card-patter': "url('/images/bg-pattern-card.svg')",
				'pattern-top': "url('/images/bg-pattern-top.svg')",
				'pattern-bottom': "url('/images/bg-pattern-bottom.svg')",
			},
			screens : {
				'mb' : '400px'
			}
		},
	},
	plugins: [],
}
