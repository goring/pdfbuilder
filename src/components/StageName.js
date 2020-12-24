import React from 'react'

export default function StageName({ selected, number, title }) {
    const selectedNumber = "bg-blue-500 text-gray-300"
    const selectedTitle = "font-bold"

    const passiveNumber = "bg-white text-black opacity-10"
    const passiveTitle = "font-normal opacity-25"
    return (
        <div className="mt-1">
            <span className={`${selected ? selectedNumber : passiveNumber} select-none text-2xl font-semibold pl-4 pr-4 pt-1 pb-1 mr-2 rounded-lg`}>{number}</span>
            <span className={`${selected ? selectedTitle : passiveTitle} select-none pr-2 text-2xl text-white font-semibold mr-2`}> {title} </span>
        </div>
    )
}
