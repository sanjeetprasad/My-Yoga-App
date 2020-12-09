import React, { useContext, useEffect } from "react"
import { YogaPoseContext } from "./YogaPoseProvider"
import { YogaPose } from "./YogaPose"
import "./YogaPose.css"

export const YogaPoseList = () => {
    
    const { yogaPoses, getYogaPoses } = useContext(YogaPoseContext)
    
    useEffect(() => {
        console.log("YogaPoseList: Initial render before data")
        getYogaPoses()
    }, [])
    
    useEffect(() => {
        console.log("YogaPoseList: Location state changed")
        console.log(yogaPoses)
    }, [yogaPoses])

    return (
        <div className="yogaPoses">
            <option value = "0">Please choose your Yoga Pose...</option>
        {
            yogaPoses.map(singlePose => <YogaPose key={singlePose.id} yogaPose={singlePose} />)
        }
        </div>
    )
}