import React from "react"
import { Route } from "react-router-dom"
// import { LocationProvider } from "./location/LocationProvider"
// import { AnimalProvider } from "./animal/AnimalProvider"
// import { LocationList } from "./location/LocationList"
// import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = (props) => {
    return (
        <>
           
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    {/* <KnowYourYogaPoseList /> */}
                </Route>
       

         
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/daily-yoga">
                    {/* <DailyYogaPracticeList /> */}
                </Route>

                <Route path="/therapeutic-yoga">
                    {/* <TherapeuticYogaPracticeList /> */}
                </Route>

                <Route path="/yoga-sequence">
                    {/* <MyYogaSequenceList /> */}
                </Route>

                <Route path="/yoga-dashboard">
                    {/* <MyYogaDashboard /> */}
                </Route>
            
        </>
    )
}