import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { useForm } from "react-hook-form"
import { RouteComponentProps } from "react-router-dom"
import useBingo from "../hooks/useBingo"
import Heading from "../components/UI/Heading"
import BingoUI from "../components/UI/bingo"
import BUtton from "../components/UI/Button"
import { useHistory } from "react-router-dom"
import { conItems } from "../store/slices/bingo"

interface routerProps {
  size: string
  name: string
  category: string
}
function Createpage({ match: { params } }: RouteComponentProps<routerProps>) {
  const usebingo = useBingo()
  const { register, handleSubmit } = useForm()
  const { size, name, category } = params
  const history = useHistory()

  const items: Array<conItems> = []
  let id = 0
  for (let i = 0; i < parseInt(size); i++) {
    for (let j = 0; j < parseInt(size); j++) {
      items.push({ id: id++, content: "" })
    }
  }

  const [contents, setcontents] = useState(items)

  function onSubmit() {
    usebingo.createBingo({
      name,
      category,
      size: parseInt(size),
      contents,
    })
    history.replace("/reads")
  }

  function Setcontents(value: string, n: number) {
    setcontents(
      contents.map((data) =>
        data.content == contents[n].content && data.id == n
          ? { id: data.id, content: value }
          : data,
      ),
    )
  }
  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Heading>{name}</Heading>
          <Heading tag="h3" tagStyle="h4">
            주제:{category}
          </Heading>
        </div>
        <BingoUI
          size={parseInt(size)}
          content={contents}
          setcontents={Setcontents}
        />
        <BUtton style={{ marginTop: "30px" }}>완성</BUtton>
      </Form>
    </Layout>
  )
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export default Createpage
