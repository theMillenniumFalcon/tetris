import { useEffect, useState } from 'react';
import type { STAGE, STAGECELL } from '../components/Stage';
import { createStage } from '../utils/helper';
import type { PlayerTypes } from './usePlayer';

export const useStage = (player: PlayerTypes, resetPlayer: () => void) => {
  const [stage, setStage] = useState(createStage())
  const [rowsCleared, setRowsCleared] = useState(0)

  useEffect(() => {
    if (!player.pos) return

    setRowsCleared(0);

    const sweepRows = (newStage: STAGE): STAGE => {

      return newStage.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1)
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']) as STAGECELL[])
          return ack;
        }

        ack.push(row)
        return ack
      }, [] as STAGE)
    }

    const updateStage = (prevStage: STAGE): STAGE => {
      const newStage = prevStage.map(
        row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)) as STAGECELL[]
      )

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`]
          }
        })
      })

      if (player.collided) {
        resetPlayer()
        return sweepRows(newStage)
      }

      return newStage
    }

    setStage(prev => updateStage(prev))
  }, [player.collided, player.pos, player.pos.x, player.pos.y, player.tetromino, resetPlayer])

  return { stage, setStage, rowsCleared }
}