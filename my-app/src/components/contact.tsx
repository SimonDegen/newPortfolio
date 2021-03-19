import styled from "styled-components";

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
  padding-top: 20vh;
  padding-left: 9vw;
  color: white;
`;

const StyledHeader = styled.div`
  font-size: 3rem;
  color: white;
  margin-bottom: 4vh;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #57ebff;
  align-items: center;
  height: 100%;
  width: 33%;
  cursor: pointer;
`;
const StyledLinkA = styled.a`
  text-decoration: none;
  color: #57ebff;
  align-items: center;
  height: 100%;
  width: 33%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  height: 10vh;
  width: 40vw;
  margin-top: 30vh;
`;
export const Contact: React.FC<contactProps> = ({ setStateHeader }) => {
  setStateHeader(4);
  return (
    <MainContainer className="worknimation">
      <StyledHeader>Dont hesitate to contact me!</StyledHeader>
      You can reach me at:
      <StyledLink href="mailto:simondegen99@gmail.com">
        Simondegen99@gmail.com
      </StyledLink>
      <LogoContainer>
        <StyledLinkA
          target="blank"
          href="https://www.linkedin.com/in/simon-degen-02b383192/"
        >
          <img src="LI.png" height="90%" alt="" />
        </StyledLinkA>
        <StyledLinkA href="mailto:simondegen99@gmail.com">
          <img src="OL.png" height="100%" alt="" />
        </StyledLinkA>
        <StyledLinkA target="blank" href="https://github.com/SimonDegen">
          <img src="GH.png" height="100%" alt="" />
        </StyledLinkA>
      </LogoContainer>
    </MainContainer>
  );
};
