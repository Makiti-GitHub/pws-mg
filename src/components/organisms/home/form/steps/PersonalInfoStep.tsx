import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { t } from 'i18next'
import { FullFormData } from '../FormSchema'

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

export default PersonalInfoStep
