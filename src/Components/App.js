import React, { Component } from "react";
import "./App.css";
import routes from "../routes";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  width: 100%;
  height: 8vh;
  background: transparent;
  border-bottom: solid 1px rgb(95, 126, 175, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px 0 50px;
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
    color: tomato;
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
    color: pink;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
          <NavLeft>
            <Link to="/">
              <NameLogo className="linkHover">WILLIAM WON</NameLogo>
            </Link>
          </NavLeft>
          <NavRight>
            <Navigation>
              <Link to="/about">
                <NavOption className="optionHover">ABOUT</NavOption>
              </Link>
              <Link to="/projects">
                <NavOption className="optionHover">PROJECTS</NavOption>
              </Link>
              <Link to="/contact">
                <NavOption className="optionHover">CONTACT</NavOption>
              </Link>
            </Navigation>
          </NavRight>
        </NavBar>
        {routes}
      </div>
    );
  }
}

export default App;
