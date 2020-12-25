import React, {useState} from 'react'

export default function FontSelection({setFontFamily, setFontWeight, setFontSize}) {
    const [fontStyle, setFontStyle] = useState()
    const availableFonts = ["font-sans", "font-serif", "font-mono"]
    const availableWeights = [
        "font-thin",
        "font-extralight",
        "font-light",
        "font-normal",
        "font-medium",
        "font-semibold",
        "font-bold",
        "font-extrabold",
        "font-black",
    ]
    const availableSizes = [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
    ]
    
    const selectStyle = "w-3/6 h-8 rounded bg-darkTheme-400 text-white"
    const fontFamilyOnChangeHandler = (e) => {
        setFontFamily(e.target.value)
    }
    
    const fontWeightOnChangeHandler = (e) => { setFontWeight(e.target.value)
    }

    const fontSizeOnChangeHandler = (e) => {
        setFontSize(e.target.value)
    }


    return (
        <div className="h-5/6 w-full h-full">
            <div className="w-full h-5/6 items-center pt-8 flex flex-col justify-around">
                <select className={selectStyle} onChange={(e) => fontFamilyOnChangeHandler(e) }>
                    {availableFonts.map((val,idx) => 
                    (
                        <option key={idx}>{val}</option>
                    ))}
                </select>
                <select className={selectStyle} onChange={(e) => fontWeightOnChangeHandler(e) }>
                    {availableWeights.map((val,idx) => 
                    (
                        <option key={idx}>{val}</option>
                    ))}
                </select>
                <select className={selectStyle} onChange={(e) => fontSizeOnChangeHandler(e) }>
                    {availableSizes.map((val,idx) => 
                    (
                        <option key={idx}>{val}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
