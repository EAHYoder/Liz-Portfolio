import React from "react";
import * as style from "../style/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { TechStack } from "../components/TechStack";
import { projects, Project } from "../components/Project";
import { ContactMe } from "../components/ContactMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function IndexPage() {
  return (
    <div>
      <nav>
        <div>
          <p>
            <span className="title">Liz Yoder </span>| Software Engineer
          </p>
        </div>
        <ul>
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contactMe">Contact Me</a>
          </li>
        </ul>
      </nav>
      <header>
        <div className={style.container} id="about">
          <h1>About Me</h1>
          <div className={style.about}>
            <p>
              Before my recent career switch I had been a supervisor with 5+
              years of experience in healthcare customer service, and my work
              involved a lot of project management
            </p>
            <p>
              I decided to pivot into software engineering after I got the
              opportunity to design, build, and implement a feedback tracker
              intranet site for my department. It made me realize how creative
              and satisfying technical work is, and it showed me that I have an
              aptitude for it.
            </p>
            <p>
              My strengths include attention to detail, follow through, and
              public speaking. I enjoy organizing information as a way of
              simplifying work. I can do this when leading a group or as a
              member of a team.
            </p>
            <p>
              I’m excited to combine this experience with the formal training
              I’ve received at Fullstack Academy’s software engineering bootcamp
              to find a role where I can solve technical problems and build
              tools to help people.
            </p>
          </div>
          <div className={style.aboutpic}>
            <StaticImage
              src="../images/profile-closer.jpg"
              alt="Liz Profile Image"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "125px",
                margin: "15px",
              }}
            />
          </div>
        </div>
      </header>
      <div className={style.projects} id="projects">
        <h1>Projects</h1>
        <div className={style.project}>
          <div className={style.individual}>
            <StaticImage
              src="../images/bed.png"
              alt="Zease Project"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <div className={style.icon}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
          <Project project={projects[0]} />
        </div>
        <div className={style.project}>
          <div className={style.individual}>
            <StaticImage
              src="../images/fox-icon.png"
              alt="fox in the forest project"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <div className={style.icon}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
          <Project project={projects[1]} />
        </div>
        <div className={style.project}>
          <div className={style.individual}>
            <StaticImage
              src="../images/feedback-icon.png"
              alt="feedback tracker project"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <div className={style.icon}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
          <Project project={projects[2]} />
        </div>
      </div>
      <TechStack />
      <ContactMe />
      <div className={style.techStack}>
        <h3>Hobbies</h3>
        <div className={style.hobbies}>
          <div className={style.hobby}>
            <StaticImage
              src="../images/hobbies/performing-arts.png"
              alt="theater"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <p> Theater </p>
          </div>
          <div className={style.hobby}>
            <StaticImage
              src="../images/hobbies/musical-note.png"
              alt="singing"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <p> Singing </p>
          </div>
          <div className={style.hobby}>
            <StaticImage
              src="../images/hobbies/game-die.png"
              alt="board games"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <p> Board Games </p>
          </div>
          <div className={style.hobby}>
            <StaticImage
              src="../images/hobbies/sewer.png"
              alt="sewing"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <p> Simple Sewing </p>
          </div>
        </div>
      </div>
    </div>
  );
}
