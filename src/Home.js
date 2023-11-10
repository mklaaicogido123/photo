import React from "react";
import "./styles.css";
import FadeIn from "react-fade-in";

export default function Home() {
  return (
    <FadeIn>
      <div className="homeContainer">
        <h1>Welcome to my gallery</h1>
        <h2>This is where I kept all of my photo collection.</h2>
        <img src="/Images/camera.png" alt="camera" className="homePic" />
        <a
          href="https://pngtree.com/so/cartoon-clipart"
          className="homePicDesc"
        >
          cartoon-clipart png from pngtree.com
        </a>
      </div>
    </FadeIn>
  );
}
