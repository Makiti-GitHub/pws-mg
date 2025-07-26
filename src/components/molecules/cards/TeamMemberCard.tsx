import { motion } from 'framer-motion'
import Image from '@rasenganjs/image'
import { useState } from 'react'
import { Member } from '@/data/mock'

const TeamMemberCard = ({ member }: { member: Member }) => {
	const [isFlipped, setIsFlipped] = useState(false)

	return (
		<article
			className="relative w-80 h-96 cursor-pointer perspective-1000"
			onMouseEnter={() => setIsFlipped(true)}
			onMouseLeave={() => setIsFlipped(false)}
		>
			<motion.div
				className="relative w-full h-full preserve-3d py-1"
				animate={{ rotateY: isFlipped ? 180 : 0 }}
				transition={{ duration: 0.6, ease: 'easeInOut' }}
				style={{ transformStyle: 'preserve-3d' }}
			>
				{/* Front of the card */}
				<motion.div
					className="absolute inset-0 w-full h-full backface-hidden flex flex-col gap-8"
					style={{ backfaceVisibility: 'hidden' }}
				>
					<Image
						src={member.image}
						alt={member.name}
						width={'100%'}
						height={300}
						className="object-top rounded-xl"
					/>

					<div className="h-16">
						<h2 className="text-md font-medium text-foreground">{member.name}</h2>
						<p className=" text-sm text-foreground/70 space-x-1">
							<span>{member.role}</span> <span>({member.experience}+ years)</span>
						</p>
					</div>
				</motion.div>

				{/* Back of the card */}
				<motion.div
					className="absolute inset-0 w-full h-full rounded-xl backface-hidden bg-secondary text-white p-6 flex flex-col"
					style={{
						backfaceVisibility: 'hidden',
						transform: 'rotateY(180deg)',
					}}
				>
					<div className="flex-1 flex flex-col justify-between">
						<div>
							<h3 className="text-xl font-bold mb-3">{member.name}</h3>
							<p className="text-indigo-200 text-sm mb-4">{member.roleDesc}</p>
						</div>

						<div className="mb-4">
							<h4 className="font-semibold mb-2 text-xl">Skills:</h4>
							<div className="flex flex-wrap gap-1">
								{member.tags.map((skill, index) => (
									<span
										key={index}
										className="bg-white/20 px-2 py-1 rounded-lg font-seravek_medium text-base"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</article>
	)
}

export default TeamMemberCard
