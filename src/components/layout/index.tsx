import React from "react"
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components"
import { Helmet } from "react-helmet"
import useTheme from "../../hooks/useTheme"

import Header from "./Header"
import viewport from "../../constants/viewport"
interface WrapProps {
  center?: boolean
}

interface LayoutProps extends WrapProps {
  children?: React.ReactNode
  title?: string
}
function Index({ children, title, ...LayoutProps }: LayoutProps) {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          rel="stylesheet"
          href="'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap')"
        />
        {title && <title>{title}</title>}
      </Helmet>
      <Wrap {...LayoutProps}>
        <GlobalStyle />
        <Header />
        <article>{children}</article>
      </Wrap>
    </ThemeProvider>
  )
}
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    transition: background 0.5s, color 0.5s;
    overflow: hidden;
}
* {
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Noto Sans KR', sans-serif;
}
form {
      -webkit-appearance: none;
    }
a{
    color: #0073ff;
    text-decoration: none;
}
hr {
      border: 0;
      border-bottom: 1px solid gray;
    }
${(props) =>
  props.theme.isDark &&
  css`
    body {
      background: #242526;
      color: white;
    }
  `}
`
const Wrap = styled.div<WrapProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  & > article {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 1em;

    ${({ center }) =>
      center &&
      css`
        align-items: center;
      `}
    @media screen and (min-width: ${viewport.desktop}) {
      padding: 1em 8vw;
    }
  }
`
export default Index
