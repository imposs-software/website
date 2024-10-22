import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
	},

	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				imposs: {
					primary: '#085a9e',
					'primary-focus': '#276ca5',
					'primary-content': '#131616',

					secondary: '#a11d21',
					'secondary-focus': '#a13a3e',
					'secondary-content': '#ffffff',

					accent: '#343737',
					'accent-focus': '#5e6464',
					'accent-content': '#ffffff',

					neutral: '#1b1d1d',
					'neutral-focus': '#131616',
					'neutral-content': '#ffffff',

					'base-100': '#1f1f1f',
					'base-200': '#1b1d1d',
					'base-300': '#131616',
					'base-content': '#ffffff',

					info: '#66c7ff',
					success: '#87cf3a',
					warning: '#e1d460',
					error: '#ff6b6b',

					'--rounded-box': '0',
					'--rounded-btn': '0',
					'--rounded-badge': '0',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': '',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px',
				},
			},
		],
	},
} as Config;
