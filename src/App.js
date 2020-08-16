import React from 'react';
import Project from './Project/Project'
import Navbar from './Navbar/Navbar'
import Bottombar from './Bottombar/Bottombar'

import landscape from './Images/landscape-profile.jpg'
import portrait from './Images/portrait-profile.jpg'
import anacapa from './Images/anacapa-screenshot.jpg'
import hyperloop from './Images/hyperloop-screenshot.png'
import reddit from './Images/reddit.png'
import timelines from './Images/timelines-screenshot.png'
import personalsite from './Images/personalwebsite-screenshot.png'
import spacemonitor from './Images/spacemonitor-screenshot.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="content">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={landscape} className="d-block w-100" />
              </div>
            </div>
            </div>
            <div id="about_me" className="subsection">
              <h1 className="section-title">About Me</h1>
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  <p>I am a fifth year BS/MS computer science major at the University of California, Santa Barbara (UCSB). I have industry experiences in web development and GUI design, and I'm always looking to try new things. Challenge drives me to work harder, and greater difficulties lead to greater satisfaction at overcoming them.</p>
                  <p>I am interested in distributed systems and computer networking, particularly doing work with blockchain.  I also enjoy and have industry experience in fullstack development. I have completed four internships, one for each past summer since 2016. I plan to graduate from UCSB with both a bachelor's and a master's degree in June 2021.</p>
                  <p>Outside of computer science, I love to inline skate and go to the beach. The outdoors are so beautiful, and I always want to travel and explore new areas.</p>
                </div>
                <img className="col-lg-3 col-md-12 card-pic" src={portrait} />
              </div>

            </div>

            <div id="projects" className="subsection">
              <h1 className="section-title">Projects</h1>
              <Project 
                image={spacemonitor}
                repolink="https://github.com/powwow-capstone/spacemonitor"
                title="Senior Capstone Project with PowWow Energy"
                description="Partnered with PowWow energy to create an application for the agricultural industry that estimates water usage. 
                            Farmers and resource conservation districts can use our app to improve water efficiency and benefit the environment. 
                            The satellite data we use is relatively new and my team is one of the first to create an application with it."
                tools="Our team won 3rd place out of ten teams in the UCSB Capstone competition."
              />
              <Project 
                image={reddit}
                repolink="https://github.com/meredithxu/reddit_place_project"
                title="Reddit r/place Research"
                description="Reddit's r/place social experiment took place on April Fools' Day 2017 where users collaborated to draw artworks. I worked in Dr. Ambuj Singh's lab to apply machine learning models and computer vision techinques to segment images and understand online users' collective
                            behavior"
                tools="Developed using python."
              />
              <Project 
                image={anacapa}
                repolink="https://github.com/project-anacapa/anacapa-github-linker"
                title="Anacapa GitHub Linker"
                description="This tool automates the process of adding students to Github organizations and managing classes for UCSB 
                            Computer Science department faculty."
                tools="The project was built using Ruby on Rails."
              />
              <Project 
                image={hyperloop} 
                repolink="https://github.com/shudaniel/ucsbhyperloopjswebsite"
                title="UCSB Hyperloop Website"
                description="I developed the front-end of the UCSB Hyperloop website to provide information about the team and attract potential sponsors."
                tools="The project was built using React.js."
              />
              <Project 
                image={timelines} 
                repolink="https://github.com/shudaniel/timelines"
                title="Timelines"
                description="This tool automatically creates news timelines for any topic to give users context around a certain situation. The user is prompted for a topic and the tool will fetch related articles using News API and display them in chronological order."
                tools="Built using Spring-Boot and written in Java and Javascript."
              />
              <Project 
                image={personalsite}
                repolink="https://github.com/shudaniel/shudaniel.github.io"
                title="Personal Website"
                description="I created this personal website using React to show my projects and teach people more about me"
                tools=""
              />

        </div>
        <Bottombar />
      </div>
    </div>
  );
}

export default App;
