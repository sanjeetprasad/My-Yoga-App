import React, { useState } from "react"

export const KnowYourMyYogaContext = React.createContext()


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

 


    return (
        <KnowYourMyYogaContext.Provider value={{
            knowYourMyYogas, addKnowYourMyYoga, getKnowYourMyYogas 
        }}>
            {props.children}
        </KnowYourMyYogaContext.Provider>
    )
}