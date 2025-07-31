import { UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { t } from 'i18next'
import { Textarea } from '@/components/ui/textarea'
import { FullFormData } from '../FormSchema'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { formTeamSizes } from '@/data/mock'

const ProjectDescriptionInfoStep: React.FC<{
	form: UseFormReturn<FullFormData>
	stepIndex: number
}> = ({ form, stepIndex }) => {
	return (
		<div className="space-y-3 sm:space-y-4">
			<h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
				{t(`pages.home.sections.startYourProjectToday.steps.step${stepIndex}.indication`)}
			</h4>

			<div className="">
				<FormField
					control={form.control}
					name="preferredTeamSize"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
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
										{formTeamSizes.map((item, index) => (
											<SelectItem
												key={`form-team-size-${index}`}
												value={item.id}
											>
												{item.label}
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
					name="projectDescription"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
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
									className="bg-surface-container px-3 py-2.5 resize-none"
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

export default ProjectDescriptionInfoStep
