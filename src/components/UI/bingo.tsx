import React from "react"
import styled from "styled-components"
import color from "../../constants/color"

interface BingoProps {
  contents: string[]
  size: number
}
function Bingo({ contents, size }: BingoProps) {
  let n = 0
  return (
    <BingoWrap size={size}>
      {contents.map((data) => (
        <BingoSpace key={n++}>{data}</BingoSpace>
      ))}
    </BingoWrap>
  )
}
const BingoWrap = styled.div<{ size: number }>`
  display: grid;
`
/* grid-template-rows: ${(size) => repeat(size, "40px")}; */
const BingoSpace = styled.div`
  border: 1px solid ${color.primary};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
`

export default Bingo
