import React from "react";

import * as style from "../style/index.module.css";

export function ContactMe() {
  return (
    <div className={style.contactContainer} id="contactMe">
      <div className={style.contact}>
        <h1>Contact Me</h1>
        <p>215-858-3641</p>
        <p>EAHYoder@gmail.com</p>
        <p>
          <a href="github.com/EAHYoder">github.com/EAHYoder </a>
        </p>
        <p>
          <a href="linkedin.com/in/liz-yoder/ ">linkedin.com/in/liz-yoder/ </a>
        </p>
      </div>
    </div>
  );
}
