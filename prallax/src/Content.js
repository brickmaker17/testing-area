import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands'
import ScrollAnimation from 'react-animate-on-scroll';
import Me from './images/me.JPG';
import "animate.css/animate.min.css";
import './App.css';


const Content = () => {
    return (
        <div className="main">
            <div className="aboutMe">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <h1>About Me</h1>
                    <p>I am a VSchool Graduate who learned the Mern Stack. While in school I have expanded my learning and studied Styled-Components. My passion for Web Development comes from the challenge and reward that it brings when you are able to overcome the problems that are presented.</p>
                    <img className="aboutImage" src={Me} alt="" />
                    <a href=""><FontAwesomeIcon icon={["fab", "linkedin"] } /></a>
                    <a href="https://github.com/brickmaker17"><FontAwesomeIcon icon={["fab", "github"] } /></a>
                </ScrollAnimation>
            </div>
        </div>
    )

}

export default Content;