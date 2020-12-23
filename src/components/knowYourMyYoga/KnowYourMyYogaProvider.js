// useState() it is used to store data about the component.
import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const KnowYourMyYogaContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const KnowYourMyYogaProvider = (props) => {
    const [knowYourMyYogas, setKnowYourMyYogas] = useState([])

    const getKnowYourMyYogas = () => {
        return fetch("http://localhost:8088/knowYourMyYogas")
            .then(res => res.json())
            .then(setKnowYourMyYogas)
    }

    const addKnowYourMyYoga = knowYourMyYoga => {
        return fetch("http://localhost:8088/knowYourMyYogas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(knowYourMyYoga)
        })
        .then((res) => res.json())
        
      
    }

 
 /*
        I return a context provider which has the
        `knowYourMyYogas` state, the `addKnowYourMyYoga` function,
        and the `getKnowYourMyYogas` function as keys. This
        allows any child elements to access them.
    */

    return (
        <KnowYourMyYogaContext.Provider value={{
            knowYourMyYogas, addKnowYourMyYoga, getKnowYourMyYogas 
        }}>
            {props.children}
        </KnowYourMyYogaContext.Provider>
    )
}