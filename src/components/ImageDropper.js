import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

export default function ImageDropper({setImage}) {

    const imageHandler = (image) => {
        const fr = new FileReader()
        image.forEach((file)=>{
            fr.readAsDataURL(file)
            fr.onloadend =  (res)=> {
                setImage(res.currentTarget.result)
            }
        })
    }
    return (
            <div className="h-full flex flex-col justify-center items-center my-4 rounded">
                <Dropzone onDrop={acceptedFiles => imageHandler(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section className="border-8 border-blue-300 rounded-lg h-4/5 w-full">
                            <div className="h-full flex flex-col justify-center items-center" {...getRootProps()}>
                                <input {...getInputProps()} />
                                    <svg className="h-20"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#60a5fa">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                <h1 className="text-lg font-semibold text-center text-blue-400 p-4 select-none"> CLICK OR DRAG IMAGE HERE</h1>
                            </div>
                        </section>
                    )}
                </Dropzone>

            </div>
    )
}
