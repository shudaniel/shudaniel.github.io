import React from 'react';
import { Component } from 'react';

class Project extends Component {

    render() {
        return (
            <div className="container project">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <img src={this.props.image} className="card-img-top" />
                            <div className="card-body text-center">
                                <a href={this.props.repolink} className="btn btn-primary" target="_blank">View
                                        Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="side-margin col-lg-8 col-sm-12">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                        <p>{this.props.tools}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Project;