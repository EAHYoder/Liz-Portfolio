import React from "react";

import * as style from "../style/index.module.css";

export const projects = [
  {
    title: "Fox in the Forest",
    role: "Sole Developer",
    dates: "December 2021 - January 2022",
    description:
      "A two player card playing board game where the team mates cooperatively move the fox through the forest to collect all them gems, taking care not to stray from the path too often.  This is a web browser version of the game with custom animations.",
    features: [
      "Setup authentication via username and password so players can see their own information but not their teammates.",
      "Leveraged Socket.io to allow players to see the results of one another’s actions.",
      "Animated game play interactions and demonstrations of how to play with Anime.js library.",
    ],
    youtube: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/A4F8Tmr3BjM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    github: "https://github.com/EAHYoder/fox-in-the-forest",
    link: "https://fox-in-the-forest-game.herokuapp.com/",
  },
  {
    title: "Homecare Feedback Tracker",
    role: "Designer and Sole Developer",
    dates: "June 2020 - January 2021",
    description:
      "An intranet tool to document and track customer feedback, pass it along to other departments as needed, display trends, and identify opportunities for improvement. Enabled over $10k in annual operational savings and avoided $50k in development fees.",
    features: [
      "Developed with InfoPath and deployed on SharePoint.",
      " Designed and built dynamic feedback form increasing user input accuracy and efficiency, making the data output more reliable and valuable.",
      "Created customized data views making the content useful to team members in different roles and departments.",
    ],

    youtube: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TQaPApzVtKM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
];

export function Project(props) {
  const { title, role, dates, description, features, youtube, github, link } =
    props.project;
  return (
    <div className={style.projectDetails}>
      <div>
        <h3> {title} </h3>
        {github || link ? (
          <h4>
            {github ? <a href={github}>Github repository</a> : <p></p>} |{" "}
            {link ? <a href={link}>View Project Website</a> : <p></p>}
          </h4>
        ) : (
          <p></p>
        )}

        <h4>{role}</h4>
        <h5>
          {" "}
          <em>{dates} </em>
        </h5>
        <p>{description}</p>
        <ul>
          {features.map((feature, i) => {
            return <li key={i}> {feature} </li>;
          })}
        </ul>
      </div>
      <div className={style.projectVid}>{youtube}</div>
    </div>
  );
}
