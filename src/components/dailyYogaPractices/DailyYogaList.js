import React, { useContext, useEffect, useState } from "react"
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider"
import { YogaPose } from "../knowYourYogaPoses/YogaPoseProvider"
import { DailyYogaContext} from "./DailyYogaProvider"
import "./DailyYoga.css"
import { DailyYogaDetail } from "./DailyYogaDetail"
import {DailyYoga} from "./DailyYoga"
import {YogaPoseDetails} from "../knowYourYogaPoses/YogaPoseDetail"

export const DailyYogaList = () => {
    
    const {yogaPoses, getYogaPoses} = useContext(YogaPoseContext)

    const threeMinutsYoga = [2, 7, 15, 20]
    const fiveMinutsYoga = [1, 18, 21, 25, 30, 35]
    const tenMinutsYoga = [3, 10, 14, 27, 37, 40, 47]
    const fifteenMinutsYoga = [5, 9, 19, 23, 29, 32, 39, 17]

    const [dailyYoga, setDailyYoga] = useState(0)
//     let list = []
//   useEffect(() => {
    
//     list.push(2)
//     list.push(10)
//     console.log(list)
//     console.log(threeMinutsYoga)

//   }, [dailyYoga])
    
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
        <div className="yogaPoses">
            
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
       
        <DailyYogaDetail id= {dailyYoga} />

        {
            threeMinutsYoga.map(singlePose => <YogaPoseDetails key={singlePose} id={singlePose}/>)
        }

        </div>
    )
}
