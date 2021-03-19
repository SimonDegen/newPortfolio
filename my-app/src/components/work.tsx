import styled from "styled-components";
import "../components/home.css";

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
`;
const HeaderDiv = styled.div`
  text-align: left;
  position: relative;
  height: 35vh;
  padding-left: 7vw;
  justify-content: center;
  align-content: center;
  padding-top: 15vh;
`;
const StyledHeader = styled.div`
  font-size: 3.6rem;
  color: white;
`;
const WorkObjectCard = styled.div`
  height: 50vh;
  background: rgb(30, 29, 37);
  background: linear-gradient(
    180deg,
    rgba(30, 29, 37, 1) 0%,
    rgba(41, 41, 41, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const Work = () => {
  return (
    <PageWrapper>
      <HeaderDiv className="FadeIn">
        <StyledHeader>
          From e-commerce platforms <br />
          to virtual worlds.
        </StyledHeader>
      </HeaderDiv>
      <WorkObjectCard className="FadeIn"></WorkObjectCard>
      <WorkObjectCard className="FadeIn"></WorkObjectCard>
      <WorkObjectCard className="FadeIn"></WorkObjectCard>
    </PageWrapper>
  );
};
