import React, { Component } from "react";
import styled from "styled-components";
import QodeHome from "./QodeHome.png";
import QodeLogin from "./QodeLogin.png";
import QodeRegister from "./QodeRegister.png";
import VentHome from "./VentHome.png";
import VentChat from "./VentChat.png";
import VentScroll from "./VentScroll.png";

const ProjectContainer = styled.div`
  width: 100%;
  height: auto;
  background: black;
  display: flex;
  box-sizing: border-box;
`;
const LabelContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 10vh 50px 2vh 50px;
  display: flex;
  justify-content: flex-start;
`;
const ProjectsLabel = styled.div`
  font-size: 5em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
`;
const ProjectLeft = styled.div`
  width: 38%;
  height: auto;
  background: black;
  display: flex;
  flex-direction: column;
`;
const ProjectDescription = styled.div`
  width: auto;
  height: auto;
  padding: 0 50px 0 50px;
`;
const ProjectSummary = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  color: white;
  text-align: left;
`;
const TechUsed = styled.div`
  font-size: 0.7em;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  color: white;
  text-align: left;
  margin-bottom: 20px;
`;
const BulletPoints = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  color: white;
  text-align: left;
  &.push {
    margin-bottom: 947px;
  }
`;
//Right side
const ProjectRight = styled.div`
  width: 62%;
  height: auto;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.hey {
    padding-bottom: 100px;
  }
`;
const ProjectBox = styled.div`
  width: 80%;
  height: auto;
  /* background: skyblue; */
  box-sizing: border-box;
  margin-top: 13vh;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const ProjectTitle = styled.div`
  width: auto;
  height: auto;
  font-size: 1.7em;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  margin-bottom: 20px;
  color: black;
`;
const ProjectSubtitle = styled.div`
  width: auto;
  height: auto;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
`;
const ProjectImage = styled.img`
  height: auto;
  width: 50vw;
  margin-top: 40px;
  box-shadow: 0 2px 50px #abaeb2;
`;

class Projects extends Component {
  render() {
    return (
      <ProjectContainer>
        <ProjectLeft>
          <LabelContainer>
            <ProjectsLabel>PROJECTS</ProjectsLabel>
          </LabelContainer>
          <ProjectDescription>
            <ProjectSummary>
              A hub application that lets the users leave comments and reviews
              on establishments and locations all over the world.
            </ProjectSummary>
            <TechUsed>
              Javascript | React | Node | Express | PostgresSQL | Massive |
              Redux React-Router | Google Places API | Auth0
            </TechUsed>
            <BulletPoints className="push">
              Using Redux, Vent.fun stores your data and hits the Google Places
              API through the server and returns a list of suggestions around
              the user’s living location. <br />
              <br /> Many integrated search queries as specific as an address or
              as vague as “bars in Dallas, Tx.” (Google Places API) <br />
              <br />Exciting future advances such as web sockets for real-time
              chatting, location-based event posting and more limitless
              possibilities.
            </BulletPoints>
          </ProjectDescription>
          <ProjectDescription>
            <ProjectSummary>
              An educational application that walks the user through the basics
              of HTML and CSS with quizzes and activities with a live text
              editor.
            </ProjectSummary>
            <TechUsed>
              Javascript | React | Node | Express | PostgresSQL | Massive |
              Redux React-Router | Bcrypt | RESTful APIs | Styled Components
            </TechUsed>
            <BulletPoints>
              Designed a clean user interface for optimal navigation and ease.<br />
              <br />
              Manipulated styled components and higher-order components for
              reusable assets throughout the app.
            </BulletPoints>
          </ProjectDescription>
        </ProjectLeft>
        <ProjectRight className="hey">
          <ProjectBox>
            <TitleContainer>
              <ProjectTitle>Vent</ProjectTitle>
              <a href="http://vent.fun/">
                <ProjectSubtitle>vent.fun/</ProjectSubtitle>
              </a>
              <ProjectImage src={VentHome} />
              <ProjectImage src={VentScroll} />
              <ProjectImage src={VentChat} />
            </TitleContainer>
          </ProjectBox>
          <ProjectBox>
            <TitleContainer>
              <ProjectTitle>Qode</ProjectTitle>
              <a href="http://qode.club/">
                <ProjectSubtitle>qode.club/</ProjectSubtitle>
              </a>
              <ProjectImage src={QodeHome} />
              <ProjectImage src={QodeLogin} />
              <ProjectImage src={QodeRegister} />
            </TitleContainer>
          </ProjectBox>
        </ProjectRight>
      </ProjectContainer>
    );
  }
}

export default Projects;
