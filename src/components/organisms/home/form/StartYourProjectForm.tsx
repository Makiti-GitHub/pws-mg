import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, User, Mail, CreditCard, Check } from 'lucide-react'
import { Form } from '@/components/ui/form'
import {
	FullFormData,
	fullFormSchema,
	personalInfoSchema,
	projectDescriptionSchema,
	projectInfoSchema,
} from './FormSchema'
import PersonalInfoStep from './steps/PersonalInfoStep'
import ProjectInfoStep from './steps/ProjectInfoStep'
import ProjectDescriptionInfoStep from './steps/ProjectDescriptionStep'
import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-select'
import { t } from 'i18next'

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

const steps = [
	{ title: 'Personal Info', icon: User, schema: personalInfoSchema },
	{ title: 'Project Info', icon: Mail, schema: projectInfoSchema },
	{ title: 'Project description', icon: CreditCard, schema: projectDescriptionSchema },
]

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

		const project = '+49 162 7265788'

		let text = `Demande de projet :\n\n`

		text += `${t('pages.home.sections.startYourProjectToday.form.fields.fullName.label')} : ${
			data.fullName
		}\n`

		text += `${t(
			'pages.home.sections.startYourProjectToday.form.fields.emailAddress.label',
		)} : ${data.email}\n`

		text += `${t(
			'pages.home.sections.startYourProjectToday.form.fields.companyName.label',
		)} : ${data.companyName}\n`

		text += `${t(
			'pages.home.sections.startYourProjectToday.form.fields.phoneNumber.label',
		)} : ${data.phoneNumber}\n`

		text += `${t(
			'pages.home.sections.startYourProjectToday.form.fields.phoneNumber.label',
		)} : ${data.phoneNumber}\n`

		text += `${t(
			'pages.home.sections.startYourProjectToday.form.fields.projectType.label',
		)} : ${data.projectType}\n`

		text += `${t(
			'pages.home.sections.startYourProjectToday.form.fields.budgetRange.label',
		)} : ${data.budgetRange}\n`

		text += `${t(
			'pages.home.sections.startYourProjectToday.form.fields.projectTimeline.label',
		)} : ${data.projectTimeline}\n`

		data.technicalRequirements.forEach((requirement) => {
			text += `\t• ${requirement}\n`
		})

		text += `${t(
			'pages.home.sections.startYourProjectToday.form.fields.projectDescription.label',
		)} : ${data.projectDescription}\n`

		text += `\n`

		// Create WhatsApp URL with phone number and optional message
		// Format phone number - remove any non-digit characters
		const formattedNumber = project?.replace(/\D/g, '')
		const encodedMessage = encodeURIComponent(text)
		const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`

		console.log(whatsappUrl)

		// Open WhatsApp in a new tab
		window.open(whatsappUrl, '_blank')
	}

	const stepComponents = [PersonalInfoStep, ProjectInfoStep, ProjectDescriptionInfoStep]
	const CurrentStepComponent = stepComponents[currentStep]

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="box_shadow_products_card p-6 flex flex-col gap-6 rounded-xl"
			>
				<div className="space-y-2">
					<p className="font-seravek_medium text-on-surface-variant text-xl">
						{t('pages.home.sections.startYourProjectToday.form.title')}
					</p>
					<p className="text-base text-outline">
						{t('pages.home.sections.startYourProjectToday.form.indication')}
					</p>
				</div>

				<div className=" bg-white">
					{/* Step Indicator */}
					<div className="flex items-center justify-between mb-8">
						{steps.map((step, index) => {
							const Icon = step.icon
							const isActive = index === currentStep
							const isCompleted = completedSteps.includes(index)
							const isAccessible = index <= Math.max(...completedSteps, -1) + 1

							return (
								<div key={index} className="flex items-center flex-1">
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
										className={`ml-2 text-sm font-seravek_medium hidden sm:block ${
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
										<Separator
											className={`flex-1 h-0.5 mx-4 ${
												isCompleted ? 'bg-green-500' : 'bg-gray-200'
											}`}
										/>
										// <div
										// 	className={`w-16 h-0.5 mx-4 ${
										// 		isCompleted ? 'bg-green-500' : 'bg-gray-200'
										// 	}`}
										// />
									)}
								</div>
							)
						})}
					</div>

					{/* Form Content */}
					<div>
						<div className="relative min-h-[500px]">
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
							<Button
								type="button"
								onClick={prevStep}
								disabled={currentStep === 0}
								className="flex items-center h-max px-4 py-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
							>
								<ChevronLeft size={16} />
								Previous
							</Button>

							{currentStep === steps.length - 1 ? (
								<Button
									type="button"
									onClick={form.handleSubmit(onSubmit)}
									className="flex items-center h-max px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
								>
									Submit
									<Check size={16} className="ml-1" />
								</Button>
							) : (
								<Button
									type="button"
									variant="primary"
									onClick={nextStep}
									className="flex items-center h-max px-4 py-2 rounded-full transition-colors"
								>
									Next
									<ChevronRight size={16} />
								</Button>
							)}
						</div>
					</div>
				</div>
			</form>
		</Form>
	)
}

export default StartYourProjectMultiStepForm
