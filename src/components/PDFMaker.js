import React, {useState, useEffect} from 'react' 
import { jsPDF } from "jspdf";
import FontSelection from './FontSelection';
import {AmiriRegular} from '../assets/test'
import {RobotoFont} from '../assets/Roboto'


export default function PDFMaker({details, saving, isSaving}) {
    const sizeMapping = {
        tiny:12,
        small:16,
        normal:18,
        large:24,
        huge:32
    }

    const [valid, isValid] = useState(false)
    const doc = new jsPDF("p", "mm", "a4",{filters: ["ASCIIHexEncode"]});
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    const imageWidth = 48;
    const imageHeight = 48;
    let currentMargin = 32 
    const margin = 16

    const validateData = () => {
        for(let key in details){
            if(!details[key]){
                console.log("INVALID AT: ", key)
                return false
            }
        }
        // passed checks
        isValid(true)
    }
    const addTitle = (value,increment, x=false,y=false) => {
        doc.text(value, margin, currentMargin)
        currentMargin+=margin
    }
    const addRow = (value, alignment, increment, y) => {
            switch(alignment){
                case "center": 
                    console.log("centering")
                    doc.text(value, width/2-doc.getTextWidth(value)+4, currentMargin)
                    break
                case "start":
                    doc.text(value, margin+4, currentMargin)
                    break;
                case "end":
                    doc.text(value, margin+64+36, currentMargin-16)
                    break;
            } 
        
        if(increment)
            currentMargin+=margin

    }
    const addElement = (title, value, rectX,rectY, increment=true) => {
        addTitle(title)
        addRow(value, "start", increment)
        doc.rect(margin, currentMargin-16-8, rectX,rectY)
    }

    const addElements = (element1, element2) => {
        addTitle(element1.title)
        addRow(element1.value,"start", false)
        doc.rect(margin, currentMargin-8, width-128, 12)

        doc.text(element2.title, margin+64+32, currentMargin-16)
        currentMargin+=margin
        addRow(element2.value,"end", false)
        doc.rect(margin+64+32, currentMargin-24, width-128, 12)



    }

    const [complete, isComplete] = useState()
    useEffect(()=>{
        if(saving) {
            // validateData()
            isValid(true)
            isSaving(false)
        }
        if(valid) {
            if(details.image)
            doc.addImage(details.image, width-imageWidth-margin,currentMargin+imageHeight/2-4,imageWidth, imageHeight)
            addRow(details.documentTitle,"center", true, 16)

            console.log(details.fontFamily)
            console.log(doc.getFontList())
            console.log(details.fontSize)
            doc.setFontSize(24)
            console.log(doc.getFontList())
            

        

            doc.addFileToVFS("Roboto-Regular.ttf", RobotoFont);
            doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
            doc.setFont("Roboto")
            doc.setFontSize(16)

            doc.text(10,10, "This is roboto lol")
        
       
            // console.log("current font size:", details.fontSize)
            // console.log("current font weight:", details.fontWeight)
            // console.log("current font family:", details.fontFamily)

            addElement("First name", details.firstName, 128,12)
            addElement("Last name", details.lastName,128,12)
            addElement("Address line 1", details.addressLine1, width-(margin*2),12)
            addElement("Address line 2", details.addressLine1, width-(margin*2),12)

            addElements({title:"City", value:details.city}, {title:"Postal/Zip code", value:details.postalCode})
            addElements({title:"Telephone", value:details.telephone}, {title:"Country", value:details.country})

            doc.save("result.pdf")
            // reset states
            isSaving(false)
            isValid(false)
        }
    }, [saving])
    
    return (
        <div>
            {complete ? "Success!" : "Loading..."}
        </div>
    )
}
