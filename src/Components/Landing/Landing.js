import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 90vh;
  background: black;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 8vh 0 3.5vh 50px;
  position: relative;
`;
const Click = styled.p`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
`;
const IntroContainer = styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
`;
const NameContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  margin-right: 40px;
`;
const MyName = styled.div`
  font-size: 5em;
  margin-bottom: -15px;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  letter-spacing: 3px;
  transition: all 0.3s ease 0s;
  &.enlarge:hover {
    font-size: 6em;
    color: #fffd82;
    transition: 0.2s;
  }
  &.webby:hover {
    color: #c5fffd;
    cursor: pointer;
  }
  &.designy:hover {
    color: #55dbcb;
    cursor: pointer;
  }
`;
const Who = styled.div`
  position: absolute;
  top: 400px;
  left: 600px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
`;

const QuickDesc = styled.div`
  font-size: 1.4em;
  box-sizing: border-box;
  padding-top: 10vh;
  color: white;
  height: auto;
  width: 400px;
  text-align: left;
  line-height: 27px;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
`;
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      devOpen: false,
      desOpen: false
    };
  }
  handleDev() {
    this.setState({ devOpen: !this.state.devOpen, desOpen: false });
  }
  handleDes() {
    console.log(this.state.desOpen);
    this.setState({ desOpen: !this.state.desOpen, devOpen: false });
  }
  render() {
    return (
      <div>
        <Main>
          <IntroContainer>
            <NameContainer>
              <Click>(Click for description)</Click>
              <MyName
                onClick={() => this.handleDev()}
                className="enlarge webby"
              >
                WEB DEVELOPER
              </MyName>
              <MyName
                onClick={() => this.handleDes()}
                className="enlarge designy"
              >
                DESIGNER
              </MyName>
            </NameContainer>
            {this.state.devOpen === true && (
              <QuickDesc>
                Hey I am a React-based developer who has experience with:<br />
                _________
                <br />
                <br />
                Javascript | HTML | PostgresSQL | Node | CSS | Express | Git |
                Redux
              </QuickDesc>
            )}
            {this.state.desOpen === true && (
              <QuickDesc>
                Hey I am also a graphic designer who loves layout and
                typography: <br />
                _________
                <br />
                <br />
                PhotoShop | Illustrator | Indesign
              </QuickDesc>
            )}
          </IntroContainer>
        </Main>
      </div>
    );
  }
}

export default Landing;
