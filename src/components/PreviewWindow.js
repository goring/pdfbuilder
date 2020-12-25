import React, {useState} from 'react'

export default function PreviewWindow({details}) {



    
    const propBuilder = () => {
        return "bg-orange"
    }

    const inputBuilder = (title, value) => {
        return (
            <div className={`flex flex-col w-full m-5`}>
                <label className={`${details.fontFamily} ${details.fontWeight} ${details.fontSize} font-sans text-xs text-black font-bold pb-2`}>{title}</label>
                <p className={`${details.fontFamily} ${details.fontWeight} ${details.fontSize} text-sm bg-blue-300 pl-3 p-1 `}>{value}</p>
            </div>
        )
    }

    const page = () =>  { 

        return(
        
        <div className="flex flex-col">
            <div className="flex justify-end p-5"><img className="w-4/12" src={details.image}></img></div>
            <div className="w-full flex justify-center h-full items-center">
                <div className="flex flex-col  h-5/6 w-full">
                    <div className="flex flex-row justify-between">
                        {inputBuilder('First Name', details.firstName)} 
                        {inputBuilder('Last Name', details.lastName)} 
                    </div>
                    <div className="flex flex-row justify-between">
                        {inputBuilder('Address Line 1', details.addressLine1)} 
                    </div>
                    <div className="flex flex-row justify-between">
                        {inputBuilder('Address Line 2', details.addressLine2)} 
                    </div>
                    <div className="flex flex-row justify-between">
                        {inputBuilder('City', details.city)} 
                        {inputBuilder('Postal/Zip Code', details.postalCode)} 
                    </div>
                    <div className="flex flex-row justify-between">
                        {inputBuilder('Telephone', details.telephone)} 
                        {inputBuilder('Country', details.country)} 
                    </div>
                </div>
            </div>
        </div>
    )}
    return (
        
        <div className="border-solid border-white border-2 rounded-lg w-1/2 mx-4 my-16 bg-white-400 sm:overflow-scroll">

            {details ? page() : "waiting for input..."}

        </div>

    )
}
