{
	/** Home page data */
}

export const expertisesMock: {
	title: string
	content: {
		description: string
		list: string[]
	}
}[] = [
	{
		title: 'IT Outsourcing',
		content: {
			description: 'Complete IT outsourcing with dedicated teams',
			list: ['Dedicated Teams', 'Project Management', 'CMS Solutions'],
		},
	},
	{
		title: 'Software Development',
		content: {
			description: 'Agile development and sustainable UX/UI design',
			list: ['Agile Development', 'UX/UI Design', 'Quality Assurance'],
		},
	},
	{
		title: 'IT Consulting',
		content: {
			description: 'AI-driven design and innovation strategies',
			list: ['AI-Driven Design', 'Innovation Strategy', 'Technical Consulting'],
		},
	},
	{
		title: 'E-Commerce & SaaS',
		content: {
			description: 'Platform development and cloud solutions',
			list: ['E-Commerce Platforms', 'SaaS Development', 'Cloud Integration'],
		},
	},
	{
		title: 'Security & Compliance',
		content: {
			description: 'Comprehensive cybersecurity and regulatory compliance solutions',
			list: ['Cybersecurity Audits', 'Data Protection', 'Compliance Solutions'],
		},
	},
	{
		title: 'Digital Solutions',
		content: {
			description: 'Green digital marketing and app development',
			list: ['Digital Marketing', 'Mobile Application', 'Cross-Platform'],
		},
	},
]

export const solutionsProcessStackMock = [
	'Requirement Engineering',
	'UX/UI Design',
	'Software Development',
	'Quality Assurance',
	'DevOps & CI/CD',
	'Performance Optimization',
	'Cloud Solutions',
]

export const talentProfilesMock: {
	title: string
	cost: number
}[] = [
	{
		title: 'Frontend Developer',
		cost: 45,
	},
	{
		title: 'Backend Developer',
		cost: 50,
	},
	{
		title: 'DevOps Engineer',
		cost: 55,
	},
	{
		title: 'UX/UI Designer',
		cost: 45,
	},
	{
		title: 'Test Manager',
		cost: 40,
	},
	{
		title: 'Scrum Master',
		cost: 45,
	},
]

export const successStoriesMock: {
	title: string
	category: string
	description: string
	results: string[]
	tags: string[]
}[] = [
	{
		title: 'Matoa Traveller App',
		category: 'Mobile App',
		description:
			'This app simplifies booking bus trips, enabling users to plan and secure travel with route and schedule access.',
		results: [
			'Over 500,000 Downloads.',
			'A 150% increase in conversions.',
			'An average rating of 4.75.',
		],
		tags: ['Transportation', 'Travel'],
	},
	{
		title: 'Lyssafi',
		category: 'Web App',
		description:
			'This project involved designing a universal web application to offer a versatile payment solution, providing users with diverse payment methods for their convenience across all platforms.',
		results: [
			'Over 1 million visits.',
			'A 150% increase in conversions.',
			'An average rating of 4.75.',
		],
		tags: ['Finance', 'Cross Platform'],
	},
	{
		title: 'Inventory Stock Management',
		category: 'Mobile App',
		description:
			'This app enables businesses to track inventory, manage orders, and generate real-time reports with user-friendly features.',
		results: [
			'Over 500,000 Downloads.',
			'A 150% increase in conversions.',
			'An average rating of 4.75.',
		],
		tags: ['E-commerce', 'Logistics'],
	},
]

export const ourLiveProductsMock: {
	title: string
	category: string
	description: string
}[] = [
	{
		title: 'Inventory & Stock Management',
		category: 'Mobile App for Business',
		description:
			'Track inventory, manage orders, and monitor stock levels with this user-friendly mobile solution.',
	},
	{
		title: 'Ticket Management System',
		category: 'Multi Vendor Administration Platform',
		description:
			'Web platform for agencies to manage trips, vendors, and bookings with centralized control.',
	},
	{
		title: 'Inventory & Stock Management',
		category: 'Vendor Administration Platform',
		description:
			'Vendor-focused platform for real-time stock tracking, order management, and inventory insights.',
	},

	{
		title: 'Ticket Management System',
		category: 'Mobile App for End Users',
		description:
			'Mobile app for booking, managing, and tracking bus trips with real-time updates.',
	},
	{
		title: 'Payment Gateway System',
		category: 'Multi Vendor Platform',
		description:
			'Universal payment platform enabling secure, multi-vendor transactions across all web interfaces.',
	},
	{
		title: 'Payment Gateway System',
		category: 'Mobile App for End Users',
		description:
			'Mobile app for trip payments, scheduling, and seat tracking with a streamlined interface.',
	},
]

