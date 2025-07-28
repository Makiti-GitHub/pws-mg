import React, { useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, User, Mail, CreditCard, Check } from 'lucide-react'
import { formProjectTypes, ProjectTypeCategoriesEnum } from '@/data/mock'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { t } from 'i18next'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'

// Define schemas for each step
const personalInfoSchema = z.object({
	fullName: z.string().min(2, {
		message: 'Full Name must be at least 2 characters.',
	}),
	email: z.email(),
	companyName: z.string().optional(),
	phoneNumber: z.string().optional(),
})

const projectInfoSchema = z.object({
	projectType: z.enum(ProjectTypeCategoriesEnum),
	budgetRange: z.string(),
	projectTimeline: z.string(),
	technicalRequirements: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: 'You have to select at least one item.',
	}),
	preferredTeamSize: z.string(),
})

const projectDescriptionSchema = z.object({
	projectDescription: z.string(),
})

// Combined schema for final validation
const fullFormSchema = personalInfoSchema.and(projectInfoSchema).and(projectDescriptionSchema)

// type PersonalInfo = z.infer<typeof personalInfoSchema>;
// type ContactInfo = z.infer<typeof contactInfoSchema>;
// type PaymentInfo = z.infer<typeof paymentInfoSchema>;
type FullFormData = z.infer<typeof fullFormSchema>

const steps = [
	{ title: 'Personal Info', icon: User, schema: personalInfoSchema },
	{ title: 'Project Info', icon: Mail, schema: projectInfoSchema },
	{ title: 'Project description', icon: CreditCard, schema: projectDescriptionSchema },
]

const slideVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 300 : -300,
		opacity: 0,
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 300 : -300,
		opacity: 0,
	}),
}

