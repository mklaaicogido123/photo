import React from "react";
import "./styles.css";
import FadeIn from "react-fade-in";

export default function Home() {
  return (
    <FadeIn>
      <div className="homeContainer">
        <h1>Welcome</h1>
        <h2>This is where I kept all of my photo collection.</h2>
        <img src="/Images/camera.png" alt="camera" className="homePic" />
      </div>
    </FadeIn>
  );
}
