import { type TemplateProps } from 'rasengan'

export default function Template({ Head, Body, Script }: TemplateProps) {
	return (
		<html lang="en">
			<Head>
				<meta charSet="UTF-8" />

				{/* <!-- Standard Favicon --> */}
				<link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
				<link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon2.svg" />
				{/* <link rel="icon" type="image/x-icon" href="/makiti_group.ico" /> */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<Body>
				<Script />
			</Body>
		</html>
	)
}
