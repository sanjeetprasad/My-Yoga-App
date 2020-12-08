import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import './MyYogaApp.css'

export const MyYogaApp = () => (
   
  <>
  <h1>Welcome to My Yoga App</h1>
  <Route render={ () => { 
     if (localStorage.getItem("app_user_id")) {
         return (
             <>
               <Route render={props => <NavBar {...props} />} />
               <Route render={props => <ApplicationViews {...props} />} />
              </>
         )
     } else {
         return <Redirect to="/login" />
     }
  }} />
  
  <Route path="/login" render={props => <Login {...props} />} />
  <Route path="/register" render={props => <Register {...props} />} />
  
  </>  
)
