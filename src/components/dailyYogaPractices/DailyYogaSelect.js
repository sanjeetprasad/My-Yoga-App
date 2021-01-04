import React, { useContext} from "react"
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider"


export const DailyYogaSelect = ({id}) => {
    const { getYogaPoseById } = useContext(YogaPoseContext)

  

 const yogaPose = getYogaPoseById(id)

 if ( yogaPose ) {

    return (
        
        <section className="dailyYogaSelect">
            <h3 className="sanskrit__name">Sanskrit Name: {yogaPose.sanskrit_name}</h3>
            <h3 className="english__name">English Name: {yogaPose.english_name}</h3>
            <img className="img_url_daily" src={yogaPose.img_url} />
            <p className="description"><text style={{fontWeight: "bold"}}>Description:</text> {yogaPose.description}</p>
             <p className="instruction"><text style={{fontWeight: "bold"}}>Instruction:</text> {yogaPose.instruction}</p>
             <p className="benefits"><text style={{fontWeight: "bold"}}>Benefits:</text> {yogaPose.benefits}</p>
         </section>
         

       
    )

 } else {
     return null
 }

 
}