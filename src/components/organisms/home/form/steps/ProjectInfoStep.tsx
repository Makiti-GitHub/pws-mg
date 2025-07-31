import {
	formBudgetRanges,
	formProjectTimelines,
	formProjectTypes,
	formTechnicalRequirements,
} from '@/data/mock'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { t } from 'i18next'
import { Checkbox } from '@/components/ui/checkbox'
import { UseFormReturn } from 'react-hook-form'
import { FullFormData } from '../FormSchema'

const ProjectInfoStep: React.FC<{ form: UseFormReturn<FullFormData>; stepIndex: number }> = ({
	form,
	stepIndex,
}) => {
	return (
		<div className="space-y-3 sm:space-y-4">
			<h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
				{t(`pages.home.sections.startYourProjectToday.steps.step${stepIndex}.indication`)}
			</h4>

			<div className="">
				<FormField
					control={form.control}
					name="projectType"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
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

			<div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
				<FormField
					control={form.control}
					name="budgetRange"
					render={({ field }) => (
						<FormItem className="sm:w-1/2 flex flex-col items-start">
							<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
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
										{formBudgetRanges.map((budgetRange, index) => (
											<SelectItem
												value={budgetRange}
												key={`form-budget-range-${budgetRange}-${index}`}
											>
												{budgetRange}
											</SelectItem>
										))}
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
						<FormItem className="sm:w-1/2 flex flex-col items-start">
							<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
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
										{formProjectTimelines.map((projectTimeline, index) => (
											<SelectItem
												value={projectTimeline}
												key={`form-project-timeline-${projectTimeline}-${index}`}
											>
												{projectTimeline}
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

			<div className="">
				<FormField
					control={form.control}
					name="technicalRequirements"
					render={() => (
						<FormItem className="w-full">
							<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
								{t(
									'pages.home.sections.startYourProjectToday.form.fields.technicalRequirements.label',
								)}
							</FormLabel>
							<div className="grid sm:grid-rows-5 sm:grid-cols-2 gap-2">
								{formTechnicalRequirements.map((item) => (
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
														className="hover:cursor-pointer"
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
		</div>
	)
}

export default ProjectInfoStep
