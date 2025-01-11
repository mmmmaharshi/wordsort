import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		daisyui,
		plugin(({ addUtilities }) => {
			addUtilities({
				'.field-sizing-content': {
					'field-sizing': 'content'
				}
			});
		})
	],
	daisyui: {
		themes: ['sunset']
	}
} satisfies Config;