export const testimonialsMock: {
	quote: string
	category: string
	duration: number
	result: string
	user: {
		name: string
		image: string
		job: string
	}
}[] = [
	{
		quote: 'Makiti Group transformed our e-commerce platform beyond our expectations. Their outsourcing model allowed us to scale rapidly while maintaining exceptional quality. The dedicated team became an extension of our own.',
		category: 'E-Commerce Platforms',
		duration: 4,
		result: '150% conversion rate',
		user: {
			name: 'David Ngomdjom',
			job: 'VP Technology, DataTech Analytics',
			image: '',
		},
	},

	{
		quote: 'The healthcare management system developed by Makiti has revolutionized our operations. Their understanding of compliance requirements and attention to detail is outstanding. Best outsourcing decision we ever made.',
		category: 'Healthcare System',
		duration: 2,
		result: '60% operational efficiency',
		user: {
			name: 'Sarah Johnson',
			job: 'Product Manager, Creative UX',
			image: '',
		},
	},

	{
		quote: 'Working with Makiti on our mobile banking app was seamless. Their agile approach and security expertise ensured we launched on time with bank-grade security. The app now has over 1 million downloads.',
		category: 'Mobile Banking App',
		duration: 6,
		result: '1M+ downloads',
		user: {
			name: 'Michael Rodriguez',
			job: 'Marketing Director, EcoSmart',
			image: '',
		},
	},

	{
		quote: "The AI-powered analytics dashboard created by Makiti has given us insights we never thought possible. Their team's expertise in machine learning and data visualization is exceptional.",
		category: 'Analytics Dashboard',
		duration: 5,
		result: '300% increase in data insights',
		user: {
			name: 'Lisa Anderson',
			job: 'Operations Lead, CloudNext',
			image: '',
		},
	},
	{
		quote: 'The IoT fleet management platform has transformed our logistics operations. Real-time tracking and predictive maintenance have reduced our costs by 25%. Makiti delivered beyond our expectations.',
		category: 'IoT Platform',
		duration: 1,
		result: '25% reduction in operational cost',
		user: {
			name: 'Emily Carter',
			job: 'Brand Manager, StyleWave',
			image: '',
		},
	},

	{
		quote: 'Our CRM solution developed by Makiti has doubled our lead conversion rates. The automation workflows and integration capabilities have streamlined our entire sales process.',
		category: 'Saas CRM',
		duration: 3,
		result: '200% lead conversion',
		user: {
			name: 'Robert Wilson',
			job: 'CEO, MarketPro',
			image: '',
		},
	},
]

export const chooseReasonsMock: {
	title: string
	desc: string
}[] = [
	{
		title: 'Agile Approach',
		desc: 'Fast, iterative development with continuous feedback and rapid deployment cycles.',
	},
	{
		title: 'Sustainable Design',
		desc: 'Fast, iterative development with continuous feedback and rapid deployment cycles.',
	},
	{
		title: 'Innovation Focus',
		desc: 'Cutting-edge AI-driven solutions and innovative approaches to complex challenges.',
	},
	{
		title: 'Expert Consulting',
		desc: 'Strategic IT consulting with deep industry expertise and proven methodologies.',
	},
	{
		title: 'Security First',
		desc: 'Enterprise-grade security measures and compliance with international standards.',
	},
	{
		title: '24/7 Support',
		desc: 'Round-the-clock technical support and monitoring for mission-critical systems.',
	},
	{
		title: 'Quality Assurance',
		desc: 'Rigorous testing and quality control processes ensuring delivery excellence.',
	},
	{
		title: 'Global Reach',
		desc: 'International team with multilingual support and cross-cultural expertise.',
	},
]

export const frequentlyAskedQuestionsMock: { question: string; answer: string }[] = [
	{
		question: 'What is IT Outsourcing and how does it work?',
		answer: 'Our pricing structure is based on project size, complexity, and timeline. We offer flexible pricing options to suit your needs.',
	},
	{
		question: 'Why should I choose IT outsourcing over hiring in-house developers?',
		answer: 'Yes, we offer discounts for multiple projects or contracts. Please contact us for more information.',
	},

	{
		question: 'How do you ensure data security and confidentiality?',
		answer: 'Yes, we offer discounts for multiple projects or contracts. Please contact us for more information.',
	},

	{
		question: 'How does communication work with outsourced teams?',
		answer: 'Yes, we offer discounts for multiple projects or contracts. Please contact us for more information.',
	},

	{
		question: 'What are your pricing models and how do you structure costs?',
		answer: 'Yes, we offer discounts for multiple projects or contracts. Please contact us for more information.',
	},

	{
		question: 'How long does it take to start a project and deliver results?',
		answer: 'Yes, we offer discounts for multiple projects or contracts. Please contact us for more information.',
	},

	{
		question: 'What technologies and skills do your teams specialize in?',
		answer: 'Yes, we offer discounts for multiple projects or contracts. Please contact us for more information.',
	},
]
