export const DataScript = () => {
	const appearance = `
		const appearance = () => {
			if (window.localStorage.getItem('theme')) return window.localStorage.getItem('theme')

			return window.localStorage.setItem('theme', 'light')
		}

		document.documentElement.dataset.theme = appearance()
	`

	return <script dangerouslySetInnerHTML={{ __html: appearance }} />
}
