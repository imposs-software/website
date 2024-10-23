import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [daisyui, addDynamicIconSelectors()],
	daisyui: {
		logs: false,
		themes: [
			{
				imposslight: {
					primary: '#085a9e',
					'primary-focus': '#276ca5',
					'primary-content': '#eeeeee',

					secondary: '#a11d21',
					'secondary-focus': '#a13a3e',
					'secondary-content': '#ffffff',

					accent: '#666',
					'accent-focus': '#5e6464',
					'accent-content': '#ffffff',

					neutral: '#cccccc',
					'neutral-focus': '#131616',
					'neutral-content': '#131616',

					'base-100': '#ffffff',
					'base-200': '#eeeeee',
					'base-300': '#cccccc',
					'base-content': '#131616',

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
				impossdark: {
					primary: '#085a9e',
					'primary-focus': '#276ca5',
					'primary-content': '#dddddd',

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
					'base-content': '#cccccc',

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
