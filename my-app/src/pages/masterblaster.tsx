import styled from "styled-components";
import { WorkFooter } from "../components";

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
`;
export const MasterBlasterPage: React.FC = () => {
  return (
    <ProjectContainer>
      <WorkFooter nextPage="avalon" />
    </ProjectContainer>
  );
};
