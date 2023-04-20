import React from "react";


function About({logo="https://via.placeholder.com/215",about}) {

  return (
    <aside>
    <img src={logo} alt="blog logo"></img>
    <p>{about}</p>
    </aside>
     
  );
}

export default About;