import React from "react"
import Modal from "../UI/Modal"
import Button from "../UI/Button"
import { Link, useHistory } from "react-router-dom"
import Input, { WrapInput } from "../UI/Input"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { RootState } from "../../store/reducers"
function LoginModal() {
  const { register, handleSubmit } = useForm()
  //   const { error, pending, isLogin } = useSelector(
  //     (state: RootState) => state.auth,
  //   )
  const history = useHistory()
  return (
    <Modal modalName="login">
      <h1>로그인</h1>
      <form>
        <WrapInput fieldName="아이디">
          <Input
            type="text"
            name="username"
            autoComplete="username"
            ref={register({ required: true })}
          />
        </WrapInput>
        <WrapInput fieldName="비밀번호">
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
            ref={register({ required: true })}
          />
        </WrapInput>
        <Button full onClick={() => history.replace("/reads")}>
          {true ? "로그인" : "처리 중"}
        </Button>
        <hr />
        <Link to="/signup">회원가입</Link>
      </form>
    </Modal>
  )
}

export default LoginModal
