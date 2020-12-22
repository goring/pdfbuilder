import React, { useState, useEffect } from 'react';
import Stage from './Stage'


function DetailsForm() {

    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        county: "",
        postalCode: "",
        country: "",
        telephone: ""

    });

    // Reuses the same props for each input field
    const propBuilder = ({ placeholder, id, type }) => {
        const onBlurProp = (e) => { e.target.placeholder = placeholder }
        const onFocusProp = (e) => { e.target.placeholder = '' }
        return ({
            className: "border-solid border-b-2 border-customGrey-900 text-white  p-3 text-xl rounded bg-darkTheme-500",
            onBlur: onBlurProp,
            onFocus: onFocusProp,
            placeholder,
            id,
            name: id,
            type,

        })
    }
    // Input consistent style without duplicating html
    const inputBuilder = (title, props = "p-0") => {
        return (
            <div className={`flex flex-col mt-2 pr-2 `}>
                <label className="text-xs text-gray-200 font-bold pb-2">{title}</label>
                <input
                    {...propBuilder(props)}
                />
            </div>
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
    }

    const onChangeHandler = (e) => {
        setDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(details)
    }
    return (


        <div className="flex h-full">
            <form
                className="flex flex-col justify-around"
                onSubmit={(e) => onSubmitHandler(e)}
                onChange={(e) => onChangeHandler(e)}
            >
                <Stage />
                <div className="flex flex-col justify-around h-5/6">
                    <div className="flex flex-row justify-between">
                        {inputBuilder('First Name', { placeholder: 'john', id: 'firstName', type: 'text' })}
                        {inputBuilder('Last Name', { placeholder: 'doe', id: 'lastName', type: 'text' })}
                    </div>
                    {inputBuilder('Address Line 1', { placeholder: '12 Road', id: 'addressLine1', type: 'text' })}
                    {inputBuilder('Address Line 2', { placeholder: 'Village', id: 'addressLine2', type: 'text' })}
                    <div className="flex flex-row justify-between">
                        {inputBuilder('City', { placeholder: 'Liverpool', id: 'city', type: 'text' })}
                        {inputBuilder('Postal/Zip code', { placeholder: 'L1 8JQ', id: 'postalCode', type: 'text' })}
                    </div>
                    <div className="flex flex-row justify-between">
                        {inputBuilder('Telephone', { placeholder: '0151 1234567', id: 'telephone', type: 'text' })}
                        {inputBuilder('Country', { placeholder: 'United Kingdom', id: 'country', type: 'text' })}
                    </div>
                </div>

                <div className="flex flex-row justify-around border-gray-900 border-t-2 border-solid pt-2">
                    <button className="bg-darkTheme-600 w-1/2 rounded-lg p-3  mr-2">
                        <span className="text-customGrey-100 text-lg font-semibold">Preview</span>
                    </button>
                    <button className="bg-gradient-to-r from-movieBlue to-movieCyan w-3/4 rounded-lg p-4 ml-2">
                        <span className="text-white text-lg font-semibold">Next</span>
                    </button>
                </div>

            </form>
        </div>

    );
}

export default DetailsForm;
