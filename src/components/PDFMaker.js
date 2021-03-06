import React, { useState, useEffect, useRef } from 'react'
import { jsPDF } from "jspdf";

import placeholder from "../assets/placeholder.png"

import PlayfairDisplay from '../assets/PlayfairDisplay-normal';
import Poppins from '../assets/Poppins-normal';
import RobotoMono from '../assets/RobotoMono-normal';

import PlayfairDisplayBold from '../assets/PlayfairDisplay-bold';
import PoppinsBold from '../assets/Poppins-bold';
import RobotoMonoBold from '../assets/RobotoMono-bold';

export default function PDFMaker({ details, saving, isSaving, demount}) {

    const [installedFonts, hasInstalledFonts] = useState(false)
    
    const sizeMapping = {
        tiny: 12,
        small: 16,  
        normal: 18,
        large: 24,
        huge: 32
    }

    let doc;
    
    const imageWidth = 48;
    const imageHeight = 48;
    const margin = 16

    // const validateData = () => {
    //     for (let key in details) {
    //         if (!details[key]) {
    //             console.log("INVALID AT: ", key)
    //             return false
    //         }
    //     }
    //     // passed checks
    //     isValid(true)
    // }

    const logic = () => {
        console.log("prepping")
        doc = new jsPDF("p", "mm", "a4", { filters: ["ASCIIHexEncode"] });
        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
        let currentMargin = 32
        // declarations 

        const getWeightMapping = (value) => {
            switch(value){
                case "font-bold":
                    return "bold"
                case "font-normal":
                    return "normal"
                default:
                    return "normal" 
            }
        }
    
        const getSizeMapping = (value) => {
            switch(value){
                    case "text-base":
                        return 16
                    case "text-lg":
                        return 18
                    case "text-xl":
                        return 22
                    default:
                        return 26
            }
        }
    
        const getFamilyMapping = (value) => {
            let fontName = "" 
            switch(value) {
                case "font-playfairDisplay":
                    doc.addFileToVFS('PlayfairDisplay-normal.ttf', PlayfairDisplay);
                    doc.addFont('PlayfairDisplay-normal.ttf', 'PlayfairDisplay', 'normal');
                    
                    doc.addFileToVFS('PlayfairDisplay-bold.ttf', PlayfairDisplayBold);
                    doc.addFont('PlayfairDisplay-bold.ttf', 'PlayfairDisplay', 'bold');
                    return "PlayfairDisplay"
                case "font-poppins":
                    doc.addFileToVFS('Poppins-normal.ttf', Poppins);
                    doc.addFont('Poppins-normal.ttf', 'Poppins', 'normal');

                    doc.addFileToVFS('Poppins-bold.ttf', PoppinsBold);
                    doc.addFont('Poppins-bold.ttf', 'Poppins', 'bold');
                    return "Poppins"
                case "font-robotoMono":
                    doc.addFileToVFS('RobotoMono-normal.ttf', RobotoMono);
                    doc.addFont('RobotoMono-normal.ttf', 'RobotoMono', 'normal');

                    doc.addFileToVFS('RobotoMono-bold.ttf', RobotoMonoBold);
                    doc.addFont('RobotoMono-bold.ttf', 'RobotoMono', 'bold');
                    return "RobotoMono"
                default:
                    break;
            }
            hasInstalledFonts(true)
            return fontName
        }
      
        const addTitle = (value, increment, x = false, y = false) => {
            doc.text(value, margin, currentMargin)
            currentMargin += margin
        }
        const addRow = (value, alignment, increment, y) => {
            // eslint-disable-next-line default-case
            switch(alignment){
                case "center":
                    var textWidth = doc.getStringUnitWidth(value) * doc.internal.getFontSize() / doc.internal.scaleFactor;
                    var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
                    doc.text(textOffset, currentMargin, value);
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
        const addElement = (title, value, rectX, rectY, increment = true) => {
            addTitle(title)
            addRow(value, "start", increment)
            doc.rect(margin, currentMargin - 16 - 8, rectX, rectY)
        }
    
        const addElements = (element1, element2) => {
            addTitle(element1.title)
            addRow(element1.value, "start", false)
            doc.rect(margin, currentMargin - 8, width - 128, 12)
            doc.text(element2.title, margin + 64 + 32, currentMargin - 16)
            currentMargin += margin
            addRow(element2.value, "end", false)
            doc.rect(margin + 64 + 32, currentMargin - 24, width - 128, 12)
        }

        // begin processing to pdf
        let fontName = getFamilyMapping(details.fontFamily)
        if (details.image)
            doc.addImage(details.image, width - imageWidth - margin, currentMargin + imageHeight / 2 + 4, imageWidth, imageHeight);
        else 
            doc.addImage(placeholder,width - imageWidth - margin, currentMargin + imageHeight / 2 + 4, imageWidth, imageHeight)
        doc.setFont(fontName, getWeightMapping(details.fontWeight))
        // doc title
        doc.setFontSize(getSizeMapping(details.fontSize)+8);
        addRow(details.documentTitle, "center", true, 16)
        currentMargin+=8
        // body content
        doc.setFontSize(getSizeMapping(details.fontSize));
        addElement("First name", details.firstName, 128, 12);
        addElement("Last name", details.lastName, 128, 12);
        addElement("Address line 1", details.addressLine1, width - (margin * 2), 12);
        addElement("Address line 2", details.addressLine2, width - (margin * 2), 12);

        addElements({ title: "City", value: details.city }, { title: "Postal/Zip code", value: details.postalCode });
        addElements({ title: "Telephone", value: details.telephone }, { title: "Country", value: details.country });
        console.log(doc.getFontList())
        doc.save("result.pdf");

    }

    useEffect(() => {
        if(saving){
            setTimeout(()=>logic(), 300)
            isSaving(false)
        }
    
        return ()=>{
            isSaving(false)
        }
    })
    return (
        <div>

        </div>
    )
}