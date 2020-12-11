import React, { useContext, useRef, useEffect } from "react"
import { YogaSequenceContext } from "./YogaSequenceProvider"

import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider"

import "./YogaSequence.css"

export const YogaSequenceForm = (props) => {
    const { addYogaSequence,getYogaSequences } = useContext(YogaSequenceContext)
    const { yogaPoses, getYogaPoses } = useContext(YogaPoseContext)
 
    const title = useRef(null)
    const yogaPose = useRef(null)
    const instructions = useRef(null)
    const date = useRef(null)
  
    useEffect(() => {
       getYogaPoses().then(getYogaSequences)
    }, [])

    const constructNewYogaSequence = () => {
    
        const yogaPoseId = parseInt(yogaPose.current.value)
        // const instruction= instructions.current.value
        // const date = date.current.value
        const yogaSequenceTitle = title.current.value
         if (yogaSequenceTitle === "") {
            window.alert("Please select a title")
        } else {
            addYogaSequence({
                // date,
                title: yogaSequenceTitle,
                yogaPoseId,
                instruction: instructions.current.value
            })
            .then(() => props.history.push("/yoga-sequence"))
        }
    }

    return (
        <form className="yogaSequenceForm">
            <h2 className="yogaSequenceForm__title">Make your own Sequence</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="data" id="date" ref={date} required autoFocus className="form-control" placeholder="date" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="yogaSequenceTitle">Yoga Sequence title: </label>
                    <input type="text" id="yogaSequenceTitle" ref={title} required autoFocus className="form-control" placeholder="Yoga Sequence Title " />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="yogaPose">Yoga Pose: </label>
                    <input type="text" id="yogaPose" ref={yogaPose} required autoFocus className="form-control" placeholder= "Yoga Pose" />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="yogaSequenceInstructions">Yoga Sequence Instructions: </label>
                    <input type="text" id="yogaSequenceInstructions" ref={instructions} required autoFocus className="form-control" placeholder="Yoga Sequence Instruction " />
                </div>
            </fieldset>
            <button type="Save this secquence"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewYogaSequence()
                     
                }}
                className="btn btn-primary">
                Save This Sequence
            </button>
        </form>
    )
}