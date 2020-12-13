import React, { useState } from "react"

export const TherapeuticYogaContext = React.createContext()

export const TherapeuticYogaProvider = (props) => {
    const [therapeuticYogas, setTherapeuticYogas] = useState([])

    const getTherapeuticYogas = () => {
        return fetch("http://localhost:8088/therapeuticYogaPractices")
            .then(res => res.json())
            .then(setTherapeuticYogas)
    }

    const addTherapeuticYoga = therapeuticYoga => {
        return fetch("http://localhost:8088/therapeuticYogaPractices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(therapeuticYoga)
        })
            .then(getTherapeuticYogas)
    }

    // const getYogaPoseById = (id) => {
    //     return fetch(`http://localhost:8088/knowYourYogaPoses/${ id }`)

    //         .then(res => res.json())
    // }
     const getTherapeuticYogaById = (id) => therapeuticYogas.find(pose => pose.id === parseInt(id))


    return (
        <TherapeuticYogaContext.Provider value={{
            therapeuticYogas, addTherapeuticYoga, getTherapeuticYogas, getTherapeuticYogaById
        }}>
            {props.children}
        </TherapeuticYogaContext.Provider>
    )
}