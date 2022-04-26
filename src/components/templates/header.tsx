/* eslint-disable */
// @ts-nocheck
import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {
  Frame,
  Workspace,
  StyledLink
} from "../../components/templates/styled-templates"

import { getStorage, putStorage } from "../../hooks/useStorage"
import useEventListener, { eventDispatch } from "../../hooks/useEventListener"

let Header = (props: any) => {
  let path = useLocation().pathname.split("/").slice(1)[0]

  const LinkProperties = {
    textDecoration: `none`,
    color: `black`
  }

  return (
    <Wrapper>
      <HeaderItems row>
        <Logo>Monktype</Logo>
        <Gamemodes>
          <Gamemode>5</Gamemode>
          <Gamemode>5</Gamemode>
          <Gamemode>5</Gamemode>
          <Gamemode>5</Gamemode>
        </Gamemodes>
      </HeaderItems>
    </Wrapper>
  )
}

const Wrapper = styled(Frame)`
  width: 100%;
  height: 72px;
  background: #fefaf1;
`

const Logo = styled(Frame)`
  align-items: center;
  height: 100%;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  letter-spacing: -0.02em;
  color: #d0ad52;
  :hover {
    cursor: pointer;
  }
`

const Tabs = styled(Frame)`
  height: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`

const HeaderItems = styled(Frame)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

const Gamemode = styled(Frame)`
  width: 80px;
  :hover {
    cursor: pointer;
  }
`

const Gamemodes = styled(Frame)`
  flex-direction: row;
`

const QuestionMark = styled(Frame)`
  height: 24px;
  width: 24px;
  cursor: pointer;
  background: url(${require(`../../assets/icons/question-mark.svg`).default});
`

const Settings = styled(Frame)`
  height: 24px;
  width: 24px;
  cursor: pointer;
  background: url(${require(`../../assets/icons/settings.svg`).default});
`

export default Header

/* eslint-enable */
