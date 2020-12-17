import React from "react"
import "./DailyYoga.css"

export const DailyYoga = ({dailyYoga}) => (
     
      
        <>
          
        
          <option key={dailyYoga.id} value = {dailyYoga.id}>
              {dailyYoga.name}
          </option>
          
        
        </>
    )