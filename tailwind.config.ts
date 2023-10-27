import { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
export default {
	content: ['./src/**/*.{html.js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				flyIn: {
					'0%': { transform: 'translateY(-30px)' },
					'100%': { transfomr: 'translateY(0px)' }
				},
				rotate: {
					'0% 100%': { transform: 'rotate 180' }
				}
			},
			animation: {
				flyIn: 'flyIn 500ms ease-in ',
				rotate: 'rotate 500ms ease-in-out',
				bounceOnce: 'bounce 1s ease-in linear'
			}
		}
	},
	plugins: [tailwindcssAnimate]
} satisfies Config
