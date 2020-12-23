import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const YogaSequenceContext = React.createContext()

/*
 This component establishes what data can be used.
 */

export const YogaSequenceProvider = (props) => {
    const [yogaSequences, setYogaSequences] = useState([])

    const getYogaSequences = () => {
        return fetch("http://localhost:8088/myYogaSequences")
            .then(res => res.json())
            .then(setYogaSequences)
    }

    const addYogaSequence = yogaSequence => {
        return fetch("http://localhost:8088/myYogaSequences", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(yogaSequence)
        })
        .then((res) => res.json())
            .then(myYogaSequenceObj => {
                getYogaSequences()
                return myYogaSequenceObj
            })
    }
    const deleteSequence = knowYourMyYogaId => {
        // console.log(knowYourMyYogaId)
        return fetch(`http://localhost:8088/myYogaSequences/${knowYourMyYogaId}`, {
            method: "DELETE"
        })
            .then(getYogaSequences)
    }
    
       /*
        I return a context provider which has the
        `yogaSequences` state, the `addSequence` function,
        and the `getSequences` and deleteSequence function as keys. This
        allows any child elements to access them.
    */
    return (
        <YogaSequenceContext.Provider value={{
            yogaSequences, addYogaSequence, getYogaSequences, deleteSequence
        }}>
            {props.children}
        </YogaSequenceContext.Provider>
    )
}