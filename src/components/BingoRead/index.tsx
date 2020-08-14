import React, { useState } from "react"
import styled, { css } from "styled-components"
import UISwitch from "../UI/Switch"
import Bingolist from "./bingolist"

function Index() {
  const [sortmode, setSortMode] = useState(true)
  return (
    <Wrap>
      <div>
        정렬설정
        <UISwitch
          falseText={
            <span role="img" aria-label="Light">
              ▦{/* (grid) */}
            </span>
          }
          trueText={
            <span role="img" aria-label="Dark">
              ▥{/* (flex) */}
            </span>
          }
          state={sortmode}
          onChange={setSortMode}
        />
        <Bingolist />
      </div>
    </Wrap>
  )
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default Index
