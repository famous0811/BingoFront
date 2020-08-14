import React, { useState } from "react"
import styled, { css } from "styled-components"
import UISwitch from "../UI/Switch"
import { RootState } from "../../store/reducers"
import { useSelector } from "react-redux"
import Bingo from "../UI/bingo"

interface bingolistProps {
  flex?: boolean
}
interface bingospace {
  name: string
  contents: string[]
  size: number
}
function BingoSpace({ name, contents, size }: bingospace) {
  return (
    <BingoWrap>
      <div style={{ maxWidth: "30px", maxHeight: "30px" }}>
        <Bingo contents={contents} size={size} />
      </div>
      {name}
    </BingoWrap>
  )
}
function Bingolist({ flex }: bingolistProps) {
  const [Bingos, setBingos] = useState(
    useSelector((state: RootState) => state.bingo),
  )

  return (
    <Wrap flex>
      {Bingos.map((data) => (
        <BingoSpace
          key={data.id}
          size={data.size}
          name={data.name}
          contents={data.contents}
        />
      ))}
    </Wrap>
  )
}
const BingoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrap = styled.div<bingolistProps>`
  display: grid;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`
export default Bingolist
