import React, { useContext, useEffect, useState } from "react"
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider"
import { YogaPose } from "../knowYourYogaPoses/YogaPoseProvider"
import { TherapeuticYogaContext} from "./TherapeuticYogaProvider"
import "./TherapeuticYoga.css"
import { TherapeuticYogaDetail } from "./TherapeuticYogaDetail"
import {TherapeuticYoga} from "./TherapeuticYoga"

export const TherapeuticYogaList = () => {

    // const threeMinutsYoga = [2, 7, 15, 20]
    // const fiveMinutsYoga = [1, 18, 21, 25, 30, 35]
    // const tenMinutsYoga = [3, 10, 14, 27, 37, 40, 47]
    // const fifteenMinutsYoga = [5, 9, 19, 23, 29, 32, 39, 48]


    
    const { therapeuticYogas, getTherapeuticYogas } = useContext(TherapeuticYogaContext)
    
    useEffect(() => {
        // console.log("TherapeuticYogaList: Initial render before data")
        getTherapeuticYogas()
    }, [])
    
    useEffect(() => {
        // console.log("TherapeuticYogaList: Location state changed")
        // console.log(therapeuticYogas)
    }, [therapeuticYogas])

    const [selectTherapeuticYoga, setTherapeuticYoga] = useState(0)

    return (
        <div className="yogaPoses">
            
            <select onChange={(pose) => {
                setTherapeuticYoga(pose.target.value)
                // console.log(pose.target[pose.target.options.selectedIndex].label)

             }}>
            <option value = "0">Please choose your Therapeutic Yoga Sequence...</option>
            {console.log(therapeuticYogas)}

        {
            therapeuticYogas.map(singlePose => <TherapeuticYoga key={singlePose.id} therapeuticYoga={singlePose}/>)
        }
        
        </select>
       
        <TherapeuticYogaDetail id= {selectTherapeuticYoga} />
        </div>
    )
}