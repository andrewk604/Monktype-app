/* eslint-disable */

import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Frame, Workspace, Button } from "../templates/styled-templates"
import Header from "../templates/header"

import useEventListener, { eventDispatch } from "../../hooks/useEventListener"

import Game from "../elements/Game"

let UserApp = (props: any) => {
  return (
    <Wrapper>
      <Header />
      <Workspace>
        <Game />
      </Workspace>
    </Wrapper>
  )
}

const Wrapper = styled(Frame)`
  /* height: 100vh; */
  padding: 0;
  margin: 0;
  width: 75vw;
`
const Title = styled(Frame)``
const AppInfo = styled(Frame)`
  width: 100vw;
  height: 180px;
  justify-content: space-evenly;
`

export default UserApp

/* eslint-enable */
