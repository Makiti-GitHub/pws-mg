import SectionHeader from '@/components/molecules/SectionHeader'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from '@rasenganjs/image'
import RoundedTag from '@/components/atoms/tag/RoundedTag'

type Member = {
	name: string
	role: string
	roleDesc: string
	image: string
	experience: number
	tags: string[]
}

const teams: Member[] = [
	{
		name: 'Ousmanou Aboubakar',
		role: 'Chief Marketing Officer & Chief Financial Officer',
		experience: 8,
		image: '/static/images/teams/dilane-kombou.png',
		tags: ['Business Development', 'Client Relations'],
		roleDesc:
			'Visionary leader with extensive experience in business strategy and client relations, driving company growth and innovation.',
	},
	{
		name: 'Marie-Josée Mache',
		role: 'Chief Technology Officer',
		experience: 7,
		image: '/static/images/teams/2.jpeg',
		tags: ['Strategic Leadership', 'Software Architecture'],
		roleDesc:
			'Strategic technology leader with deep expertise in software architecture, driving innovative technical solutions and organizational growth.',
	},
	{
		name: 'Ivan Axel Ngomdjom',
		role: 'Project Analyst',
		experience: 6,
		image: '/static/images/teams/3.jpeg',
		tags: ['Cross Platform', 'Marketing'],
		roleDesc:
			'Detail-oriented analyst with experience in cross-platform initiatives, leveraging marketing insights to optimize project outcomes.',
	},
	{
		name: 'Armel Dilane Mbianda Kombou',
		role: 'Software Developer',
		experience: 4,
		tags: ['Coding', 'Software Development'],
		image: '/static/images/teams/5.jpeg',
		roleDesc:
			'Skilled software developer with robust coding abilities, building and maintaining high-quality software solutions.',
	},
	{
		name: 'Virginie Ndjenaar Adama Mando',
		role: 'Junior Key Account Manager & Executive assistant',
		experience: 3,
		tags: ['Marketing', 'Client Relations'],
		roleDesc:
			'Dynamic professional adept at client relations, supporting key accounts and contributing to marketing initiatives.',
		image: '/static/images/teams/6.jpeg',
	},
	{
		name: 'Lawal Michael Fuad',
		role: 'Lead Designer',
		tags: ['Prototyping', 'Software Design'],
		experience: 2,
		roleDesc:
			'Creative lead designer specializing in prototyping and software design, crafting intuitive and engaging user experiences.',
		image: '/static/images/teams/4.jpeg',
	},
]

interface OurTeamSectionProps {
	className?: string
}

const OurTeamSection: FC<OurTeamSectionProps> = ({ className }) => {
	return (
		<section className={cn('flex flex-col gap-6 pb-16', className)}>
			<SectionHeader
				title="Meet Our Team"
				subTitle="The talented professionals behind our success"
			/>

			<div className="relative mt-20 md:mt-10">
				<Carousel
					className="w-full relative"
					opts={{
						align: 'start',
						loop: true,
					}}
				>
					<CarouselContent>
						{teams.map((member, index) => (
							<CarouselItem
								className="basis-full sm:basis-1/2 xl:basis-1/4"
								key={index}
							>
								<TeamItem member={member} />
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="absolute -top-10 right-8">
						<CarouselPrevious className="hover:cursor-pointer bg-white dark:bg-white hover:bg-white/80 dark:hover:bg-white/80 hover:text-black/90 dark:border-transparent glassy_navbar2" />
					</div>

					<div className="absolute -top-10 right-12">
						<CarouselNext
							size={'icon'}
							className="hover:cursor-pointer bg-white dark:bg-white hover:bg-white/80 dark:hover:bg-white/80 hover:text-black/90 dark:border-transparent glassy_navbar2"
						/>
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default OurTeamSection

const TeamItem = ({ member }: { member: Member }) => {
	return (
		<article className="w-full hover:scale-95 transition-all duration-300 ease-in-out">
			<Image
				src={member.image}
				alt={member.name}
				width={'100%'}
				height={300}
				className="object-top"
			/>

			<div className="mt-4 space-y-4 flex flex-col">
				<div className="h-16">
					<h2 className="text-md font-medium text-foreground">{member.name}</h2>
					<p className=" text-sm text-foreground/70 space-x-1">
						<span>{member.role}</span> <span>({member.experience}+ years)</span>
					</p>
				</div>

				<div className="space-y-4">
					<p>{member.roleDesc}</p>

					<div className="flex gap-2 flex-wrap">
						{member.tags.map((tag, index) => (
							<RoundedTag
								className="rounded-[8px] font-seravek_medium text-base text-center text-inverse-surface"
								key={index}
								label={tag}
							/>
						))}
					</div>
				</div>
			</div>
		</article>
	)
}
