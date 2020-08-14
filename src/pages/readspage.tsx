import React from "react"
import Layout from "../components/layout"
import { useSelector } from "react-redux"
import { RootState } from "../store/reducers"
import Bingolist from ".././components/BingoRead/bingolist"
function Readspage() {
  const bingos = useSelector((state: RootState) => state.bingo)
  return (
    <Layout>
      {bingos.map((data) => (
        <Bingolist key={data.id} flex />
      ))}
    </Layout>
  )
}

export default Readspage
