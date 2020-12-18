import React, { useState } from "react"

export const YogaSequenceContext = React.createContext()


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
    

    return (
        <YogaSequenceContext.Provider value={{
            yogaSequences, addYogaSequence, getYogaSequences, deleteSequence
        }}>
            {props.children}
        </YogaSequenceContext.Provider>
    )
}