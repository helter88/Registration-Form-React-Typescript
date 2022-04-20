const { rootCertificates } = require('tls');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			keyframes: {
				'orbit-right': {
					'0%': { transform: 'rotate(0deg) translate(-30px) rotate(0deg)' },
					'100%': {
						transform: 'rotate(1turn) translate(-30px) rotate(-1turn)',
					},
				},
				'orbit-left': {
					'0%': { transform: 'rotate(0deg) translate(-30px) rotate(0deg)' },
					'100%': {
						transform: 'rotate(-1turn) translate(-30px) rotate(1turn)',
					},
				},
			},
			animation: {
				'orbit-right': 'orbit-right 25s linear infinite',
				'orbit-left': 'orbit-left 25s linear infinite',
			},
		},
	},
	plugins: [],
};
