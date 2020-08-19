import React, { useState } from "react"
import styled, { css } from "styled-components"
import UISwitch from "../UI/Switch"
import { RootState } from "../../store/reducers"
import { useSelector } from "react-redux"
import Bingo from "../UI/bingo"
import { conItems } from "../../store/slices/bingo"
import { Console } from "console"

interface bingolistProps {
  flex?: boolean
}
interface bingospace {
  name: string
  contents: conItems[]
  size: number
}
function BingoSpace({ name, contents, size }: bingospace) {
  // console.log(contents)

  return (
    <BingoWrap>
      {name}
      <div style={{ maxWidth: "30px", maxHeight: "30px" }}>
        <Bingo content={contents} size={size} />
      </div>
    </BingoWrap>
  )
}
function Bingolist({ flex }: bingolistProps) {
  const [Bingos, setBingos] = useState(
    useSelector((state: RootState) => state.bingo),
  )
  console.log(Bingos)
  return (
    <Wrap>
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
  /*align-items: center; */
`

const Wrap = styled.div<bingolistProps>`
  display: grid;
  grid-template-rows: repeat(5, 150px);
  grid-template-columns: repeat(5, 150px);
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`
export default Bingolist
