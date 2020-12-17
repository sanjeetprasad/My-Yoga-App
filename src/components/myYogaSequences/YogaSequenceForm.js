import React, { useContext, useRef, useEffect, useState } from "react";
import { YogaSequenceContext } from "./YogaSequenceProvider";
import { DailyYogaContext } from "../dailyYogaPractices/DailyYogaProvider";
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider";
import {KnowYourMyYogaContext} from "../knowYourMyYoga/KnowYourMyYogaProvider"



import "./YogaSequence.css";

export const YogaSequenceForm = (props) => {
  const { addYogaSequence, getYogaSequences } = useContext(YogaSequenceContext);
  const { yogaPoses, getYogaPoses, getYogaPoseById } = useContext(YogaPoseContext);
  const { dailyYogas, getDailyYogas } = useContext(DailyYogaContext);
  const  {addKnowYourMyYoga} = useContext(KnowYourMyYogaContext)
  

  const title = useRef(null);
  const yogaPose = useRef(null);
  const instructions = useRef(null);
  const date = useRef(null);
  const dailyYoga = useRef(null);

  const [SelectyogaPoses, setYogaPose] = useState(0)
  const [selectPose, setSelectPose] = useState([])




  useEffect(() => {
    getYogaPoses().then(getYogaSequences).then(getDailyYogas);
  }, []);

  const constructNewYogaSequence = () => {
    const dailyYogaPracticeId = parseInt(yogaPose.current.value);
    // const instruction= instructions.current.value
    const currentDate = date.current.value
    const yogaSequenceTitle = title.current.value;
    if (yogaSequenceTitle === "") {
      window.alert("Please select a title");
    } else {
     
      addYogaSequence({
        userId: parseInt(localStorage.getItem("app_user_id")),
        currentDate,
        title: yogaSequenceTitle,
        dailyYogaPracticeId,
        instruction: instructions.current.value,
        dailyYoga: dailyYoga.current.value,
      })
      .then(myYogaSequenceObj => {
        console.log(myYogaSequenceObj) // This is the new sequence that is just created 
        console.log(selectPose) // This is the array that user select from the form
        // I need to use myYogaSequenceObj.id with each pose from select pose array and post a new record to the know your my yoga table
       // hints promise.all 

       selectPose.forEach(yogaPose => {
         const sequenceYogaPoseObj = {
          myYogaSequenceId: myYogaSequenceObj.id,
          knowYourYogaPoseId: yogaPose.id,
          
         }
         addKnowYourMyYoga(sequenceYogaPoseObj)
       })
        return myYogaSequenceObj
      })
      .then(() => props.history.push("/yoga-dashboard"))
    //   .then(res => res.json())
    }
  };

  return (
    <form className="yogaSequenceForm">
      <h2 className="yogaSequenceForm__title">Make your own Sequence</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            ref={date}
            required
            autoFocus
            className="form-control"
            placeholder="date"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="yogaSequenceTitle">Yoga Sequence title: </label>
          <input
            type="text"
            id="yogaSequenceTitle"
            ref={title}
            required
            autoFocus
            className="form-control"
            placeholder="Yoga Sequence Title "
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="yogaPose">Yoga Pose: </label>

          <select
            ref={yogaPose}
            onChange={(pose) => {
              setYogaPose(pose.target.value);
            }}
          >
            <option value="0"> Choose your yoga pose..</option>
            {yogaPoses.map((singlePose) => (
              <option key={singlePose.id} name="yogaPose"  value={singlePose.id} >{singlePose.english_name}</option>
            ))}
          </select>
          {selectPose.map((pose) => (
            <option key={pose} name="yogaPose" value={pose.id}>{pose.english_name}</option>
          ))}
          <button onClick={evt => {
              const newPose = selectPose.slice()
              const taco = getYogaPoseById(yogaPose.current.value)
              newPose.push(taco)
              setSelectPose(newPose)
              // console.log(selectPose)
          }}>Add this pose</button>
        </div>
      </fieldset>
      <fieldset>
        <div className="from-group">
          <label htmlFor="dailyYoga">Daily Yoga Practicess.</label>
          <select
            defaultValue=""
            name="dailyYoga"
            ref={dailyYoga}
            id="dailyYoga"
            className="form-control"
          >
            <option value="0"> Select the time for your Sequence..</option>
            {dailyYogas.map((pose) => (
              <option key={pose.id} value={pose.id}>
                {pose.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="yogaSequenceInstructions">
            Yoga Sequence Instructions:{" "}
          </label>
          <input
            type="text"
            id="yogaSequenceInstructions"
            ref={instructions}
            required
            autoFocus
            className="form-control"
            placeholder="Yoga Sequence Instruction "
          />
        </div>
      </fieldset>
      <button
        type="Save this secquence"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewYogaSequence();
        }}
        className="btn btn-primary"
      >
        Save This Sequence
      </button>
    </form>
  );
};
