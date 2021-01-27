import { createGlobalStyle, ThemeProvider } from 'styled-components'

const createGlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: red;
    }
` 

const theme = {
    colors: {
        primary: '#fafafa',
    },
}

export default function App({Component, pageProps}) {
    return (
        <>
        <GlobalStyle />
        <ThemeProvider theme = {theme}>
            <Component {...pageProps} />   
        </ThemeProvider>
        </>
    )
}