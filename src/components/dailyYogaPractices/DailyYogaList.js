import React, { useContext, useEffect, useState } from "react"
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider"
import { YogaPose } from "../knowYourYogaPoses/YogaPoseProvider"
import { DailyYogaContext} from "./DailyYogaProvider"
import "./DailyYoga.css"
import { DailyYogaDetail } from "./DailyYogaDetail"
import {DailyYoga} from "./DailyYoga"

export const DailyYogaList = () => {
    
    const { dailyYogas, getDailyYogas } = useContext(DailyYogaContext)
    
    useEffect(() => {
        // console.log("DailyYogaList: Initial render before data")
        getDailyYogas()
    }, [])
    
    useEffect(() => {
        // console.log("DailyYogaList: Location state changed")
        // console.log(dailyYogas)
    }, [dailyYogas])

    const [dailyYoga, setDailyYoga] = useState(0)

    return (
        <div className="yogaPoses">
            
            <select onChange={(pose) => {
                setDailyYoga(pose.target.value)
                // console.log(pose.target[pose.target.options.selectedIndex].label)

             }}>
            <option value = "0">Please choose your Daily Yoga Sequence...</option>

        {
            dailyYogas.map(singlePose => <DailyYoga key={singlePose.id} dailyYoga={singlePose}/>)
        }
        </select>
        <DailyYogaDetail id= {dailyYoga} />
        </div>
    )
}
