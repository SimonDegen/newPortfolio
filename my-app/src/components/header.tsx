import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
const StyledHeader = styled.div`
  position: fixed;
  width: 100vw;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 100;
  background-color: rgba(20, 20, 20, 0.93);
`;
const LeftHeader = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: row;
  color: white;
  text-align: left;
  padding-left: 6vw;
  height: 100%;
  line-height: 6vh;
`;
const HeaderItems = styled.h1`
  width: 8vw;
  margin: 0;
  font-size: large;
  height: 100%;
  cursor: pointer;
  align-content: center;
  margin: auto;
  text-align: center;
  z-index: 9999;
`;
const RightHeader = styled.div`
  padding: 10px;
  width: 50vw;
  flex-direction: row;
  text-align: right;
  color: #57ebff;
  right: 10vw;
  margin-right: 10vw;
`;
const StyledSpan = styled.span`
  color: #57ebff;
`;
export const Header = () => {
  const history = useHistory();
  return (
    <StyledHeader>
      <LeftHeader>
        <HeaderItems
          onClick={() => {
            history.push("/home");
          }}
        >
          <StyledSpan>Home</StyledSpan>
        </HeaderItems>
        <HeaderItems
          onClick={() => {
            history.push("/about");
          }}
        >
          About
        </HeaderItems>
        <HeaderItems
          onClick={() => {
            history.push("/work");
          }}
        >
          Work
        </HeaderItems>
        <HeaderItems>Projects</HeaderItems>
      </LeftHeader>
      <RightHeader>
        <h1>SD</h1>
      </RightHeader>
    </StyledHeader>
  );
};
