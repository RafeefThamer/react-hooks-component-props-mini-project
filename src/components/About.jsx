// About.js
import React from 'react';

function About({ image = "images/demo.png", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
