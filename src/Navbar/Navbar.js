import React from 'react';
import { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Daniel Shu</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#about_me">About Me</a>
                            <a className="nav-item nav-link" href="#projects">Projects</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;