import { useLayoutEffect, useState } from "react"

let hookConfig = {}

const getTheme = (arrayThemes, themeName) => {
	let themeIndex = arrayThemes.findIndex(
		(theme) => theme.themeName === themeName
	)
	return arrayThemes[themeIndex]
}

export const useThemeSwitch = (arrayThemes, initialTheme) => {
	const [currentTheme, setCurrentTheme] = useState(
		getTheme(arrayThemes, initialTheme)
	)

	useLayoutEffect(() => {
		let getLocalTheme = localStorage.getItem("current_theme")

		if (getLocalTheme) {
			//caso encontre
			setCurrentTheme(JSON.parse(getLocalTheme))
		} else {
			// caso não encontre
			const theme = getTheme(arrayThemes, initialTheme)
			localStorage.setItem("current_theme", JSON.stringify(theme))
			setCurrentTheme(theme)
		}
	}, [])
	hookConfig = { arrayThemes, setCurrentTheme }

	return currentTheme
}

export const themeChange = (newTheme) => {
	const { arrayThemes, setCurrentTheme } = hookConfig
	const theme = getTheme(arrayThemes, newTheme)
	localStorage.setItem("current_theme", JSON.stringify(theme))
	setCurrentTheme(theme)
}
