import React from "react"
import styled from "styled-components"
import viewport from "../../constants/viewport"
import useDarkMode from "../../hooks/useDarkmode"
import UISwitch from "../UI/Switch"
import useModal from "../../hooks/useModal"

function Header() {
  const { isDark, setDarkmode } = useDarkMode()
  const { open } = useModal("login")
  const loginButton = (
    <LoginButton role="button" onClick={() => open()}>
      로그인
    </LoginButton>
  )

  return (
    <Wrap>
      <div>
        <UISwitch
          falseText={
            <span role="img" aria-label="Light">
              ☀️
            </span>
          }
          trueText={
            <span role="img" aria-label="Dark">
              🌒
            </span>
          }
          state={isDark}
          onChange={setDarkmode}
        />
      </div>
      {/* <Title>Bingo</Title> */}
      <div className="right">{loginButton}</div>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 1em;

  @media screen and (min-width: ${viewport.desktop}) {
    padding-left: 10vw;
    padding-right: 10vw;
    height: 80px;
  }
`
// const Title = styled.div`
//   font-size: 2.3em;

// `
const LoginButton = styled.div`
  cursor: pointer;
  padding: 0.5em 1em;
`
export default Header
