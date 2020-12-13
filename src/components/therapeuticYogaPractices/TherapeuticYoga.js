import React from "react"
import "./TherapeuticYoga.css"

export const TherapeuticYoga = ({therapeuticYoga}) => (
     
      
        <>
          {/* {console.log(therapeuticYoga)} */}
        
          <option key={therapeuticYoga.id} value = {therapeuticYoga.id}>
              {therapeuticYoga.name}
          </option>
          
        
        </>
    )