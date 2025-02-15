import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const CVShowcase = () => {
  const showHobbies = () => {
    alert("Hobbies: Music, Coding, Sports");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            My CV
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="p-5 text-center bg-light">
        <h2>Welcome!</h2>
        <p>Hello, I'm Juan Miguel G Castelltort</p>
      </section>

      <section id="about" className="p-5 bg-white">
        <div className="container">
          <h2>About Me</h2>
          <div className="row">
            <div className="col-md-4">
              <h3>Education</h3>
              <ul>
                <li>Elementary: Heavenstar Learning School</li>
                <li>High School: Panorama Montessori School</li>
                <li>Senior High School: Panorama Montessori School</li>
                <li>College: Lyceum Of Alabang</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>School Activities</h3>
              <ul>
                <li>Supreme Student Council</li>
                <li>Sports Varsity</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Skills</h3>
              <ul>
                <li>Leadership and Teamwork</li>
                <li>Research and Analysis</li>
                <li>Good listener</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="p-5 bg-light">
        <div className="container">
          <h2>Contact Me</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={showHobbies}
            >
              Show Hobbies
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2025 Juan Miguel G Castelltort. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default CVShowcase;
