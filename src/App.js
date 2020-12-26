import React, { useState, useEffect } from 'react';
import Panel from './components/Panel'
import PDFMaker from './components/PDFMaker';
import PreviewWindow from './components/PreviewWindow'

function App() {
    const [details, setDetails] = useState()
    const [saving, isSaving] = useState(false)
    

    return (
        <div className="h-screen w-screen bg-darkTheme">
            <div className="flex flex-row justify-center w-screen h-screen">
                <div className="flex flex-row justify-center w-3/4 h-screen">
                    <PreviewWindow details={details}/>

                    <div className="flex flex-col justify-between md:py-16 sm:py-0 h-screen content-center items-center w-5/12 ">

                        <Panel saveToPDF = {(save) => isSaving(save) } preview={(details) => setDetails(details)} />

                        <PDFMaker saving={saving} details={details} isSaving={(save) => isSaving(save)}/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
