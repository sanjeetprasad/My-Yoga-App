import React from "react";


export const YogaSequenceDetails = () => {


         
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
