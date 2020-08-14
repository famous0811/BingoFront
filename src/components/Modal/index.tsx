import React from "react"
import BingoReadModal from "./BingoReadModal"
import LoginModal from "./loginModal"
import CreateModal from "./CreateModal"
function Index() {
  return (
    <>
      <CreateModal />
      <LoginModal />
      <BingoReadModal />
    </>
  )
}

export default Index
