import React from "react"
import "./DailyYoga.css"

export const DailyYoga = ({dailyYoga}) => (
     
      
        <>
          {/* {console.log(yogaPose)} */}
        
          <option key={dailyYoga.id} value = {dailyYoga.id}>
              {dailyYoga.name}
          </option>
          
        
        </>
    )