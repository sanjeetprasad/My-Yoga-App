import React from "react"
import { Link } from "react-router-dom"
import  Button  from 'react-bootstrap/Button'
import "./NavBar.css"
import Logo from "./logo.png"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <div className="logo">
            <img src={Logo} width="150" height="150" alt="logo" />
            </div>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Know Your Yoga Pose</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/daily-yoga">Daily Yoga</Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/yoga-sequence">My Yoga Sequence</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/yoga-dashboard">My Yoga Dashboard</Link>
            </li>
            <div >
                <Button className="btn_out" onClick={() => {
                    localStorage.clear();
                    props.history.push("/login")
                }}>
                   Logout 
                </Button>
            </div>
        </ul>
    )
}

