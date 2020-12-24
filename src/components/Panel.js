import React, { useState, useEffect } from 'react';
import Stage from './Stage'
import Details from './Details'
import Buttons from './Buttons';
import ImageDropper from './ImageDropper';
import FontSelection from './FontSelection';


function Panel() {
    const stages = 2
    const [currentStage, setCurrentStage] = useState(0)
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postalCode: "",
        country: "",
        telephone: ""

    });

    const stageMap = { 0: () => (<Details />), 1: () => (<ImageDropper />), 2: () => (<FontSelection />) }

    const stageHandler = () => {

    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("submitted!")
    }

    const saveHandler = (e) => {
        console.log(details)
    }

    const onChangeHandler = (e) => {
        setDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(details)
    }
    return (
        <div className="flex h-full w-full">
            <form
                className="flex flex-col w-full justify-between"
                onSubmit={(e) => onSubmitHandler(e)}
                onChange={(e) => onChangeHandler(e)}>
                <Stage currentStage={currentStage} />
                {stageMap[currentStage]()}
                <Buttons
                    save={(e) => saveHandler(e)}
                    switchStage={(x) => { console.log(currentStage); x ? setCurrentStage(currentStage + 1 % stages) : setCurrentStage((currentStage - 1 >= 0) ? (currentStage - 1) : currentStage) }}
                    final={currentStage === stages ? true : false} />
            </form>
        </div>

    );
}

export default Panel;
