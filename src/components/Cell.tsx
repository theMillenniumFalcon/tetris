import React from 'react'
import { StyledCell } from '../styles/Cell.style'
import { TETROMINOS } from '../utils/setup'

type Props = {
  type: keyof typeof TETROMINOS
}

const Cell: React.FC<Props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default React.memo(Cell)