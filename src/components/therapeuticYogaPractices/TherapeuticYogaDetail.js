import React, { useContext, useEffect, useState } from "react"
import { TherapeuticYogaContext } from "./TherapeuticYogaProvider"


export const TherapeuticYogaDetail = ({id}) => {
    const { therapeuticYogas, getTherapeuticYogas, getTherapeuticYogaById } = useContext(TherapeuticYogaContext)

  

 const therapeuticYoga = getTherapeuticYogaById(id)

 if ( therapeuticYoga ) {

    return (
        <section className="therapeuticYoga">
            <h3 className="therapeuticYoga__name">Therapeutic Yoga Name: {therapeuticYoga.name}</h3>
            <p className="instruction">Instruction: {therapeuticYoga.instruction}</p>
            <button>
            Save this sequence.
            </button>
         </section>

       
    )

 } else {
     return null
 }

 
}