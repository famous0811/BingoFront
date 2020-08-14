import React from "react"
import styled from "styled-components"
import viewport from "../../constants/viewport"
import { Link } from "react-router-dom"
function splash() {
  return (
    <Wrap>
      <div>자신만에 빙고를 만들어 보세요!</div>
      <div>자신의 빙고를 다른 사람과 공유하세요!</div>
      <div>자신의 빙고로 다른사람과 경쟁해요!</div>
      <Link to={"/signup"}>시작하기!</Link>
    </Wrap>
  )
}
const Wrap = styled.div`
  @media screen and (min-width: ${viewport.desktop}) {
    padding-left: 10vw;
    padding-right: 10vw;
    height: 80px;
  }
  height: 100%;
`
export default splash
