import React from 'react'

export default function Details() {
    // Reuses the same props for each input field
    const propBuilder = ({ placeholder, id, type }) => {
        const onBlurProp = (e) => { e.target.placeholder = placeholder }
        const onFocusProp = (e) => { e.target.placeholder = '' }
        return ({
            className: "border-solid border-b-2 border-customGrey-900 text-white w-full min-w-full p-2 text-xl rounded bg-darkTheme-400",
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
                <label className="text-sm text-gray-200 font-bold pb-2">{title}</label>
                <input
                    {...propBuilder(props)}
                />
            </div>
        )
    }

    return (
            <div className="flex flex-col justify-between h-full py-8 w-full">
                <div>
                    {inputBuilder('Document Title' , {placeholder:"Document Title", id:"documentTitle"})}
                </div>
                <div className="flex flex-row justify-between">
                    {inputBuilder('First Name', { placeholder: 'John', id: 'firstName', type: 'text' })}
                    {inputBuilder('Last Name', { placeholder: 'Doe', id: 'lastName', type: 'text' })}
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
    )
}
