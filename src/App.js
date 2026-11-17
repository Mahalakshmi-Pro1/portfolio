
import React from 'react';
import './App.css';


import Project from './components/Projects';

function App() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Bootstrap',
    'Node.js',
    'Express.js',
    'MongoDB',
    'GitHub',
    'REST API'
  ];

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">

          <a className="navbar-brand" href="#home">
            Maha<span>folio.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarMenu"
          >
            <ul className="navbar-nav ms-auto">

              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                (item) => (
                  <li className="nav-item" key={item}>
                    <a
                      className="nav-link"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}

            </ul>
          </div>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <p className="welcome-text">
                WELCOME TO MY PORTFOLIO
              </p>

              <h1>
                Hi, I'm <span>Mahalakshmi</span>
              </h1>

              <h2>Junior Web Developer</h2>

              <p className="hero-description">
                I am passionate about building responsive
                and user-friendly web applications using
                HTML, CSS, JavaScript, React.js and MERN
                Stack technologies.
              </p>

              <div className="hero-buttons">

                <a href="#projects" className="btn primary-btn">
                  View My Projects
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="btn outline-btn"
                >
                  Download Resume
                </a>

              </div>

              <div className="social-links">

                <a
                  href="https://github.com/Mahalakshmi-Pro1"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a href="#contact">
                  Contact Me
                </a>

              </div>

            </div>

            <div className="col-lg-4 text-center">

              <div className="profile-circle">
                <span>M</span>
              </div>

              <p className="profile-caption">
                MERN Stack Developer
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding">

        <div className="container">

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <div className="about-card">

            <p>
              I am a passionate Junior Web Developer with
              knowledge of HTML, CSS, JavaScript, React.js
              and MERN Stack development.
            </p>

            <p>
              I have developed several projects including
              E-Commerce websites, Booksky App, Expense
              Tracker and MiniERP Management System.
            </p>

            <p>
              I have previous professional experience in
              the E-Publishing industry from 2018 to 2022,
              working with XML, quality checking and
              book formatting.
            </p>

            <div className="row mt-4">

              <div className="col-md-6">

                <h5>Education</h5>

                <p>B.Sc. Computer Science</p>

                <p>PG Diploma in Computer Application</p>

              </div>

              <div className="col-md-6">

                <h5>Career Objective</h5>

                <p>
                  Seeking a full-time Junior Web Developer
                  position where I can apply my technical
                  skills and continue learning new
                  technologies.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section-padding skills-section">

        <div className="container">

          <h2 className="section-title">
            My <span>Skills</span>
          </h2>

          <p className="section-subtitle">
            Technologies and tools I have worked with.
          </p>

          <div className="row g-3">

            {skills.map((skill, index) => (

              <div className="col-6 col-md-4 col-lg-3" key={index}>

                <div className="skill-card">
                  <span>{skill}</span>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECT SECTION - CHILD COMPONENT */}
      <Project />

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding contact-section">

        <div className="container text-center">

          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>

          <p className="contact-description">
            I am looking for opportunities as a Junior Web Developer.
            Feel free to connect with me.
          </p>

          <a
  href="mailto:mahalakshmi.pro1@gmail.com?subject=Job%20Opportunity"
  className="btn primary-btn">
            Send Me an Email
          </a>

          <div className="contact-links">

            <a
              href="https://github.com/Mahalakshmi-Pro1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mahalakshmi-s-webdeveloper"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Mahalakshmi. All Rights Reserved.
        </p>

        <p>
          Designed and Developed using React.js
        </p>

      </footer>

    </div>
  );
}

export default App;
