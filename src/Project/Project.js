import React from 'react';
import { Component } from 'react';
import './Project.css';

class Project extends Component {

    createLinks() {
        var links = [];
        for (var i = 0; i < this.props.links.length; ++i) {
            links.push(
                <li>
                    <a href={this.props.links[i].link} target="_blank" >{this.props.links[i].name}</a>
                </li>
            )
        }
        return links;
    }

    render() {
        return (
            <div className="container project">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <img src={this.props.image} className="card-img-top" />
                            <div className="card-body text-center">
                                {this.props.repolink && this.props.repolink.length > 0 && <a href={this.props.repolink} className="btn btn-primary" target="_blank">View
                                        Repo</a>}
                            </div>
                        </div>
                    </div>
                    <div className="side-margin col-lg-8 col-sm-12">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                        <p>{this.props.tools}</p>
                        {this.props.links && <ul>{this.createLinks()}</ul>}
                    </div>
                </div>
            </div>
        );
    }
}
export default Project;