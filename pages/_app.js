import Head from "next/head"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { themes } from "../styles/theme"
import { useThemeSwitch } from "../hooks/useThemeSwitch"

const GlobalStyle = createGlobalStyle`
	body {
			background-color: ${(props) => props.theme.backgroundColor};
			color: ${(props) => props.theme.mainFontColor};
		}
`

export default function MyApp({ Component, pageProps }) {
	const currentTheme = useThemeSwitch(themes, "light")

	return (
		<>
			<ThemeProvider theme={currentTheme}>
				<Head>
					<title>Exemple global theme with localStorage</title>
				</Head>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
