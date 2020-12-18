import React, { useContext} from "react"
import {KnowYourMyYogaContext} from "./KnowYourMyYogaProvider"
import "./KnowYourMyYoga.css"

export const KnowYourMyYoga = ({knowYourMyYoga, yogaPoses, props, id}) =>  {
          console.log(props)
          console.log(id)
  const { knowYourMyYogas, deleteSequence } = useContext(KnowYourMyYogaContext)
      return (
      
      <>
      
      <section className="yogaPoseObj">
             <h3 className="currentDate">Date: {knowYourMyYoga.currentdate}</h3>
             <h3 className="title">Title: {knowYourMyYoga.title}</h3>
             <p className="timeLimit">Time Limit: {knowYourMyYoga.dailyYoga}</p>
            <p className="selectedPose">Selected Pose: {knowYourMyYoga.dailyYogaPracticeId}</p>
            <h3>Selected Pose:</h3>
             { yogaPoses.map(pose => <p>  {pose.english_name}</p> )}
             <p className="instruction">Instruction: {knowYourMyYoga.instruction}</p>
             
     
            
         </section>
          
        
        </> 
      )
}