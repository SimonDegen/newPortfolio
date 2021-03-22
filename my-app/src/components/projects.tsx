import styled from "styled-components";
import "../components/SharedStyling.css";
import { useHistory } from "react-router-dom";
import { ImageSliderComponent } from "./imageSlider";

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
      <ImageSliderComponent
        imageLinksAndRoutes={[
          { imageLink: "Mb.jpg", projectRoute: "/masterblaster" },
          { imageLink: "AvalonReal.jpg", projectRoute: "/avalon" },
          { imageLink: "BasicLayout.png", projectRoute: "/bachelor" },
          { imageLink: "Portonew.png", projectRoute: "/portefolio" },
        ]}
      />
      {/*  <SlideContainer className="SlideIn">
        <WorkObjectCard backgroundImage="Mb.jpg" />
        <WorkObjectCard
          backgroundImage="AvalonReal.jpg"
          onClick={() => {
            history.push("/avalon");
          }}
        />
        <WorkObjectCard backgroundImage="BasicLayout.png" />
        <WorkObjectCard backgroundImage="Portonew.png" />
      </SlideContainer> */}
    </PageWrapper>
  );
};
