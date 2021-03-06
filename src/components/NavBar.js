import React from 'react'
import Peruslogo from "../Peruslogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

        <a className="navbar-brand" href="#"><img className="peruslogo" src={Peruslogo} alt="Logo..." /> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faEnvelopeOpen} style={{color: "#F0E68C"}} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Some stuff</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact me</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}

export default NavBar
