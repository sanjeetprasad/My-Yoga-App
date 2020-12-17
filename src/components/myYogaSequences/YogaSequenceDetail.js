import React, { useContext, useEffect, useState } from "react";
import { YogaSequenceContext } from "../myYogaSequences/YogaSequenceProvider";
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider";
import { YogaSequence } from "./YogaSequence";
import {KnowYourMyYogaContext} from "../knowYourMyYoga/KnowYourMyYogaProvider" 

export const YogaSequenceDetails = () => {
//   const { yogaPoses, getYogaPoses, getYogaPoseById } = useContext(YogaPoseContext)
//   const {yogaSequences, getYogaSequences } = useContext(YogaSequenceContext)
//   const {knowYourMyYogas, addKnowYourMyYoga, getKnowYourMyYogas} = useContext(KnowYourMyYogaContext)
    
//   const [yogaSequence, setYogaSequence] =useState({})
//   const [yogaPose, setYogaPose] = useState({})

//   useEffect(() => {
//      const yogaSequence = yogaSequences.find(y => y.id ===parseInt(props.match.params.myYogaSequenceId)) || {}
//      setYogaSequence(yogaSequence)
//   }, [yogaSequences])
// // grab the specfic KnowYourPoseId and assian it to the variable and make a button that adds knowYourMyYoga

// useEffect(() => {
//    const yogaPose = yogaPoses.find(y => y.id ===parseInt(props.match.params.knowYourYogaPoseId)) || {}
//    setYogaPose(yogaPose)
//   }, [yogaPoses])

//   const NewMyYoga = () => {
//  const myYogaSequenceId = yogaSequence.id 
//  const knowYourYogaPoseId = yogaPose.id

//   addKnowYourMyYoga({
    
//     myYogaSequenceId,
//     knowYourYogaPoseId
    
//   })
// }

// <button onClick={evt => {
  
// }}>List Of saved Sequences...</button>

         
  const yogaPose = getYogaPoseById(id);

  if (yogaPose) {
    return (
      <section className="yogaPose">
        <h3 className="english__name">English Name: {yogaPose.english_name}</h3>
      </section>
    );
  } else {
    return null;
  }
};
