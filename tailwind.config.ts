import { Config } from 'tailwindcss'
export default {
	content: ['./src/**/*.{html.js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				flyIn: {
					'0%': { transform: 'translateY(-30px)' },
					'100%': { transfomr: 'translateY(0px)' }
				}
			},
			animation: {
				flyIn: 'flyIn 500ms ease-in '
			}
		}
	},
	plugins: []
} satisfies Config
