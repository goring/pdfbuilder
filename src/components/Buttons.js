import React from 'react'

export default function Buttons({ save, switchStage, final }) {

    return (
            <div className="flex flex-row justify-around border-gray-900 border-t-2 border-solid pt-2">
                <button onClick={() => switchStage(false)} className="bg-darkTheme-600 w-1/2 rounded-lg p-3  mr-2">
                    <span className="text-customGrey-100 text-lg font-semibold">Back</span>
                </button>
                {final ?
                    <button type="submit" onClick={() => save()} className="bg-gradient-to-r from-green-800 to-emerald-600 w-3/4 rounded-lg p-4 ml-2">
                        <span className="text-white text-lg font-semibold">Save</span>
                    </button>
                    :
                    <button type="submit" onClick={(e) => switchStage(true)} className="bg-gradient-to-r from-customBlue to-customCyan w-3/4 rounded-lg p-4 ml-2">
                        <span className="text-white text-lg font-semibold">Next</span>
                    </button>
                }
        </div>
    )
}
