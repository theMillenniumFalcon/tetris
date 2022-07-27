import React from 'react'

interface displayProps {
    gameOver: string
    text: string
}

export const Display: React.FC<displayProps> = ({ gameOver, text }) => {
    return (
        <div>{text}</div>
    )
}

