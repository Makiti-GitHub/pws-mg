import { useTranslation } from 'react-i18next'
import { useIntlContext } from '@/hooks/guard/ContextGuard'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const LanguageButton = () => {
	const intl = useIntlContext()
	const { i18n, t } = useTranslation()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="cursor-pointer rounded-lg outline-none hover:bg-accent hover:text-accent-foreground focus-visible:bg-secondary">
				<Tooltip>
					<TooltipTrigger asChild>
						<div className="flex gap-2 p-1">
							<img
								className="size-6"
								src={intl.getLangIcon(i18n.resolvedLanguage!)}
								alt={i18n.resolvedLanguage}
							/>
							<span className={`font-sevarek_bold text-white uppercase`}>
								{i18n.resolvedLanguage}EN
							</span>
						</div>
					</TooltipTrigger>
					<TooltipContent>
						<p className="text-secondary">
							{intl.langs?.[i18n.resolvedLanguage!]?.nativeName}
						</p>
					</TooltipContent>
				</Tooltip>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="bottom" align="end" className="glassy_navbar2">
				<DropdownMenuLabel className="text-white">{t('languages')}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{Object.keys(intl.langs ?? {}).map((lng, index) => (
					<DropdownMenuCheckboxItem
						checked={i18n.resolvedLanguage === lng}
						className={`flex w-full justify-start p-2 ${
							i18n.resolvedLanguage === lng ? 'font-seravek_bold' : ''
						} rounded-sm hover:cursor-pointer focus-visible:bg-transparent hover:bg-transparent`}
						onCheckedChange={() => intl.changeLanguage(lng)}
						key={index}
					>
						<img className="ml-6 size-6" src={intl.getLangIcon(lng)} alt={lng} />
						<span
							className={`ml-2 text-white ${
								i18n.resolvedLanguage === lng ? 'underline' : ''
							}`}
						>
							{intl.langs?.[lng]?.nativeName}
						</span>
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageButton
