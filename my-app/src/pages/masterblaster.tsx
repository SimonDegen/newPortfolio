import styled from "styled-components";
import { WorkFooter } from "../components";

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
  color: white;
`;
const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 70vh;
  margin-top: 8vh;
  margin-left: 10vw;
  text-align: left;
`;
const StyledHeader = styled.h1`
  font-size: 3.6rem;
  cursor: url("lock.png"), pointer;
`;
const StyledSpan = styled.span`
  color: #57ebff;
`;
const StyledLink = styled.a`
  color: #57ebff;
  text-decoration: none;
  cursor: pointer;
`;
const StyledP = styled.p`
  margin-bottom: 5vh;
`;
export const MasterBlasterPage: React.FC = () => {
  return (
    <ProjectContainer>
      <LeftSideWrapper>
        <StyledHeader>
          This is a <StyledSpan color="#57ebff">ongoing</StyledSpan> project
        </StyledHeader>
        <StyledP>
          This is the project i am currently working on in{" "}
          <StyledLink href="https://veni.no/">Veni</StyledLink>. <br />
          Because of this i cant disclose much about this project... <br />
          <br />
          Head over to{" "}
          <StyledLink href="https://www.masterblaster.gg/">
            Master Blaster
          </StyledLink>
          &#160;to see the current state of the project.
        </StyledP>
        <StyledLink href="https://www.masterblaster.gg" target="_blank">
          <img src="MasterBlaster.jpg" alt="" width="100%" />
        </StyledLink>
      </LeftSideWrapper>

      <WorkFooter nextPage="avalon" />
    </ProjectContainer>
  );
};
