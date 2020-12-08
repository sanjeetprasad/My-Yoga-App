import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Know Your Yoga Pose</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/daily-yoga">Daily Yoga</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/therapeutic-yoga">Therapeutic Yoga</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/yoga-sequence">My Yoga Sequence</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/yoga-dashboard">My Yoga Dashboard</Link>
            </li>
        </ul>
    )
}