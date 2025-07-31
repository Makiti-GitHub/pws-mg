import { ProjectTypeCategoriesEnum } from '@/data/mock'
import z from 'zod'

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
})

const projectDescriptionSchema = z.object({
	preferredTeamSize: z.string(),
	projectDescription: z.string(),
})

// Combined schema for final validation
const fullFormSchema = personalInfoSchema.and(projectInfoSchema).and(projectDescriptionSchema)

export type FullFormData = z.infer<typeof fullFormSchema>

export { fullFormSchema, personalInfoSchema, projectInfoSchema, projectDescriptionSchema }
