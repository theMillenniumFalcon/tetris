import React from 'react'
import { StyledDisplay } from '../styles/Display.style'

type Props = {
  gameOver?: boolean
  text: string
}

const Display: React.FC<Props> = ({ gameOver, text }) => (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display