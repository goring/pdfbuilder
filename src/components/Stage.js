import React, { useState } from 'react'
import StageName from './StageName'

export default function Stage({ currentStage }) {



    const isSelected = (pos) => {
        return Number(pos) === Number(currentStage)
    }
    return (
        <div className="flex justify-between pb-2 border-solid border-gray-900 border-b-2 w-full">
            <StageName selected={isSelected(0)} number="1" title="Details" />
            <StageName selected={isSelected(1)} number="2" title="Picture" />
            <StageName selected={isSelected(2)} number="3" title="Font" />
        </div >
    )
}
