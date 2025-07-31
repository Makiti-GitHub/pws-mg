const firstTextVariant = {
	initial: {
		y: 0,
	},
	hover: {
		y: '-100%',
		transition: {
			duration: 1.125,
			ease: [0.19, 1, 0.22, 1],
		},
	},
	animate: {
		y: 0,
		transition: {
			duration: 1.125,
			ease: [0.19, 1, 0.22, 1],
		},
	},
}

const secondTextVariant = {
	initial: {
		y: '100%',
	},
	hover: {
		y: 0,
		transition: {
			duration: 1.125,
			ease: [0.19, 1, 0.22, 1],
		},
	},
	animate: {
		y: '100%',
		transition: {
			duration: 1.125,
			ease: [0.19, 1, 0.22, 1],
			type: 'spring',
			stiffness: 200,
			damping: '10',
		},
	},
}

export { firstTextVariant, secondTextVariant }
