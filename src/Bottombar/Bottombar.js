import React from 'react';
import { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import "./Bottombar.css"

class Bottombar extends Component {

    render() {
        return (
            <div className="bottombar">
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="danielshu98@gmail.com" icon={<EmailIcon />} />
                    <BottomNavigationAction label="Github: shudaniel" href="https://github.com/shudaniel" target="_blank" icon={<GitHubIcon />} />
                    <BottomNavigationAction label="LinkedIn" href="https://www.linkedin.com/in/daniel-shu-29289414a/" target="_blank" icon={<LinkedInIcon />} />
                </BottomNavigation>
            {/* // <div id="contact" className="subsection">
            //     <h1 className="section-title">Contact Me</h1>
            //     <p>Email: danielshu98@gmail.com</p>
            //     <p>Resume available upon request.</p>
            //     <p><a href="https://github.com/shudaniel" target="_blank">Github: shudaniel</a></p>
            //     <p><a href="https://www.linkedin.com/in/daniel-shu-29289414a/" target="_blank"> LinkedIn</a></p>
            // </div> */}
            </div>
        );
    }
}

export default Bottombar;