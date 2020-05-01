import React, { Component } from 'react'
import AI_HR from '../images/AI_HR.jpg'


export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
        
                <img className="homeImg" src={AI_HR} alt="hands" />
                <p className="homeIntro"> As Artificial Intelligence(A.I) becomes more apart of our
                     everyday life, new rules and regulations need to be discussed". 
                     This report highlights very important Key Topics, on ensuring 
                     human rights are being held to high standards and values; as we continue
                     to evolve with A.I. </p>
                <div className="homeList">
                    <h3>What to expect:</h3>
                    <ul>
                        <li>Is AI A Threat?</li>
                        <li>AI Risks</li>
                        <li>Bridging AI and Human Rights</li>
                    </ul>
                </div>
            </div>
            
        )
    }
}
