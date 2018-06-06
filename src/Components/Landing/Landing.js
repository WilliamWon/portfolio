import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 80vh;
  /* background: skyblue; */
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0 0 50px;
  position: relative;
`;
const NameContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const MyName = styled.div`
  font-size: 6em;
  background: black;
  padding: 0 20px 0 20px;
  margin-bottom: -15px;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  letter-spacing: 3px;
  transition: all 0.3s ease 0s;
  &.enlarge:hover {
    font-size: 8em;
    color: #fffd82;
    transition: 0.2s;
  }
  &.webby:hover {
    color: #c5fffd;
  }
  &.designy:hover {
    color: #55dbcb;
  }
  &.foody:hover {
    color: #75e4b3;
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
class Landing extends Component {
  render() {
    return (
      <div>
        <Main>
          <NameContainer>
            <MyName className="enlarge webby">WEB DEVELOPER</MyName>
            <MyName className="enlarge designy">DESIGNER</MyName>
            {/* <MyName className="enlarge foody">SUSHI CHEF</MyName> */}
          </NameContainer>
        </Main>
      </div>
    );
  }
}

export default Landing;
