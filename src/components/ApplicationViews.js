import React from "react"
import { Route } from "react-router-dom"
import {YogaPoseProvider} from "./knowYourYogaPoses/YogaPoseProvider"
import {YogaPoseList} from "./knowYourYogaPoses/YogaPoseList"
import {YogaPoseDetails} from "./knowYourYogaPoses/YogaPoseDetail"
import { YogaSequenceList } from "./myYogaSequences/YogaSequenceList"
import {YogaSequenceProvider} from "./myYogaSequences/YogaSequenceProvider"
import {YogaSequenceForm} from "./myYogaSequences/YogaSequenceForm"


export const ApplicationViews = (props) => {
    return (
        <> 
               
                
               <YogaPoseProvider>
                 <Route exact path="/">
                    <YogaPoseList />
                 </Route>
                 <Route path="/yogaPoses/:yogaPoseId(\d+)" render={
                      props => {
                // console.log("props", props)
                return <YogaPoseDetails {...props} />
                    }
                           } />
                </YogaPoseProvider>

         
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/daily-yoga">
                    {/* <DailyYogaPracticeList /> */}
                </Route>

                <Route path="/therapeutic-yoga">
                    {/* <TherapeuticYogaPracticeList /> */}
                </Route>
            <YogaPoseProvider>
                <YogaSequenceProvider>
                    <Route path="/yoga-sequence">
                         <YogaSequenceList {...props} />
                     </Route>
                      <Route path="/yoga-sequence/create" render={
                          props => <YogaSequenceForm {...props} />
                              } />
                </YogaSequenceProvider>
            </YogaPoseProvider>
                
          
         

                <Route path="/yoga-dashboard">
                    {/* <MyYogaDashboard /> */}
                </Route>
            
        </>
    )
}