import React from "react";
import "./styles.css";
import FadeIn from "react-fade-in";

export default function About() {
  return (
    <FadeIn>
      <div className="homeContainer">
        <h1 className="homeTitle">About Me!</h1>
      </div>
    </FadeIn>
  );
}
