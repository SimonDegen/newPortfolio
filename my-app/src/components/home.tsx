import styled from "styled-components";
import "../components/home.css";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 10vw;
  height: 100%;
  width: 50vw;
  padding-top: 30vh;
  padding-left: 9vw;
  color: white;
`;
const StyledHeader = styled.div`
  font-size: 3.6rem;
  color: #57ebff;
`;
const StyledText = styled.p`
  font-style: normal;
  font-size: large;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #57ebff;
`;
type homeProps = {
  setStateHeader: (value: number) => void;
};
export const Home: React.FC<homeProps> = ({ setStateHeader }) => {
  setStateHeader(0);
  return (
    <MainContainer className="TextAnimation">
      <h1>Hi, I'm Simon.</h1>
      <StyledHeader>Consultent, Innovator, Student</StyledHeader>
      <StyledText>
        Masterstudent in industrial economics, with a bachelores degree in
        computer engineering. <br />
        Working part time as a consultent at{" "}
        <StyledLink target="blank" href="https://www.veni.no">
          Veni.
        </StyledLink>
        <br />
        <br /> <StyledLink href="/about">Learn more about me here.</StyledLink>
      </StyledText>
    </MainContainer>
  );
};
