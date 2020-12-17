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
    

    return (
        <YogaSequenceContext.Provider value={{
            yogaSequences, addYogaSequence, getYogaSequences
        }}>
            {props.children}
        </YogaSequenceContext.Provider>
    )
}