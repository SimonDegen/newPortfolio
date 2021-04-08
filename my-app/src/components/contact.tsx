import styled from "styled-components";
import { GradiantContainer, ShinyCards } from "../components";
type contactProps = {
  setStateHeader: (value: number) => void;
};
const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 10vw;
  height: 100%;
  width: 50vw;
  padding-left: 5vw;
  color: white;
`;
export const Contact: React.FC<contactProps> = ({ setStateHeader }) => {
  setStateHeader(4);
  return (
    <MainContainer className="TextAnimation">
      <ShinyCards></ShinyCards>
      {/* <GradiantContainer
        header="test"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      /> */}
    </MainContainer>
  );
};
