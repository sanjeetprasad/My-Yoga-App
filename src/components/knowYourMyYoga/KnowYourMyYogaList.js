import React, { useContext, useEffect, useState } from "react"

import {KnowYourMyYogaContext} from "./KnowYourMyYogaProvider"
import {YogaSequenceContext} from "../myYogaSequences/YogaSequenceProvider"
import {YogaPoseContext} from "../knowYourYogaPoses/YogaPoseProvider"
import {KnowYourMyYoga} from "./KnowYourMyYoga"
// import "./KnowYourMyYoga.css"

//get the sequences that user has created, 
//get the knowYourMyYogaObj by the sequenceId
//get the yoga Pose from the yogaPoseid 

export const MyYogaDashboardList = () => {
    
    const {yogaPoses, getYogaPoses} = useContext(YogaPoseContext)
    const {yogaSequences, getYogaSequences} = useContext(YogaSequenceContext)
    const { knowYourMyYogas, getKnowYourMyYogas } = useContext(KnowYourMyYogaContext)
    
    
    const [yogaPose, setYogaPose] = useState([])
    const [yogaSequence, setYogaSequence] = useState([])
    const [relationship, setRelationship] = useState([])

    useEffect(() => {
      getYogaPoses()
      .then(getYogaSequences)
      .then(getKnowYourMyYogas)
    }, [])

    useEffect(() => {
    
      const activeUserSequence = yogaSequences.filter(seq => seq.userId === parseInt(localStorage.getItem("app_user_id")))
      setYogaSequence(activeUserSequence)
      // console.log(yogaPoses)
      console.log(activeUserSequence)
    
    }, [yogaSequences])
    
    // useEffect(() => {
    //   const sequenceRelationship = knowYourMyYogas.filter(ky => {
    //      return yogaSequence.find(ys => ys.id === ky.myYogaSequenceId)
         
    //   })
    //   console.log(sequenceRelationship)
    //   // console.log(knowYourMyYogas)
    //   const sequenceMade = yogaPoses.filter(sm => {
    //        return sequenceRelationship.find(ky => sm.id ===ky.knowYourYogaPoseId)
    //   })
    //   setRelationship(sequenceMade)
    //  console.log(sequenceMade)
    // }, [yogaPoses, knowYourMyYogas])

    


  

    return (
      
        <div className="dashboard">
          {console.log(yogaSequence)}
          {
          yogaSequence.map(s => {
            const sequenceRelationship = knowYourMyYogas.filter(ky => {
              return  ( s.id === ky.myYogaSequenceId)
              
           })
           console.log(sequenceRelationship)
           // console.log(knowYourMyYogas)

           const sequenceMade = yogaPoses.filter(sm => {
             
                return sequenceRelationship.find(ky => sm.id ===ky.knowYourYogaPoseId)
                
           })
          //  console.log(sequenceMade)
             return < KnowYourMyYoga key={s.id} knowYourMyYoga={s} yogaPoses={sequenceMade} /> })
        
        }
        

        </div>

    
    )
}

