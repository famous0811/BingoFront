import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import Heading from "../components/UI/Heading"
import viewport from "../constants/viewport"
import Input, { WrapInput } from "../components/UI/Input"
import { useHistory } from "react-router-dom"
import Button from "../components/UI/Button"
function Signuppage() {
  const history = useHistory()
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  })
  const password = watch("password")

  function onSubmit() {
    history.replace("/")
  }
  return (
    <Layout center>
      <div style={{ maxWidth: 640, width: "100%", marginTop: "3em" }}>
        <Heading>회원가입</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <WrapInput fieldName="아이디" error={errors.username}>
            <Input
              type="text"
              autoComplete="username"
              name="username"
              ref={register({
                required: "아이디를 입력해주세요.",
                minLength: {
                  value: 6,
                  message: "아이디는 6자 이상이어야 합니다.",
                },
                validate: async (username) =>
                  // !(await User.checkExists(username)) ||
                  "이미 있는 유저입니다.",
              })}
            />
          </WrapInput>
          <Passwords>
            <WrapInput fieldName="비밀번호" error={errors.password}>
              <Input
                type="password"
                autoComplete="new-password"
                name="password"
                ref={register({
                  required: "비밀번호를 입력해주세요.",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 8자 이상이어야 합니다.",
                  },
                })}
              />
            </WrapInput>
            <WrapInput fieldName="비밀번호 확인" error={errors.passwordAccept}>
              <Input
                type="password"
                autoComplete="new-password"
                name="passwordAccept"
                ref={register({
                  validate: (value) =>
                    password === value || "비밀번호를 다시 확인해주세요.",
                })}
              />
            </WrapInput>
          </Passwords>
          <WrapInput fieldName="이메일" error={errors.email}>
            <Input
              type="email"
              autoComplete="email"
              name="email"
              ref={register({
                validate: (value) =>
                  (!value.search("@") && !value.search(".com")) ||
                  "이메일을 재대로 입력해주세요.",
              })}
            />
          </WrapInput>
          <WrapInput fieldName="닉네임" error={errors.nickname}>
            <Input
              type="text"
              autoComplete="nickname"
              name="nickname"
              ref={register({ required: "닉네임을 입력해주세요." })}
            />
          </WrapInput>
          <Button full>회원가입</Button>
          <p>회원가입 후, 인증 이메일을 확인해주세요.</p>
        </form>
      </div>
    </Layout>
  )
}
const Passwords = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
  > *:first-child {
    margin-right: 1em;
  }

  @media screen and (max-width: ${viewport.mobile}) {
    display: block;
    > *:first-child {
      margin-right: 0;
    }
  }
`
// const Title = styled.div`
//   color: ${color.primary};
//   font-size: 20;
//   justify-content: center;
// `

export default Signuppage
