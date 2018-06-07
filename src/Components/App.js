import React, { Component } from "react";
import "./App.css";
import routes from "../routes";
import { Link } from "react-router-dom";
import styled from "styled-components";
import About from "./About/About";
import Landing from "./Landing/Landing";
import Projects from "./Projects/Projects";

const NavBar = styled.div`
  width: 100%;
  height: 8vh;
  background: #f4f4f4;
  border-bottom: solid 1px rgb(95, 126, 175, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px 0 50px;
  position: fixed;
  z-index: 1;
`;
const Footer = styled.div`
  width: 100%;
  height: 400px;
  background: black;
  display: flex;
  box-sizing: border-box;
`;
const ContactCard = styled.div`
  color: black;
  font-size: 5em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
`;
const FooterLeft = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  padding: 50px 0 0 50px;
  box-sizing: border-box;
  background: #f4f4f4;
`;
const FooterRight = styled.div`
  width: 62%;
  height: 100%;
  background: black;
  box-sizing: border-box;
  padding-top: 75px;
  padding-left: 70px;
`;
const ContactInfoBox = styled.div`
  width: auto;
  height: auto;
  /* background: pink; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ContactContent = styled.div`
  font-size: 1.2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  color: white;
  margin-bottom: 30px;
`;
const NavLeft = styled.div`
  width: 50%;
  height: 7vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavRight = styled.div`
  width: 50%;
  height: 7vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const NameLogo = styled.div`
  font-size: 1em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  color: #37393d;
  transition: all 0.3s ease 0s;
  &.linkHover:hover {
    color: #db3818;
  }
`;
const Navigation = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
`;
const NavOption = styled.div`
  font-size: 1em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  margin-left: 20px;
  letter-spacing: 1px;
  padding: 3px 5px 3px 5px;
  color: #37393d;
  transition: all 0.3s ease 0s;
  &.optionHover:hover {
    background: black;
    font-size: 1.1em;
    color: #db3818;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
          <NavLeft>
            <a href="#landing">
              <NameLogo className="linkHover">WILLIAM WON</NameLogo>
            </a>
          </NavLeft>
          <NavRight>
            <Navigation>
              <a href="#about">
                <NavOption className="optionHover">ABOUT</NavOption>
              </a>
              <a href="#projects">
                <NavOption className="optionHover">PROJECTS</NavOption>
              </a>
              <a href="#contacts">
                <NavOption className="optionHover">CONTACT</NavOption>
              </a>
            </Navigation>
          </NavRight>
        </NavBar>
        <a name="landing">
          {" "}
          <Landing />
        </a>
        <a name="about">
          <About />
        </a>
        <a name="projects">
          <Projects />
        </a>
        <a name="contacts">
          <Footer>
            <FooterLeft>
              <ContactCard>Contact</ContactCard>
            </FooterLeft>
            <FooterRight>
              <ContactInfoBox>
                <ContactContent>
                  EMAIL : <a href="wiwon0507@gmail.com"> wiwon0507@gmail.com</a>
                </ContactContent>
                <ContactContent>
                  GITHUB :
                  <a href="http://github.com/WilliamWon">
                    {" "}
                    github.com/WilliamWon
                  </a>
                </ContactContent>
                <ContactContent>
                  TWITTER :
                  <a href="https://twitter.com/WilliamWon12"> @WilliamWon12</a>
                </ContactContent>
                <ContactContent>
                  LINKEDIN :
                  <a href="https://www.linkedin.com/in/williamwon0507/">
                    {" "}
                    /in/williamwon0507/
                  </a>
                </ContactContent>
              </ContactInfoBox>
            </FooterRight>
          </Footer>
        </a>
      </div>
    );
  }
}

export default App;
