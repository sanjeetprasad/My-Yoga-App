import React from "react";
import "./YogaSequence.css";

export const YogaSequence = ({ yogaSequence }) => (
  <section className="yogaSequence">
    <p className="yogaSequence__date">{yogaSequence.date}</p>
    <h3 className="yogaSequence__title">{yogaSequence.title}</h3>
    <p className="yogaSequence__instructions">{yogaSequence.instructions}</p>
  </section>
);
