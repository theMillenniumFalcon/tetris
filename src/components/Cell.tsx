import React from 'react'

interface cellProps {
    type: string
}

export const Cell: React.FC<cellProps> = ({ type }) => {
    return (
        <div>Cell</div>
    )
}

