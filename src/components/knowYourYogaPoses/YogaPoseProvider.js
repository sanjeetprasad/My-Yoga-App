import React, { useState } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const YogaPoseContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const YogaPoseProvider = (props) => {
  const [yogaPoses, setYogaPoses] = useState([]);

  const getYogaPoses = () => {
    return fetch("http://localhost:8088/knowYourYogaPoses")
      .then((res) => res.json())
      .then(setYogaPoses);
  };

  const addYogaPose = (yogaPose) => {
    return fetch("http://localhost:8088/knowYourYogaPoses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(yogaPose),
    }).then(getYogaPoses);
  };


  const getYogaPoseById = (id) => yogaPoses.find((pose) => pose.id === parseInt(id));

  /*
        I return a context provider which has the
        `yogaPoses` state, the `addYogaPose` function,
        and the `getYogaPoses` function as keys. This
        allows any child elements to access them.
    */
  return (
    <YogaPoseContext.Provider
      value={{
        yogaPoses,
        addYogaPose,
        getYogaPoses,
        getYogaPoseById,
      }}
    >
      {props.children}
    </YogaPoseContext.Provider>
  );
};
