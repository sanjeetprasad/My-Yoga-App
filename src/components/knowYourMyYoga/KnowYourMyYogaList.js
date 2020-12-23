import React, { useContext, useEffect, useState } from "react";

import { KnowYourMyYogaContext } from "./KnowYourMyYogaProvider";
import { YogaSequenceContext } from "../myYogaSequences/YogaSequenceProvider";
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider";
import { KnowYourMyYoga } from "./KnowYourMyYoga";
// import "./KnowYourMyYoga.css"


export const MyYogaDashboardList = (props) => {
  const { yogaPoses, getYogaPoses } = useContext(YogaPoseContext);
  const { yogaSequences, getYogaSequences, deleteSequence } = useContext(YogaSequenceContext);
  const { knowYourMyYogas, getKnowYourMyYogas } = useContext(KnowYourMyYogaContext);

  const [yogaPose, setYogaPose] = useState([]);
  const [yogaSequence, setYogaSequence] = useState([]);
  const [relationship, setRelationship] = useState([]);

  useEffect(() => {
    getYogaPoses().then(getYogaSequences).then(getKnowYourMyYogas);
  }, []);

  useEffect(() => {
    const activeUserSequence = yogaSequences.filter(
      (seq) => seq.userId === parseInt(localStorage.getItem("app_user_id"))
    );
    setYogaSequence(activeUserSequence);
    // console.log(yogaPoses)
    // console.log(activeUserSequence)
  }, [yogaSequences]);



  return (
    <>
    <h1>My Yoga Dashboard.</h1>
    <div className="dashboard">
      
      {/* matching the active user yogaSequence Id to the myYogaSequence id */}
      {yogaSequence.map((s) => {
        const sequenceRelationship = knowYourMyYogas.filter((ky) => {
          return s.id === ky.myYogaSequenceId;
        });
       
        // matching the each yoga pose of the sequence to the yoga pose.
        const sequenceMade = yogaPoses.filter((yp) => {
          return sequenceRelationship.find(
            (ky) => yp.id === ky.knowYourYogaPoseId
          );
        });
        //  console.log(sequenceMade)
        return (
          <div className="dashYogaPose" key={s.id}>
            <KnowYourMyYoga id={yogaSequence.id}  knowYourMyYoga={s} yogaPoses={sequenceMade}
              props={props}
            />
            
            {/* {console.log(s)} */}
            <button className="btn--release" 
              onClick={() => { deleteSequence(s.id).then(() => {
                  props.history.push("/yoga-dashboard")
                  
                });
                
              }}
            >
              Detete
            </button>
          </div>
        );
      })}
    </div>
    </>
  );
};
