import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="content">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="Images/landscape-profile.jpg" className="d-block w-100" />
              </div>
            </div>
            </div>
            <div id="about_me" className="subsection">
              <h1 className="section_title">About Me</h1>
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  <p>I am a fourth year computer science major at UCSB. I have industry experiences in web development and GUI design, and I'm always looking to try new things. Challenge drives me to work harder, and greater difficulties lead to greater satisfaction at overcoming them.</p>
                  <p>I am interested in distributed systems and computer networking, but I am open to any subject and always want to learn more. I have completed three internships at two different companies and am currently a part of a research lab on campus. I plan to graduate from UCSB with both a bachelor's and a master's degree in 2021.</p>
                  <p>Outside of computer science, I love to inline skate and go to the beach. The outdoors are so beautiful, and I always want to travel and explore new areas.</p>
                </div>
                <img className="col-lg-3 col-md-12 card-pic" src="Images/portrait-profile.jpg" />
              </div>

            </div>

            <div id="projects" className="subsection">
              <h1 className="section_title">Projects</h1>

              <div className="container project">
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="card">
                      <img src="Images/reddit.png" className="card-img-top" />
                      <div className="card-body text-center">
                        <a href="https://github.com/meredithxu/reddit_place_project" className="btn btn-primary" target="_blank">View
                                        Repo</a>
                      </div>
                    </div>
                  </div>
                  <div className="side-margin col-lg-8 col-sm-12">
                    <h4>Reddit r/place Research</h4>
                    <p>Reddit's r/place social experiment took place on April Fools' Day 2017 where users collaborated to draw artworks. I worked in Dr. Ambuj Singh's lab to apply machine learning models and computer vision techinques to segment images and understand online users' collective
                            behavior</p>

                    <p>Developed using python.</p>
                  </div>
                </div>
              </div>

              <div className="container project">
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="card">
                      <img src="Images/anacapa-screenshot.jpg" className="card-img-top" />
                      <div className="card-body text-center">
                        <a href="https://github.com/project-anacapa/anacapa-github-linker" className="btn btn-primary"
                          target="_blank">View
                                        Repo</a>
                      </div>
                    </div>
                  </div>
                  <div className="side-margin col-lg-8 col-sm-12">
                    <h4>Anacapa GitHub Linker</h4>
                    <p>This tool automates the process of adding students to Github organizations and managing classes for UCSB
                        Computer Science
                                department faculty.</p>
                    <p>The project was built using Ruby on Rails.</p>
                </div>
              </div>
            </div>


            <div className="container project">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="card">
                    <img src="Images/hyperloop-screenshot.png" className="card-img-top" />
                    <div className="card-body text-center">
                      <a href="https://github.com/shudaniel/ucsbhyperloopjswebsite" className="btn btn-primary" target="_blank">View
                                        Repo</a>
                    </div>
                  </div>
                </div>
                <div className="side-margin col-lg-8 col-sm-12">
                  <h4>UCSB Hyperloop Website</h4>
                  <p>I developed the front-end of the UCSB Hyperloop website to provide information about the team and attract potential sponsors.</p>
                  <p>The project was built using React.js. </p>
              </div>
            </div>
          </div>

          <div className="container project">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="card">
                  <img src="Images/timelines-screenshot.png" className="card-img-top" />
                  <div className="card-body text-center">
                    <a href="https://github.com/shudaniel/timelines" className="btn btn-primary" target="_blank">View
                                        Repo</a>
                  </div>
                </div>
              </div>
              <div className="side-margin col-lg-8 col-sm-12">
                <h4>Timelines</h4>
                <p>This tool automatically creates news timelines for any topic to give users context around a certain situation. The user is prompted for a topic and the tool will fetch related articles using News API and display them in chronological order.</p>
                <p>Deployed with heroku and can be found here:<a href="https://timelines-cs48.herokuapp.com/" target="_blank"> https://timelines-cs48.herokuapp.com/</a></p>
                <p>Built using Spring-Boot and written in Java and Javascript.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <a className="btn btn-primary" href="https://github.com/shudaniel/shudaniel.github.io" target="_blank">I also made this website. Click here to view the repo.</a>
        </div>

        <div id="contact" className="subsection">
          <h1 className="section_title">Contact Me</h1>
          <p>Email: danielshu98@gmail.com</p>
          <p>Resume available upon request.</p>
          <p><a href="https://github.com/shudaniel" target="_blank">Github: shudaniel</a></p>
          <p><a href="https://www.linkedin.com/in/daniel-shu-29289414a/" target="_blank"> LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
