import React from 'react'

export default function StageName({ number, title }) {
    return (
        <>
            <span className={`${number.style} text-2xl font-semibold pl-4 pr-4 pt-1 pb-1 mr-2 rounded-lg`}>{number.content}</span>
            <span className={`${title.style} pr-2 text-2xl text-white font-semibold mr-2`}> {title.content} </span>
        </>
    )
}
