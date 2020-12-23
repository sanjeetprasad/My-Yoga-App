import React, { useContext } from "react";
import Moment from "react-moment";
import "./KnowYourMyYoga.css";

export const KnowYourMyYoga = ({ knowYourMyYoga, yogaPoses }) => {
 

  return (
    <>
      <section className="yogaPoseObj">
        <h3 className="currentDate">
          Date:
          <Moment format=" MM/DD/YYYY">{knowYourMyYoga.currentDate}</Moment>
        </h3>

        <h3 className="title">Title: {knowYourMyYoga.title}</h3>
        <p className="timeLimit">Time Limit: {knowYourMyYoga.dailyYoga}</p>
        <p className="selectedPose">
          Selected Pose: {knowYourMyYoga.dailyYogaPracticeId}
        </p>
        <h3>Selected Pose:</h3>
        {yogaPoses.map((pose) => (
          <p key={pose.id}> {pose.english_name}</p>
        ))}
        <p className="instruction">Instruction: {knowYourMyYoga.instruction}</p>
      </section>
    </>
  );
};
