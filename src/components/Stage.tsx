import React from 'react'
import { Cell } from './Cell'

interface stageProps {
    stage: string
}

export const Stage: React.FC<stageProps> = ({ stage }) => {
    return (
        <Cell type='type' />
    )
}