const StartYourProjectMultiStepForm: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(0)
	const [direction, setDirection] = useState(0)
	const [completedSteps, setCompletedSteps] = useState<number[]>([])

	const form = useForm<FullFormData>({
		resolver: zodResolver(fullFormSchema),
		mode: 'onChange',
	})

	const nextStep = async () => {
		const currentSchema = steps[currentStep].schema
		const currentData = form.getValues()

		try {
			currentSchema.parse(currentData)
			if (!completedSteps.includes(currentStep)) {
				setCompletedSteps([...completedSteps, currentStep])
			}
			if (currentStep < steps.length - 1) {
				setDirection(1)
				setCurrentStep(currentStep + 1)
				console.log(currentData)
			}
		} catch (error) {
			// Trigger validation to show errors
			console.log(error)

			await form.trigger()
		}
	}

	const prevStep = () => {
		if (currentStep > 0) {
			setDirection(-1)
			setCurrentStep(currentStep - 1)
		}
	}

	const goToStep = async (stepIndex: number) => {
		if (stepIndex <= Math.max(...completedSteps, -1) + 1) {
			setDirection(stepIndex > currentStep ? 1 : -1)
			setCurrentStep(stepIndex)
		}
	}

	const onSubmit = (data: FullFormData) => {
		console.log('Form submitted:', data)
		alert('Form submitted successfully!')
	}

	const stepComponents = [PersonalInfoStep, ProjectInfoStep, ProjectDescriptionInfoStep]
	const CurrentStepComponent = stepComponents[currentStep]

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="mx-auto bg-white">
					{/* Step Indicator */}
					<div className="flex items-center justify-between mb-8">
						{steps.map((step, index) => {
							const Icon = step.icon
							const isActive = index === currentStep
							const isCompleted = completedSteps.includes(index)
							const isAccessible = index <= Math.max(...completedSteps, -1) + 1

							return (
								<div key={index} className="flex items-center">
									<button
										onClick={() => goToStep(index)}
										disabled={!isAccessible}
										className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
											isActive
												? 'bg-blue-500 border-blue-500 text-white'
												: isCompleted
												? 'bg-green-500 border-green-500 text-white'
												: isAccessible
												? 'border-gray-300 text-gray-500 hover:border-blue-300'
												: 'border-gray-200 text-gray-300 cursor-not-allowed'
										}`}
									>
										{isCompleted ? <Check size={16} /> : <Icon size={16} />}
									</button>

									<span
										className={`ml-2 text-sm font-medium ${
											isActive
												? 'text-blue-600'
												: isCompleted
												? 'text-green-600'
												: 'text-gray-500'
										}`}
									>
										{step.title}
									</span>

									{index < steps.length - 1 && (
										<div
											className={`w-16 h-0.5 mx-4 ${
												isCompleted ? 'bg-green-500' : 'bg-gray-200'
											}`}
										/>
									)}
								</div>
							)
						})}
					</div>

					{/* Form Content */}
					<div>
						<div className="relative overflow-hidden min-h-[400px]">
							<AnimatePresence initial={false} custom={direction}>
								<motion.div
									key={currentStep}
									custom={direction}
									variants={slideVariants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{
										x: { type: 'spring', stiffness: 300, damping: 30 },
										opacity: { duration: 0.2 },
									}}
									className="absolute inset-0"
								>
									<CurrentStepComponent form={form} />
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Navigation Buttons */}
						<div className="flex justify-between mt-8">
							<button
								type="button"
								onClick={prevStep}
								disabled={currentStep === 0}
								className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
							>
								<ChevronLeft size={16} className="mr-1" />
								Previous
							</button>

							{currentStep === steps.length - 1 ? (
								<button
									type="button"
									onClick={form.handleSubmit(onSubmit)}
									className="flex items-center px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
								>
									Submit
									<Check size={16} className="ml-1" />
								</button>
							) : (
								<button
									type="button"
									onClick={nextStep}
									className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
								>
									Next
									<ChevronRight size={16} className="ml-1" />
								</button>
							)}
						</div>
					</div>
				</div>
			</form>
		</Form>
	)
}

export default StartYourProjectMultiStepForm

/**Steps */

const PersonalInfoStep: React.FC<{ form: UseFormReturn<FullFormData> }> = ({
	form: personalInfoForm,
}) => {
	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>

			<div className="flex gap-5">
				<FormField
					control={personalInfoForm.control}
					name="fullName"
					render={({ field }) => (
						<FormItem className="w-1/2 flex flex-col items-start">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.fullName.label',
								)}
								*
							</FormLabel>
							<FormControl>
								<Input
									placeholder={t(
										'pages.home.sections.startYourProjectToday.form.fields.fullName.placeholder',
									)}
									className="bg-surface-container px-3 py-2.5"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={personalInfoForm.control}
					name="email"
					render={({ field }) => (
						<FormItem className="w-1/2">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.emailAddress.label',
								)}
								*
							</FormLabel>
							<FormControl>
								<Input
									placeholder={t(
										'pages.home.sections.startYourProjectToday.form.fields.emailAddress.placeholder',
									)}
									className="bg-surface-container px-3 py-2.5"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			<div className="flex gap-5">
				<FormField
					control={personalInfoForm.control}
					name="companyName"
					render={({ field }) => (
						<FormItem className="w-1/2">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.companyName.label',
								)}
							</FormLabel>
							<FormControl>
								<Input
									placeholder={t(
										'pages.home.sections.startYourProjectToday.form.fields.companyName.placeholder',
									)}
									{...field}
									className="bg-surface-container px-3 py-2.5"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={personalInfoForm.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem className="w-1/2">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.phoneNumber.label',
								)}
							</FormLabel>
							<FormControl>
								<Input
									placeholder={t(
										'pages.home.sections.startYourProjectToday.form.fields.phoneNumber.placeholder',
									)}
									{...field}
									className="bg-surface-container px-3 py-2.5"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	)
}

const items = [
	{
		id: 'frontend-development',
		label: 'Frontend Development',
	},
	{
		id: 'database-design',
		label: 'Database Design',
	},
	{
		id: 'devops',
		label: 'DevOps',
	},
	{
		id: 'uxui-design',
		label: 'UX/UI Design',
	},
	{
		id: 'project-management',
		label: 'Project Management',
	},
	{
		id: 'backend-development',
		label: 'Backend Development',
	},
	{
		id: 'cloud-infrastructure',
		label: 'Cloud Infrastructure',
	},
	{
		id: 'mobile-development',
		label: 'Mobile Development',
	},
	{
		id: 'quality-assurance',
		label: 'Quality Assurance',
	},
	{
		id: 'technical-consulting',
		label: 'Technical Consulting',
	},
] as const

const ProjectInfoStep: React.FC<{ form: UseFormReturn<FullFormData> }> = ({ form }) => {
	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

			<div className="">
				<FormField
					control={form.control}
					name="projectType"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.projectType.label',
								)}
								*
							</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<SelectTrigger className="w-full bg-surface-container px-3 py-2.5">
										<SelectValue
											placeholder={t(
												'pages.home.sections.startYourProjectToday.form.fields.projectType.placeholder',
											)}
										/>
									</SelectTrigger>
									<SelectContent>
										{formProjectTypes.map((projectType, index) => (
											<SelectItem
												key={`form-project-type-${projectType.type}-${index}`}
												value={`${projectType.type}`}
											>
												{/* {t(projectType.label)} */}
												{projectType.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			<div className="flex gap-5">
				<FormField
					control={form.control}
					name="budgetRange"
					render={({ field }) => (
						<FormItem className="w-1/2">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.budgetRange.label',
								)}
								*
							</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<SelectTrigger className="w-full bg-surface-container px-3 py-2.5">
										<SelectValue
											placeholder={t(
												'pages.home.sections.startYourProjectToday.form.fields.budgetRange.placeholder',
											)}
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="apple">Apple</SelectItem>
										<SelectItem value="banana">Banana</SelectItem>
										<SelectItem value="blueberry">Blueberry</SelectItem>
										<SelectItem value="grapes">Grapes</SelectItem>
										<SelectItem value="pineapple">Pineapple</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="budgetRange"
					render={({ field }) => (
						<FormItem className="w-1/2">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.projectTimeline.label',
								)}
								*
							</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<SelectTrigger className="w-full bg-surface-container px-3 py-2.5">
										<SelectValue
											placeholder={t(
												'pages.home.sections.startYourProjectToday.form.fields.projectTimeline.placeholder',
											)}
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="apple">Apple</SelectItem>
										<SelectItem value="banana">Banana</SelectItem>
										<SelectItem value="blueberry">Blueberry</SelectItem>
										<SelectItem value="grapes">Grapes</SelectItem>
										<SelectItem value="pineapple">Pineapple</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			<div className="">
				<FormField
					control={form.control}
					name="technicalRequirements"
					render={() => (
						<FormItem className="w-full">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.technicalRequirements.label',
								)}
							</FormLabel>
							<div className="grid grid-rows-5 grid-cols-2 gap-2">
								{items.map((item) => (
									<FormField
										key={item.id}
										control={form.control}
										name="technicalRequirements"
										defaultValue={[]}
										render={({ field }) => (
											<FormItem
												key={item.id}
												className="flex flex-row items-center gap-2"
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(item.id)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([
																		...field.value,
																		item.id,
																  ])
																: field.onChange(
																		field.value?.filter(
																			(value) =>
																				value !== item.id,
																		),
																  )
														}}
													/>
												</FormControl>
												<FormLabel className="text-sm font-normal">
													{item.label}
												</FormLabel>
											</FormItem>
										)}
									/>
								))}
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			<div className="">
				<FormField
					control={form.control}
					name="preferredTeamSize"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.preferredTeamSize.label',
								)}
								*
							</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<SelectTrigger className="w-full bg-surface-container px-3 py-2.5">
										<SelectValue
											placeholder={t(
												'pages.home.sections.startYourProjectToday.form.fields.preferredTeamSize.placeholder',
											)}
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="apple">Apple</SelectItem>
										<SelectItem value="banana">Banana</SelectItem>
										<SelectItem value="blueberry">Blueberry</SelectItem>
										<SelectItem value="grapes">Grapes</SelectItem>
										<SelectItem value="pineapple">Pineapple</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	)
}

const ProjectDescriptionInfoStep: React.FC<{ form: UseFormReturn<FullFormData> }> = ({ form }) => {
	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

			<div className="">
				<FormField
					control={form.control}
					name="projectDescription"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.projectDescription.label',
								)}
								*
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder={t(
										'pages.home.sections.startYourProjectToday.form.fields.projectDescription.placeholder',
									)}
									{...field}
									rows={5}
									className="bg-surface-container px-3 py-2.5"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	)
}
