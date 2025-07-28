import { Button } from '@/components/ui/button'
import { SendIcon } from 'lucide-react'
import SectionHeader from '@/components/molecules/SectionHeader'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { formProjectTypes, ProjectTypeCategoriesEnum } from '@/data/mock'
import { useTranslation } from 'react-i18next'
import StartYourProjectMultiStepForm from './form/StartYourProjectForm'

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

const formSchema = z.object({
	fullName: z.string().min(2, {
		message: 'Fullname must be at least 2 characters.',
	}),
	email: z.email(),
	companyName: z.string().optional(),
	phoneNumber: z.string().optional(),
	projectType: z.enum(ProjectTypeCategoriesEnum),
	budgetRange: z.string(),
	projectTimeline: z.string(),
	technicalRequirements: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: 'You have to select at least one item.',
	}),
	preferredTeamSize: z.string(),
	projectDescription: z.string(),
})

const StartProjectSection = () => {
	const { t } = useTranslation()
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: '',
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<section className="px-8 md:px-[80px] lg:px-[120px] flex flex-col gap-8 w-full">
			<div className="space-y-[50px]">
				<SectionHeader
					title={t('pages.home.sections.startYourProjectToday.title')}
					subTitle={t('pages.home.sections.startYourProjectToday.subtitle')}
				/>

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

						<div className="flex gap-5">
							<FormField
								control={form.control}
								name="fullName"
								render={({ field }) => (
									<FormItem className="w-1/2">
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
								control={form.control}
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
								control={form.control}
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
								control={form.control}
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
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
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
															value={projectType.label}
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
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
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
													<SelectItem value="blueberry">
														Blueberry
													</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">
														Pineapple
													</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="projectTimeline"
								render={({ field }) => (
									<FormItem className="w-1/2">
										<FormLabel className="font-seravek_medium text-lg text-on-surface-variant">
											{t(
												'pages.home.sections.startYourProjectToday.form.fields.projectTimeline.label',
											)}
											*
										</FormLabel>
										<FormControl>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
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
													<SelectItem value="blueberry">
														Blueberry
													</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">
														Pineapple
													</SelectItem>
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
													render={({ field }) => (
														<FormItem
															key={item.id}
															className="flex flex-row items-center gap-2"
														>
															<FormControl>
																<Checkbox
																	checked={field.value?.includes(
																		item.id,
																	)}
																	onCheckedChange={(checked) => {
																		return checked
																			? field.onChange([
																					...field.value,
																					item.id,
																			  ])
																			: field.onChange(
																					field.value?.filter(
																						(value) =>
																							value !==
																							item.id,
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
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
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
													<SelectItem value="blueberry">
														Blueberry
													</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">
														Pineapple
													</SelectItem>
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

						<Button
							variant="primary"
							type="submit"
							className="rounded-4xl w-full h-max px-5 py-3 gap-3 hover:cursor-pointer"
						>
							<SendIcon className="size-5" />
							<span className="sr-only">Send Project Request</span>{' '}
							<span className="text-lg font-seravek_medium">
								Send Project Request
							</span>{' '}
						</Button>
					</form>
				</Form>

				<StartYourProjectMultiStepForm />
			</div>
		</section>
	)
}

export default StartProjectSection
