import React from 'react'
import { Stage } from './Stage'
import { Display } from './Display'
import { StartButton } from './StartButton'

interface tetrisProps {
    type: string
}

export const Tetris: React.FC<tetrisProps> = ({ type }) => {
    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

