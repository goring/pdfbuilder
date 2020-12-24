import React, { useState, useEffect } from 'react';
import Panel from './components/Panel'
import PreviewWindow from './components/PreviewWindow'

function App() {
    const [details, setDetails] = useState()

    return (
        <div className="h-screen w-screen bg-darkTheme">
            <div className="flex flex-row justify-center w-screen">
                <div className="flex flex-row justify-center w-3/4">
                    <PreviewWindow details={details} />

                    <div className="flex flex-col justify-between py-16 h-screen content-center items-center w-5/12 ">

                        <Panel setDetails={(props) => setDetails(props)} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
