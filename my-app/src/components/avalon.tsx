import styled from "styled-components";
import { WorkFooter } from "./workFooter";

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background: linear-gradient(#333333, #222222);
  height: 100vh;
`;
const ProjectPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Avalon: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectPage></ProjectPage>
      <WorkFooter
        hasNextPage={false}
        hasPreviousPage={false}
        nextPage="test"
        previousPage="test"
      />
    </ProjectContainer>
  );
};
