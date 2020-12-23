import React, { useContext, useEffect, useState } from "react"
import { YogaPoseContext } from "./YogaPoseProvider"
import { YogaPose } from "./YogaPose"
import "./YogaPose.css"
import { YogaPoseDetails } from "./YogaPoseDetail"

export const YogaPoseList = () => {
    
     // This state changes when `getYogaPoses()` is invoked below
    const { yogaPoses, getYogaPoses } = useContext(YogaPoseContext)
    
    useEffect(() => {
        // console.log("YogaPoseList: Initial render before data")
        getYogaPoses()
    }, [])
    
    useEffect(() => {
        // console.log("YogaPoseList: Location state changed")
        // console.log(yogaPoses)
    }, [yogaPoses])

    const [yogaPose, setYogaPose] = useState(0)

    return (
        <div className="yogaPoses">
            
            <select onChange={(pose) => {
                setYogaPose(pose.target.value)
                // console.log(pose.target[pose.target.options.selectedIndex].label)

             }}>
            <option value = "0">Please choose your Yoga Pose...</option>

        {
            yogaPoses.map(singlePose => <YogaPose key={singlePose.id} yogaPose={singlePose}/>)
        }
        
        </select>
        {/* providing id as an argument bto the YogaPoseDetail */}
        <YogaPoseDetails id= {yogaPose} />
        </div>
    )
}

