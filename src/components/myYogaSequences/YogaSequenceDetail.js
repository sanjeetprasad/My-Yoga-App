import React, { useContext, useEffect, useState } from "react"
import { YogaSequenceContext } from "../myYogaSequences/YogaSequenceProvider"
import {YogaPoseContext} from "../knowYourYogaPoses/YogaPoseProvider"


export const YogaSequenceDetails = () => {
    const { yogaPoses, getYogaPoses, getYogaPoseById } = useContext(YogaPoseContext)

    const yogaPose = getYogaPoseById(id)

 if ( yogaPose ) {

    return (
        <section className="yogaPose">
            
            <h3 className="english__name">English Name: {yogaPose.english_name}</h3>
           
         </section>

       
    )

 } else {
     return null
 }


 
}