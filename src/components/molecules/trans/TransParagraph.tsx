import { Trans } from 'react-i18next'

interface TransParagraphProps {
	transKey: string
	emails?: string[]
	phones?: string[]
	links?: string[]
}

const TransParagraph = ({ transKey, links, emails, phones }: TransParagraphProps) => {
	const emailsRecord: Record<string, React.ReactElement> = {}
	const linksRecord: Record<string, React.ReactElement> = {}
	const phonesRecord: Record<string, React.ReactElement> = {}

	links?.forEach((item, index) => {
		linksRecord[`link${index + 1}`] = (
			<a href={item} target="_blank" className="text-primary" rel="noopener noreferrer" />
		)
	})

	emails?.forEach((item, index) => {
		emailsRecord[`email${index === 0 ? '' : index + 1}`] = (
			<a
				href={`mailto:${item}`}
				target="_blank"
				className="text-primary"
				rel="noopener noreferrer"
			/>
		)
	})

	phones?.forEach((item, index) => {
		phonesRecord[`phone${index === 0 ? '' : index + 1}`] = (
			<a
				href={`tel:${item}`}
				target="_blank"
				className="text-primary"
				rel="noopener noreferrer"
			/>
		)
	})

	return (
		<p>
			<Trans
				i18nKey={transKey}
				components={{
					bold: <strong className="font-seravek_bold" />,
					italic: <span className="font-seravek_italic" />,
					...emailsRecord,
					...linksRecord,
					...phonesRecord,
				}}
			/>
		</p>
	)
}

export default TransParagraph
