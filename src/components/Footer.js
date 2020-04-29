import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footerParent">
                <div className="footer-child">
                    <div className='footer-titles-parent'>
                        <h3>Receive our Quarterly Reports</h3>
                    </div>
                    <div className="footer-newsletter-elements">
                        <input className="footer-input" type="text" placeholder="email"></input>
                        <button className="footer-button" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}