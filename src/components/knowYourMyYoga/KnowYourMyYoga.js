import React from "react"
import "./KnowYourMyYoga.css"

export const KnowYourMyYoga = ({knowYourMyYoga, yogaPoses}) => (
      
      
        <>
           <section className="yogaPose">
             <h3 className="currentDate">Date: {knowYourMyYoga.currentdate}</h3>
             <h3 className="title">Title: {knowYourMyYoga.title}</h3>
            
            <p className="selectedPose">Selected Pose: {knowYourMyYoga.dailyYogaPracticeId}</p>
            <h3>Selected Pose:</h3>
             { yogaPoses.map(pose => <p>  {pose.english_name}</p> )}
             <p className="instruction">Instruction: {knowYourMyYoga.instruction}</p>
             <p className="timeLimit">Time Limit: {knowYourMyYoga.dailyYoga}</p>
         
            
         </section>
          
        
        </>
    )