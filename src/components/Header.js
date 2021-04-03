import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hey, I am Erik </h1>
                <Typed
                className="typed-info"
                strings={["SQL", "Javascript", "Typescript", "React", "React-Native", "C#", "ASP-NET", "Python", "Git", "MongoDB"]}
                loop
                typeSpeed={30}
                backSpeed={50}
                />
                <a href="#" className="btn-main-offer">Contact me</a> 
            </div>
        </div>
    )
}

export default Header
