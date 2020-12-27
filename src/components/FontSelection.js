import React, {useState} from 'react'

export default function FontSelection({setFontFamily, setFontWeight, setFontSize}) {
    const [fontStyle, setFontStyle] = useState()

    const availableFonts=['Poppins', 'PlayfairDisplay', 'RobotoMono']

    const availableWeights = {
        normal:"font-normal",
        bold:"font-bold"
    }

    const availableSizes = {
       normal:"text-base",
       large:"text-lg",
       huge:"text-xl"
    }

    const toFontFamilyClass = (string) => {
        return "font-"+string.charAt(0).toLowerCase() + string.slice(1);
      }

    
      const fontFamilyOnChangeHandler = (e) => {
          setFontFamily(toFontFamilyClass(e.target.value))
        }
        
        const fontWeightOnChangeHandler = (e) => {
            const key = Object.keys(availableWeights)[Number(e.target.value)]
            setFontWeight(availableWeights[key])
        }
        
        const fontSizeOnChangeHandler = (e) => {
            const key = Object.keys(availableSizes)[Number(e.target.value)]
            setFontSize(availableSizes[key])
        }

    // border-solid border-b-2 border-customGrey-900 text-white w-full min-w-full p-2 text-xl rounded bg-darkTheme-400
    const selectStyle = "p-1 w-20 h-12 rounded bg-darkTheme-400 w-full text-white text-xl border-customGrey-900 border-b-2"
    const selectTitleStyle = "text-sm font-bold pb-2 text-white-400"
    const selectContainerStyle = "m-2 w-full h-24 flex flex-col items-start "
  
    return (
            <div className="w-full h-full pt-16 pb-16 items-center flex flex-col justify-around">
                <div className={selectContainerStyle}>
                    <label className={selectTitleStyle}>Family</label>
                    <select className={selectStyle} onChange={(e) => fontFamilyOnChangeHandler(e) }>
                        {availableFonts.map((val,idx) => 
                        (
                            <option value={val} key={idx}>{val}</option>
                        ))}
                    </select>
                </div>

                <div className={selectContainerStyle}>
                    <label className={selectTitleStyle}>Weight</label>
                    <select defaultValue={0} className={selectStyle} onChange={(e) => fontWeightOnChangeHandler(e) }>
                        {Object.keys(availableWeights).map((val,idx) => 
                        (
                            <option value={idx} key={idx}>{val}</option>
                        ))}
                    </select>
                </div>

                <div className={selectContainerStyle}>
                    <label className={selectTitleStyle}>Size</label>
                    <select defaultValue={0} className={selectStyle} onChange={(e) => fontSizeOnChangeHandler(e) }>
                        {Object.keys(availableSizes).map((val,idx) => 
                        (
                            <option value={idx} key={idx}>{val}</option>
                        ))}
                    </select>
                </div>

            </div>
    )
}
