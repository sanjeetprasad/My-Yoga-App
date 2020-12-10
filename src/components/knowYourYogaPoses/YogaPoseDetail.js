import React, { useContext, useEffect, useState } from "react"
import { YogaPoseContext } from "./YogaPoseProvider"


export const YogaPoseDetails = ({id}) => {
    const { yogaPoses, getYogaPoses, getYogaPoseById } = useContext(YogaPoseContext)

    // const [yogaPose, setYogaPose] = useState({})

    // useEffect(() => {
    //     const yogaPoseId = parseInt(props.match.params.yogaPoseId)
    //     console.log(yogaPoseId)
    //     getYogaPoseById(yogaPoseId)g
    //         .then(setYogaPose)
    // }, [])

 const yogaPose = getYogaPoseById(id)

 if ( yogaPose ) {

    return (
        <section className="yogaPose">
            <h3 className="sanskrit__name">Sanskrit Name: {yogaPose.sanskrit_name}</h3>
            <h3 className="english__name">English Name: {yogaPose.english_name}</h3>
            <img className="img_url" src={yogaPose.img_url} />
            <p className="description">Description: {yogaPose.description}</p>
             <p className="instruction">Instruction: {yogaPose.instruction}</p>
             <p className="benefits">Benefits: {yogaPose.benefits}</p>
         </section>

       
    )

 } else {
     return null
 }

 
}