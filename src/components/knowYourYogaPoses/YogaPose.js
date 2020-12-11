import React from "react"
import "./YogaPose.css"

export const YogaPose = ({yogaPose}) => (
        // <section className="yogaPose">
        //     <h3 className="sanskrit__name">Sanskrit Name: {yogaPose.sanskrit_name}</h3>
        //     <h3 className="english__name">English Name: {yogaPose.english_name}</h3>
        //     <img className="img_url" src={yogaPose.img_url} />
        //     <p className="description">Description: {yogaPose.description}</p>
        //     <p className="instruction">Instruction: {yogaPose.instruction}</p>
        //     <p className="benefits">Benefits: {yogaPose.benefits}</p>
            
        // </section>
      
        <>
          {/* {console.log(yogaPose)} */}
        
          <option key={yogaPose.id} value = {yogaPose.id}>
              {yogaPose.english_name}
          </option>
          
        
        </>
    )