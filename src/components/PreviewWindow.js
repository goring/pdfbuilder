import React, { useState } from 'react'
import Placeholder from '../assets/placeholder.png'
export default function PreviewWindow({ details }) {


    const inputBuilder = (title, value, padding = 0) => {
        return (
            <div className={`flex flex-col w-full ${padding}`}>
                <label className={`${details.fontFamily} ${details.fontWeight} ${details.fontSize} font-sans text-xs text-black pb-2`}>{title}</label>
                <p className={`${details.fontFamily} ${details.fontWeight} ${details.fontSize} text-sm border-t border-b border-l border-r border-black pl-3 p-1 ${value ? "pb-2" : "pb-8"}`}>{value}</p>
            </div>
        )
    }

    const page = () => {

        return (

            <div className="flex flex-col m-8 ">
                <div className="w-full flex justify-around h-full items-center">
                    <div className="flex flex-col  h-5/6 w-full justify-between">
                        <div className="flex justify-around mb-8">
                            <h1 className={`text-3xl ${details.fontFamily}`}>{details.documentTitle === "" ? "Document Title" : details.documentTitle}</h1>
                        </div>
                        <div className="flex flex-row justify-around w-full">
                            <div className="flex flex-col justify-evenly m-auto w-full">
                                {inputBuilder('First Name', details.firstName, "pr-4")}
                                {inputBuilder('Last Name', details.lastName, "pr-4")}
                            </div>
                            <img className="h-32 w-32 mt-4" src={details.image ? details.image : Placeholder}></img>
                        </div>
                        <div className="flex flex-row justify-between">
                            {inputBuilder('Address Line 1', details.addressLine1)}
                        </div>
                        <div className="flex flex-row justify-between">
                            {inputBuilder('Address Line 2', details.addressLine2)}
                        </div>
                        <div className="flex flex-row justify-between">
                            {inputBuilder('City', details.city, "mr-2")}
                            {inputBuilder('Postal/Zip Code', details.postalCode, "ml-2")}
                        </div>
                        <div className="flex flex-row justify-between">
                            {inputBuilder('Telephone', details.telephone, "mr-2")}
                            {inputBuilder('Country', details.country, "ml-2")}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (

        <div className="border-solid border-white border-2 rounded-lg w-1/2 mx-4 my-16 bg-white overflow-y-auto">

            {details ? page() : "waiting for input..."}

        </div>

    )
}
