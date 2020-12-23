import React from "react"
import "./YogaPose.css"

export const YogaPose = ({yogaPose}) => (
   
      <>
          
        <option key={yogaPose.id} value = {yogaPose.id}>
              {yogaPose.english_name}
          </option>
          
        </>
    )