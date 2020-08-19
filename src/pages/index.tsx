import React from "react"
import { Switch, Route } from "react-router-dom"
import Indexpage from "./indexpage"
import signupage from "./signuppage"
import readspage from "./readspage"
import createpage from "./createpage"
function index() {
  return (
    <Switch>
      <Route path="/" exact component={Indexpage} />
      <Route path="/signup" exact component={signupage} />
      {/* <Route path="/login" exact component={} />  로그인 모달*/}
      <Route
        path="/create/:size/:name/:category"
        exact
        component={createpage}
      />
      <Route path="/reads" exact component={readspage} />
      {/* <Route path="/read/:id" exact component={} />빙고 모달 */}
    </Switch>
  )
}

export default index
