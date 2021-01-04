import React, { useContext, useEffect, useState } from "react"
import { DailyYogaContext } from "./DailyYogaProvider"


export const DailyYogaDetail = ({id}) => {
    const { dailyYogas, getDailyYogas, getDailyYogaById } = useContext(DailyYogaContext)
//    console.log(singlePose)
  

 const dailyYoga = getDailyYogaById(id)

 if ( dailyYoga ) {

    return (
        <section className="dailyYoga">
            <h3 className="dailyYoga__name">Daily Yoga Name: {dailyYoga.name}</h3>
            <p className="instruction"><text style={{fontWeight: "bold"}}>Instruction:</text> {dailyYoga.instruction}</p>
         
         </section>

       
    )

 } else {
     return null
 }

 
}