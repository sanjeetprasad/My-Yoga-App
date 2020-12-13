import React, { useContext, useEffect, useState } from "react"
import { DailyYogaContext } from "./DailyYogaProvider"


export const DailyYogaDetail = ({id}) => {
    const { dailyYogas, getDailyYogas, getDailyYogaById } = useContext(DailyYogaContext)

  

 const dailyYoga = getDailyYogaById(id)

 if ( dailyYoga ) {

    return (
        <section className="dailyYoga">
            <h3 className="dailyYoga__name">Daily Yoga Name: {dailyYoga.name}</h3>
            <p className="instruction">Instruction: {dailyYoga.instruction}</p>
            <button >
            Save this sequence.
            </button>
         </section>

       
    )

 } else {
     return null
 }

 
}