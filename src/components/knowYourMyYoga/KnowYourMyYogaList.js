import React, { useContext, useEffect, useState } from "react";

import { KnowYourMyYogaContext } from "./KnowYourMyYogaProvider";
import { YogaSequenceContext } from "../myYogaSequences/YogaSequenceProvider";
import { YogaPoseContext } from "../knowYourYogaPoses/YogaPoseProvider";
import { KnowYourMyYoga } from "./KnowYourMyYoga";
// import "./KnowYourMyYoga.css"

//get the sequences that user has created,
//get the knowYourMyYogaObj by the sequenceId
//get the yoga Pose from the yogaPoseid

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
      <h1>My Yoga Dashboard.</h1>
      {/* {console.log(yogaSequence)} */}
      {yogaSequence.map((s) => {
        const sequenceRelationship = knowYourMyYogas.filter((ky) => {
          return s.id === ky.myYogaSequenceId;
        });
        //  console.log(sequenceRelationship)
        // console.log(knowYourMyYogas)

        const sequenceMade = yogaPoses.filter((sm) => {
          return sequenceRelationship.find(
            (ky) => sm.id === ky.knowYourYogaPoseId
          );
        });
        //  console.log(sequenceMade)
        return (
          <div className="yogaPose">
            <KnowYourMyYoga
              id={yogaSequence.id}
              key={s.id}
              knowYourMyYoga={s}
              yogaPoses={sequenceMade}
              props={props}
            />

            {/* {console.log(s)} */}
            <button
              className="btn--release"
              onClick={() => {
                deleteSequence(s.id).then(() => {
                  // props.history.push("/yoga-dashboard")
                  setYogaPose([1]);
                });
                // console.log("delete button was hit")
              }}
            >
              Detete
            </button>
          </div>
        );
      })}
    </div>
  );
};
