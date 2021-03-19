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
  width: 6vw;
  margin: 0;
  font-size: large;
  height: 100%;
  cursor: pointer;
  align-content: center;
  margin: auto;
  text-align: center;
  z-index: 9999;
  color: ${(props) => props.color};
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
type HeaderProps = {
  value: number;
};
export const Header: React.FC<HeaderProps> = ({ value }) => {
  const history = useHistory();
  return (
    <StyledHeader>
      <LeftHeader>
        <HeaderItems
          color={value == 0 ? "#57ebff" : "white"}
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </HeaderItems>
        <HeaderItems
          color={value == 1 ? "#57ebff" : "white"}
          onClick={() => {
            history.push("/about");
          }}
        >
          About
        </HeaderItems>
        <HeaderItems
          color={value == 2 ? "#57ebff" : "white"}
          onClick={() => {
            history.push("/projects");
          }}
        >
          Projects
        </HeaderItems>
        <HeaderItems
          color={value == 3 ? "#57ebff" : "white"}
          onClick={() => {
            history.push("/work");
          }}
        >
          Work
        </HeaderItems>
        <HeaderItems
          color={value == 4 ? "#57ebff" : "white"}
          onClick={() => {
            history.push("/contact");
          }}
        >
          Contact
        </HeaderItems>
      </LeftHeader>
      <RightHeader>
        <h1>SD</h1>
      </RightHeader>
    </StyledHeader>
  );
};
