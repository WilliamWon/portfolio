import React from "react";
import styled from "styled-components";

const AboutMain = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  /* background: teal; */
  padding: 50px;
  display: flex;
`;
const LabelContainer = styled.div`
  width: 40%;
  height: 100%;
  box-sizing: border-box;
  padding: 6.5vh 0 10vh 0;
  display: flex;
  justify-content: flex-start;
  /* background: skyblue; */
  &.rightSide {
    /* background: pink; */
    align-items: flex-start;
    text-align: left;
    width: 60%;
    flex-direction: column;
  }
`;
const AboutLabel = styled.div`
  font-size: 5em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  color: #262626;
  text-align: right;
`;
const AboutMeMid = styled.p`
  width: 40vw;
  font-size: 1.7em;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  color: black;
`;
const AboutMe = styled.p`
  width: 40vw;
  font-size: 1.2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  line-height: 30px;
  color: black;
`;
const About = () => {
  return (
    <AboutMain>
      <LabelContainer>
        <AboutLabel>ABOUT ME</AboutLabel>
      </LabelContainer>
      <LabelContainer className="rightSide">
        <AboutMeMid>
          Full stack web developer, designer and semi-amateur ping pong
          champion.
        </AboutMeMid>
        <AboutMe>
          Hello, my name is William Won, a graduate of DevMountain Web Immersive
          and I have studied at the University of Texas at Arlington for Visual
          Communications. Before jumping into the world of code, I was a sushi
          chef for 6 years while studying graphic design part-time. However my
          interest drifted towards coding while learning web design and the rest
          is history.
        </AboutMe>
        <AboutMe>
          I am obsessed with Lord of the Rings, ping pong, anything pop culture
          and eating for pleasure.
        </AboutMe>
      </LabelContainer>
    </AboutMain>
  );
};

export default About;
