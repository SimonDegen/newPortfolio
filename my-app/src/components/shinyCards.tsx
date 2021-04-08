import React from "react";
import styled from "styled-components";
const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1700px;
  flex-wrap: wrap;
  z-index: 1;
  margin-bottom: 4vh;
`;
const FlippedContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1700px;
  flex-wrap: wrap;
  z-index: 1;
  -webkit-transform: scale(1, -1);
`;
const CardDiv = styled.div`
  position: relative;
  margin: 10px;
  width: 260px;
  height: 400px;
  box-shadow: 7px 7px 10px rgba(87, 235, 255, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(87, 235, 255, 0.5);

  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: 0.5s;
  transform: translateY(20px);
  opacity: 0.3;
  &:hover {
    transform: translateY(0px);
    opacity: 1;
  }
  &:before {
    position: absolute;
    left: 0;
    content: "";
    width: 50%;
    height: 100%;
    background: rgba(144, 224, 255, 0.2);
  }
`;

const ContentDiv = styled.div`
  padding: 20px;
  text-align: center;
  justify-content: center;
`;
const StyledH2 = styled.h2`
  position: absolute;
  top: -95px;
  right: 30px;
  font-size: 8rem;
  color: rgba(87, 235, 255, 0.4);
  pointer-events: none;
  z-index: 1;
`;

const StyledH3 = styled.h3`
  font-size: 1.8rem;
  color: white;
  opacity: 1;
  z-index: 2;
`;
const StyledText = styled.p`
  font-size: 1em;
  color: white;
  font-weight: 300;
  text-align: left;
`;
const StyledA = styled.a`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background: white;
  color: black;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;
export const ShinyCards: React.FC = () => {
  const [isHover, setIsHover] = React.useState(false);
  const [isHover2, setIsHover2] = React.useState(false);
  const [isHover3, setIsHover3] = React.useState(false);

  const Style1 = {
    transform: isHover ? "translateY(-20px)" : "translateY(0)",
    opacity: isHover ? "0.3" : "0.05",
  };
  const Style2 = {
    transform: isHover2 ? "translateY(-20px)" : "translateY(0)",
    opacity: isHover2 ? "0.3" : "0.05",
  };
  const Style3 = {
    transform: isHover3 ? "translateY(-20px)" : "translateY(0)",
    opacity: isHover3 ? "0.3" : "0.05",
  };
  return (
    <div>
      <ContainerDiv>
        <CardDiv
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ContentDiv>
            <StyledH2>01</StyledH2>
            <StyledH3>LinkedIn</StyledH3>
            <StyledText>
              If you want to send me a message or just take a chat send me a
              message on LinkedIn! You can also check out my profile and see
              where i have worked in the past!
            </StyledText>
            <StyledA
              href="https://www.linkedin.com/in/simon-degen-02b383192/"
              target="_blank"
            >
              Head to LinkedIn
            </StyledA>
          </ContentDiv>
        </CardDiv>
        <CardDiv
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
        >
          <ContentDiv>
            <StyledH2>02</StyledH2>
            <StyledH3>Github</StyledH3>
            <StyledText>
              Head over to github to check out some of my projects! On my github
              you can find some of my work aswell as some school assignments!
              You can even find this portfolio there!!
            </StyledText>
            <StyledA href="https://github.com/SimonDegen" target="_blank">
              Head to Github
            </StyledA>
          </ContentDiv>
        </CardDiv>
        <CardDiv
          onMouseEnter={() => setIsHover3(true)}
          onMouseLeave={() => setIsHover3(false)}
        >
          <ContentDiv>
            <StyledH2>03</StyledH2>
            <StyledH3>Mail</StyledH3>
            <StyledText>
              If you want to get to know me better or have questions about any
              of my projects dont hesitate to send me a mail! Click the button
              below to open create a new mail!
            </StyledText>
            <StyledA href="mailto:simondegen99@gmail.com">
              Send me a mail
            </StyledA>
          </ContentDiv>
        </CardDiv>
      </ContainerDiv>
      <FlippedContainer>
        <CardDiv style={Style1}>
          <ContentDiv>
            <StyledH2>01</StyledH2>
            <StyledH3>LinkedIn</StyledH3>
            <StyledText>
              If you want to send me a message or just take a chat send me a
              message on LinkedIn! You can also check out my profile and see
              where i have worked in the past!
            </StyledText>
            <StyledA
              href="https://www.linkedin.com/in/simon-degen-02b383192/"
              target="_blank"
            >
              Head to LinkedIn
            </StyledA>
          </ContentDiv>
        </CardDiv>
        <CardDiv style={Style2}>
          <ContentDiv>
            <StyledH2>02</StyledH2>
            <StyledH3>Github</StyledH3>
            <StyledText>
              Head over to github to check out some of my projects! On my github
              you can find some of my work aswell as some school assignments!
              You can even find this portfolio there!!
            </StyledText>
            <StyledA href="https://github.com/SimonDegen" target="_blank">
              Head to Github
            </StyledA>
          </ContentDiv>
        </CardDiv>
        <CardDiv style={Style3}>
          <ContentDiv>
            <StyledH2>03</StyledH2>
            <StyledH3>Mail</StyledH3>
            <StyledText>
              If you want to get to know me better or have questions about any
              of my projects dont hesitate to send me a mail! Click the button
              below to open create a new mail!
            </StyledText>
            <StyledA href="mailto:simondegen99@gmail.com">
              Send me a mail
            </StyledA>
          </ContentDiv>
        </CardDiv>
      </FlippedContainer>
    </div>
  );
};
