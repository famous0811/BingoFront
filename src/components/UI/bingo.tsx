import React from "react"
import styled, { css } from "styled-components"
import color from "../../constants/color"
import viewport from "../../constants/viewport"
import { conItems } from "../../store/slices/bingo"

interface BingoProps {
  content: conItems[]
  size: number
  setcontents?: (value: string, n: number) => void
}
function Bingo({ content, size, setcontents }: BingoProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <BingoWrap size={size} list={setcontents != undefined ? false : true}>
        {content.map((data) =>
          setcontents ? (
            <BingoSpace
              key={data.id}
              value={data.content}
              onChange={(e) => setcontents(e.target.value, data.id)}
            />
          ) : (
            <BingoSpaceDiv key={data.id}>{data.content}</BingoSpaceDiv>
          ),
        )}
      </BingoWrap>
    </div>
  )
}
const BingoWrap = styled.div<{ size: number; list?: boolean }>`
  display: grid;
  grid-template-rows: repeat(${({ size }) => size}, 100px);
  grid-template-columns: repeat(${({ size }) => size}, 100px);
  ${({ list, size }) =>
    list &&
    css`
      grid-template-rows: repeat(${size}, 50px);
      grid-template-columns: repeat(${size}, 50px);
    `}
`
const BingoSpaceDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${color.primary};
  ${({ theme }) =>
    theme.isDark &&
    css`
      background: ${color.primaryBlack1};
      color: white;
      ::placeholder {
        color: #b5b5b5;
      }
    `}
  display:flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: 0;
  }
  font-size: 1.2em;
`
const BingoSpace = styled.input`
  width: 100px;
  height: 100px;
  border: 2px solid ${color.primary};
  /* @media (min-width: ${viewport.mobile}) {
    width: 80px;
    height: 80px;
  } */
  ${({ theme }) =>
    theme.isDark &&
    css`
      background: ${color.primaryBlack1};
      color: white;
      ::placeholder {
        color: #b5b5b5;
      }
    `}
  text-align: center;
  &:focus {
    outline: 0;
  }
  font-size: 1.2em;
`

export default Bingo
