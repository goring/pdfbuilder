import React, {useState} from 'react'

export default function FontSelection({setFontFamily, setFontWeight, setFontSize}) {
    const [fontStyle, setFontStyle] = useState()

    const availableFonts={
        sans:"font-sans",
        serif:"font-serif",
        mono:"font-mono"
    }

    const availableWeights = {
        normal:"font-normal",
        bold:"font-bold"
    }

    const availableSizes = {
       tiny:"text-xs",
       small:"text-sm",
       normal:"text-base",
       large:"text-lg",
       huge:"text-xl"
    }

    
    const selectStyle = "w-3/6 h-8 rounded bg-darkTheme-400 text-white"
    const fontFamilyOnChangeHandler = (e) => {
        const key = Object.keys(availableFonts)[Number(e.target.value)]
        setFontFamily({[key]:availableFonts[key]})
    }
    
    const fontWeightOnChangeHandler = (e) => {
        const key = Object.keys(availableWeights)[Number(e.target.value)]
        console.log(key, availableWeights[key])
        setFontWeight({[key]:availableWeights[key]})
    }

    const fontSizeOnChangeHandler = (e) => {
        console.log(e.target.value)
        const key = Object.keys(availableSizes)[Number(e.target.value)]
        setFontSize({[key]:availableSizes[key]})
    }
    const selectTitleStyle = "font-lg text-white-400"
    const selectContainerStyle = "w-3/4 h-24 flex flex-row justify-between items-center"

    return (
        <div className="h-5/6 w-full h-full">
            <div className="w-full h-5/6 items-center pt-8 flex flex-col justify-around">

                <div className={selectContainerStyle}>
                    <h1 className={selectTitleStyle}>Family</h1>
                    <select className={selectStyle} onChange={(e) => fontFamilyOnChangeHandler(e) }>
                        {Object.keys(availableFonts).map((val,idx) => 
                        (
                            <option value={idx} key={idx}>{val}</option>
                        ))}
                    </select>
                </div>

                <div className={selectContainerStyle}>
                    <h1 className={selectTitleStyle}>Weight</h1>
                    <select defaultValue={3} className={selectStyle} onChange={(e) => fontWeightOnChangeHandler(e) }>
                        {Object.keys(availableWeights).map((val,idx) => 
                        (
                            <option value={idx} key={idx}>{val}</option>
                        ))}
                    </select>
                </div>

                <div className={selectContainerStyle}>
                    <h1 className={selectTitleStyle}>Size</h1>
                    <select defaultValue={2} className={selectStyle} onChange={(e) => fontSizeOnChangeHandler(e) }>
                        {Object.keys(availableSizes).map((val,idx) => 
                        (
                            <option value={idx} key={idx}>{val}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    )
}
