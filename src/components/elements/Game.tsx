/* eslint-disable */
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  Frame,
  Workspace,
  Button,
  P,
  Text,
  Span
} from "../templates/styled-templates"

import useEventListener from "../../hooks/useEventListener"
// import useLocalStorage from "../../hooks/useLocalStorage"
import { useLocalStorage } from "usehooks-ts"

import AlertsService from "../../services/alert-service"

let Game = (props: any) => {
  const [currentWord, setCurrentWord] = useState(0)
  const [currentSymbol, setCurrentSymbol] = useState(0)
  let isPoppedUp = false
  let started = false
  const wordsProto = [
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ],
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ],
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ],
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ],
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ],
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ],
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ],
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ],
    [
      { value: `h`, state: 0 },
      { value: `e`, state: 0 },
      { value: `l`, state: 0 },
      { value: `l`, state: 0 },
      { value: `o`, state: 0 }
    ]
  ]
  const type = (e: any) => {
    if (e.getModifierState(`CapsLock`) === true) {
      AlertsService.showError(`Caps Lock`)
      return
    }
    if (e.key >= "a" && e.key <= "z" && isPoppedUp === false) {
      let wordLength = words[currentWord].length
      console.log(currentSymbol)
      if (e.key === words[currentWord][currentSymbol].value) {
        if (wordLength == currentSymbol + 1) {
          let newWords = [...wordsProto]
          newWords[currentWord][currentSymbol].state = 1
          setWords(newWords)
          setCurrentWord((prevValue) => prevValue + 1)
          setCurrentSymbol(0)
          console.log(currentSymbol)
          return
        }
        let newWords = [...wordsProto]
        newWords[currentWord][currentSymbol].state = 1
        setWords(newWords)
        setCurrentSymbol((prevValue) => prevValue + 1)
        return
      }
      if (e.key !== words[currentWord][currentSymbol].value) {
        let newWords = [...wordsProto]
        newWords[currentWord][currentSymbol].state = 2
        setWords(newWords)
      }
    }
  }

  useEventListener(`keydown`, type)

  const [words, setWords] = useState(wordsProto)

  return (
    <GameWrapper>
      <Words>
        {words.map((i, id) => {
          return (
            <Word key={id}>
              {i.map((subItem, subId) => {
                return (
                  <Letter status={subItem.state} key={subId}>
                    {subItem.value}
                  </Letter>
                )
              })}
              &nbsp;
            </Word>
          )
        })}
      </Words>
    </GameWrapper>
  )
}

const GameWrapper = styled(Frame)`
  width: 100%;
`

const Words = styled(Frame)`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  transition: all 0.25s ease 0s;
`

const Word = styled(Span)`
  transition: all 0.25s ease 0s;
  user-select: none;
`

const Letter = styled(Span)`
  color: ${(props) => {
    if (props.status == 0) {
      return `grey`
    }
    if (props.status == 1) {
      return `green`
    }
    if (props.status == 2) {
      return `red`
    }
  }};
`

export default Game

/* eslint-enable */
