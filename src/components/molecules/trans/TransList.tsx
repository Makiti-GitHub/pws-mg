import { Trans, useTranslation } from 'react-i18next'

interface TransListProps {
	transKey: string
	links?: string[]
	listKey?: string
}

const TransList = ({ transKey, links, listKey = 'ul' }: TransListProps) => {
	const { t } = useTranslation()

	const listRecord: Record<string, React.ReactElement> = {}

	links?.forEach((item, index) => {
		listRecord[`link${index + 1}`] = (
			<a href={item} target="_blank" className="text-primary" rel="noopener noreferrer" />
		)
	})

	const list = t(`${transKey}.${listKey}`, {
		returnObjects: true,
	}) as string[] | undefined

	return (
		<ul className="list-disc pl-12">
			{Array.isArray(list) &&
				list?.map((_, index) => (
					<li
						key={`${transKey}.${listKey}.${index}`}
						className="text-gray-700 leading-relaxed"
					>
						<Trans
							i18nKey={`${transKey}.${listKey}.${index}`}
							components={{
								bold: <strong className="font-seravek_bold" />,
								italic: <span className="font-seravek_italic" />,
								...listRecord,
							}}
						/>
					</li>
				))}
		</ul>
	)
}

export default TransList
