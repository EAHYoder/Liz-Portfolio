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
            <span className="title">Liz Yoder </span>| Software Developer
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
            <p>I use technology to bring order to chaos.</p>
            <p>
              I spent over five years as a customer service supervisor
              surrounded by less technical folks, and that gave me a lot of fun
              opportunities to lead projects focused on increasing organization
              and efficiency.
            </p>
            <p>
              Chasing systematic improvement like that eventually led me to
              programming where I’ve been continually delighted by every chance
              I get to build something- regardless of whether I’m the sole
              developer or delivering a feature within a team.
            </p>
            <p>
              For all my projects I keep communication and documentation flowing
              so the project stays on track. In my last project we built a
              mobile app to help people improve their sleep, and I delivered the
              feature that displayed charts of the user’s sleep data. I loved
              getting to celebrate each person’s work as it was deployed.
            </p>
            <p>
              I’m excited to take a role that lets me keep building programs,
              and I can’t help but ensure any project stays organized!
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
