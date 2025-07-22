import { FC } from 'react'

interface BannerProps {
	title: string
	desc: string
	children?: React.ReactNode
	variant?: 'primary' | 'secondary'
}

const Banner: FC<BannerProps> = ({ title, desc, children, variant = 'primary' }) => {
	return (
		<div
			className={`flex justify-center items-center gap-6 p-8 ${
				variant === 'primary' ? 'bg-primary' : 'bg-secondary'
			} rounded-2xl`}
		>
			<div className="w-full flex flex-col items-center gap-4">
				<h3
					className={`font-seravek_bold text-center text-[32px] ${
						variant === 'primary' ? 'text-secondary' : 'text-white'
					}`}
				>
					{title}
				</h3>

				<p
					className={`text-base text-center ${
						variant === 'primary' ? 'text-secondary' : 'text-outline-variant'
					}`}
				>
					{desc}
				</p>

				{children}
			</div>
		</div>
	)
}

export default Banner
