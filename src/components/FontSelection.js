import React from 'react'

export default function FontSelection({setFont}) {
    const availableFonts = ["sans-serif", "arial"]
    
    const onChangeHandler = (e) => {
        setFont(e.target.value)
    }

    return (
        <div className="h-5/6 w-full">
            <select onChange={(e) => onChangeHandler(e) }>
                {availableFonts.map((val,idx) => 
                (
                    <option key={idx}>{val}</option>
                ))}
            </select>

        </div>
    )
}
