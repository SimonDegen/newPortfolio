import React from "react";
import styled from "styled-components";
type GradientContainerProps = {
  header?: string;
  text?: string;
  HeaderDiv?: boolean;
};
const ContainerDiv = styled.div<{ flipped?: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  opacity: ${(props) => (props.flipped ? 0.1 : 1)};
  -webkit-transform: scale(1, ${(props) => props.flipped});
`;
const BoxContainer = styled.div`
  position: relative;
  width: 40vw;
  height: 400px;
  color: #fff;
  background: black;
  display: flex;
  justify-content: center;
  margin: 20px 30px;
  transition: 0.5s;
  &:hover {
    transform: translateY(-20px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #ff00f8);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
    filter: blur(60px);
  }
`;
const SpanComp = styled.span`
  position: absolute;
  left: 6px;
  top: 6px;
  right: 6px;
  bottom: 6px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 20px 40px;
`;
export const GradiantContainer: React.FC<GradientContainerProps> = ({
  header,
  text,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const Style = {
    transform: isHover ? "translateY(-20px)" : "translateY(0)",
  };
  return (
    <div>
      <ContainerDiv>
        <BoxContainer
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <SpanComp />
          <ContentContainer>
            <h2>{header}</h2>
            <p>{text}</p>
            <img src="Linkedin.png" alt="" width="40%" height="40%" />
          </ContentContainer>
        </BoxContainer>
      </ContainerDiv>
      <ContainerDiv flipped={-1}>
        <BoxContainer style={Style}>
          <SpanComp />
          <ContentContainer>
            <h2>{header}</h2>
            <p>{text}</p>
            <img src="Linkedin.png" alt="" width="40%" height="40%" />
          </ContentContainer>
        </BoxContainer>
      </ContainerDiv>
    </div>
  );
};
