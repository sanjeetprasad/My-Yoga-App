import React, { useContext, useEffect, useState } from "react"
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider"
import { YogaPose } from "../knowYourYogaPoses/YogaPoseProvider"
import { DailyYogaContext} from "./DailyYogaProvider"
import "./DailyYoga.css"
import { DailyYogaSelect } from "./DailyYogaSelect"
import {DailyYoga} from "./DailyYoga"
import {YogaPoseDetails} from "../knowYourYogaPoses/YogaPoseDetail"
import {DailyYogaDetail} from "./DailyYogaDetail"

export const DailyYogaList = () => {
    
    const {yogaPoses, getYogaPoses, } = useContext(YogaPoseContext)


    const dailyYogaSequence = [ [2, 7, 15, 20], [1, 18, 21, 25, 30, 35], [10, 3, 14, 27, 37, 40, 47], [5, 9, 19, 23, 29, 32, 39, 17] ]
  

    const [dailyYoga, setDailyYoga] = useState(0)

    
    const { dailyYogas, getDailyYogas } = useContext(DailyYogaContext)
    
    useEffect(() => {
        // console.log("DailyYogaList: Initial render before data")
        getYogaPoses()
        .then(getDailyYogas)
        }, [])
    
    useEffect(() => {
        // console.log("DailyYogaList: Location state changed")
        // console.log(dailyYogas)
    }, [dailyYogas])


    
    
    return (
        <div className="dailyYogaPoses">
            <div className="daily">
            <h2>Daily Yoga Sequences.</h2>
            <select onChange={(pose) => {
                setDailyYoga(pose.target.value)
                // console.log(pose.target[pose.target.options.selectedIndex].label)

             }}>
            <option value = "0">Please choose your Daily Yoga Sequence...</option>
            

        {
            dailyYogas.map(singlePose => <DailyYoga key={singlePose.id} dailyYoga={singlePose}/>)
        }
        {/* {console.log("this is me")} */}
        
        </select>
        </div>
       
       <DailyYogaDetail id= {dailyYoga} />
       
        {
            dailyYoga ? dailyYogaSequence[dailyYoga-1].map(singlePose => <DailyYogaSelect key={singlePose} id={singlePose}/>) :``
        }

        </div>
    )
}
