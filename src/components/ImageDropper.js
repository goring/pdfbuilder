import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

export default function ImageDropper({setImage}) {
    const [isOver, setIsOver] = useState(false)
    

    const imageHandler = (image) => {
        let imgB;
        console.log(image)

        const fr = new FileReader()
        image.forEach((file)=>{
            fr.readAsDataURL(file)
            fr.onloadend =  (res)=> {
                setImage(res.currentTarget.result)
            }
        })
    }
    return (
        <div >
            <div className="border border-sold border-green-200 h-3/4 my-4 rounded">

                <div onDragOver={() => setIsOver(true)} onDragLeave={() => setIsOver(false)} className={`${isOver ? "bg-customBlue" : "bg-darkTheme-500"} flex flex-col h-3/5 w-3/4 rounded-2xl`}>

                </div>

                <Dropzone onDrop={acceptedFiles => imageHandler(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section className="h-3/4 w-full ">
                            <div className="flex flex-col h-full w-full justify-center items-center" {...getRootProps()}>
                                <input {...getInputProps()} />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2B2A2E">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                <h1 className="text-lg font-semibold text-center text-white-300 p-4 select-none"> CLICK OR DRAG IMAGE HERE</h1>
                            </div>
                        </section>
                    )}
                </Dropzone>

            </div>
        </div>
    )
}
