# useThemeSwitch

Simple Hook to Save Prefer Theme in Local Storage

## How to configure

1 - Create a `/styles/theme.js` with scheme above:

```
const themeLight = {
	themeName: 'light',
	backgroundColor: '#dddddd',
	mainFontColor: '#333333',
}

const themeDark = {
	themeName: 'dark',
	backgroundColor: '#333333',
	mainFontColor: '#eeeeee',
}

export const themes = [
	themeLight,
	themeDark
]

```

PS: `themeName` is required.

2 - In `app.js` import and configure `useThemeSwitch`.

```
import { themes } from "../styles/theme"
import { useThemeSwitch } from "../hooks/useThemeSwitch"
...
const currentTheme = useThemeSwitch(themes, "light")
```

2.2 - With Styled-Components, import `ThemeProvider` and pass `currentTheme` as theme prop:

```
<ThemeProvider theme={currentTheme}>
  <GlobalStyle />
  <Component {...pageProps} />
</ThemeProvider>
```

## How to use

1 - In your page, inport `themeChange`:

```
import { themeChange } from "../hooks/useThemeSwitch"
```

2 - Call `themeChange` with the theme you want. Eg:

```
<button onClick={() => themeChange("dark")}>dark</button>
<button onClick={() => themeChange("light")}>light</button>
```