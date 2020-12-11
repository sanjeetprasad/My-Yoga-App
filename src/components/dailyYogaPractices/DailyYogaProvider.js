import React, { useState } from "react"

export const DailyYogaContext = React.createContext()

export const DailyYogaProvider = (props) => {
    const [dailyYogas, setDailyYogas] = useState([])

    const getDailyYogas = () => {
        return fetch("http://localhost:8088/dailyYogaPractices")
            .then(res => res.json())
            .then(setDailyYogas)
    }

    const addDailyYoga = dailyYoga => {
        return fetch("http://localhost:8088/dailyYogaPractices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dailyYoga)
        })
            .then(getDailyYogas)
    }

    // const getYogaPoseById = (id) => {
    //     return fetch(`http://localhost:8088/knowYourYogaPoses/${ id }`)

    //         .then(res => res.json())
    // }
     const getDailyYogaById = (id) => dailyYogas.find(pose => pose.id === parseInt(id))


    return (
        <DailyYogaContext.Provider value={{
            dailyYogas, addDailyYoga, getDailyYogas, getDailyYogaById
        }}>
            {props.children}
        </DailyYogaContext.Provider>
    )
}