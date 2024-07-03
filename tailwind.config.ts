import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#D22D19',
				secondary: '#F6DADA',
				'foreground-hint': '#A1A1A1',
				'foreground-primary': '#222222',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'20': '20px',
				'30': '30px',
			},
			fontFamily: {
				sans: [...fontFamily.sans],
			},
			scale: {
				101: '1.01',
				102: '1.02',
				103: '1.03',
				104: '1.04',
			},
			boxShadow: {
				form: '4px 4px 100px 8px #FF6D4C40',
			},
		},
	},
};
