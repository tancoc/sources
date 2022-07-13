import { useState, useEffect, createContext } from 'react'
import { Global } from '@emotion/react'
import { normalize } from '../system'

export const App = createContext()

export const AppProvider = ({ children }) => {
	const [appearance, setAppearance] = useState(typeof window !== 'undefined' && window.localStorage.getItem('theme'))

	const toggle = () => (appearance === 'light' ? setAppearance('night') : setAppearance('light'))

	useEffect(() => {
		document.documentElement.dataset.theme = appearance
		window.localStorage.setItem('theme', appearance)
	}, [appearance])

	return (
		<App.Provider value={{ toggle }}>
			<Global styles={normalize} />
			{children}
		</App.Provider>
	)
}
