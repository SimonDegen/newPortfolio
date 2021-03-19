import styled from "styled-components";
import "../components/SharedStyling.css";
import history, { useHistory } from "react-router-dom";

const PageWrapper = styled.div`
  height: 98.2vh;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
`;
const HeaderDiv = styled.div`
  margin-top: 14vh;
  position: fixed;
  text-align: left;
  height: 35vh;
  padding-left: 7vw;
  justify-content: center;
  align-content: center;
`;
const StyledHeader = styled.div`
  font-size: 3.6rem;
  color: white;
`;
const WorkObjectCard = styled.div<{ backgroundImage?: string }>`
  height: 50vh;
  margin: 2rem;
  width: 50vw;
  background-image: url(${(props) => props.backgroundImage || ""});
  background-size: cover;
  background-repeat: no-repeat;
  line-height: 30vh;
  color: white;
  filter: brightness(0.5);
  cursor: pointer;
  &:hover {
    margin-top: 1vh;
    color: white;
    filter: brightness(1);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1);
  }
`;
const SlideContainer = styled.div`
  position: relative;
  margin-top: 43vh;
  left: 5vw;
  bottom: 0;
  z-index: 10;
  height: 70vh;
  width: 220%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
type projectProps = {
  setStateHeader: (value: number) => void;
};
export const Projects: React.FC<projectProps> = ({ setStateHeader }) => {
  const history = useHistory();
  setStateHeader(2);
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    var scrollSpeed = 15; // Janky jank <<<<<<<<<<<<<<
    document.documentElement.scrollLeft -= delta * scrollSpeed;
    console.log("Scroll Speed", delta);
    document.body.scrollLeft -= delta * scrollSpeed;
    e.preventDefault();
  }

  if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, {
      passive: false,
    });
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, {
      passive: false,
    });
  }

  return (
    <PageWrapper>
      <HeaderDiv className="FadeIn">
        <StyledHeader>
          Everything from my own projects <br />
          to frontend Consultent work
        </StyledHeader>
      </HeaderDiv>
      <SlideContainer className="SlideIn">
        <WorkObjectCard backgroundImage="Mb.jpg" />
        <WorkObjectCard
          backgroundImage="AvalonReal.jpg"
          onClick={() => {
            history.push("/avalon");
          }}
        />
        <WorkObjectCard backgroundImage="BasicLayout.png" />
        <WorkObjectCard backgroundImage="Portonew.png" />
      </SlideContainer>
    </PageWrapper>
  );
};
