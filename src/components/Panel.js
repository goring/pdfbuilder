import React, { useState, useEffect } from 'react';
import Stage from './Stage'
import Details from './Details'
import Buttons from './Buttons';
import ImageDropper from './ImageDropper';
import FontSelection from './FontSelection';


function Panel({ preview, saveToPDF }) {
    const stages = 2
    const [currentStage, setCurrentStage] = useState(0)
    const [dispatching, isDispatching] = useState(false)
    const [details, setDetails] = useState({
        documentTitle: "Title",
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postalCode: "",
        country: "",
        telephone: "",
        fontFamily: 'font-poppins',
        fontSize: 'text-base',
        fontWeight: 'text-base',
        image: ""
    });




    const stageMap = {
        0: () => (<Details />),
        1: () => (<ImageDropper
            setImage={(image) => setDetails(prevState => ({ ...prevState, image }))} />),
        2: () => (<FontSelection
            setFontFamily={(fontFamily) => setDetails(prevState => ({ ...prevState, fontFamily }))}
            setFontWeight={(fontWeight) => setDetails(prevState => ({ ...prevState, fontWeight }))}
            setFontSize={(fontSize) => setDetails(prevState => ({ ...prevState, fontSize }))}
        />)
    }



    useEffect(() => {
        preview(details)
    })

    const onSubmitHandler = (e) => {
        e.preventDefault()
    }

    const saveHandler = (e) => {
        console.log("called")
        saveToPDF(true)
    }

  

    const onChangeHandler = (e) => {
        setDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="flex h-full w-full ">
            <form
                className="flex flex-col w-full justify-between h-full"
                onSubmit={(e) => onSubmitHandler(e)}
                onChange={(e) => onChangeHandler(e)}>
                <Stage currentStage={currentStage} />
                <div className="overflow-y-auto sm:h-screen sm:pt-auto">
                    {stageMap[currentStage]()}
                </div>
                <div>
                    <Buttons
                        save={(e) => saveHandler(e)}
                        switchStage={(x) => { console.log(currentStage); x ? setCurrentStage(currentStage + 1 % stages) : setCurrentStage((currentStage - 1 >= 0) ? (currentStage - 1) : currentStage) }}
                        final={currentStage === stages ? true : false} />
                </div>
            </form>
        </div>

    );
}

export default Panel;
