import { useCallback, useState } from 'react';
import { STAGE_WIDTH } from '../utils/setup';
import { randomTetromino } from '../utils/helper';

export type PlayerTypes = {
    pos: {
        x: number
        y: number
    };
    tetromino: (string | number)[][]
    collided: boolean
}

export const usePlayer = () => {
    const [player, setPlayer] = useState({} as PlayerTypes)

    const updatePlayerPos = ({ x, y, collided }: { x: number; y: number; collided: boolean }): void => {
        setPlayer((prev) => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collided
        }))
    }

    const resetPlayer = useCallback((): void =>
            setPlayer({
                pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
                tetromino: randomTetromino().shape,
                collided: false
            }),
        []
    )

    return { player, updatePlayerPos, resetPlayer }
}
