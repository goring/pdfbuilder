import React, { useState } from 'react'
import StageName from './StageName'

export default function Stage() {
    const [stage, setStage] = useState(0)

    const currentNumberStyle = "bg-blue-500 text-gray-300"
    const currentTitleStyle = "font-bold"

    const passiveNumberStyle = "bg-white text-black opacity-10"
    const passiveTitleStyle = "font-normal opacity-25"

    return (
        <div className="pb-2 border-solid border-gray-900 border-b-2 w-full flex items-center">
            <StageName number={{ content: "1", style: currentNumberStyle }} title={{ content: "Details", style: currentTitleStyle }} />
            <StageName number={{ content: "2", style: passiveNumberStyle }} title={{ content: "Picture", style: passiveTitleStyle }} />
            <StageName number={{ content: "3", style: passiveNumberStyle }} title={{ content: "Font", style: passiveTitleStyle }} />
        </div >
    )
}
