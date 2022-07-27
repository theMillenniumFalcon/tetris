import React from 'react'

interface startButtonProps {
    callback: string
}

export const StartButton: React.FC<startButtonProps> = ({ callback }) => {
    return (
        <div>Start</div>
    )
}

