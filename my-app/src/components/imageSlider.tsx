import { useHistory } from "react-router-dom";
import styled from "styled-components";

type LinkRoutePairs = {
  imageLink: string;
  projectRoute?: string;
};

type ImageSliderProps = {
  imageLinksAndRoutes: LinkRoutePairs[];
};
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
const SlideContainer = styled.div<{ width?: string }>`
  position: relative;
  margin-top: 43vh;
  left: 5vw;
  bottom: 0;
  z-index: 10;
  height: 70vh;
  display: flex;
  width: ${(props) => props.width || "220%"};
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ImageSliderComponent: React.FC<ImageSliderProps> = ({
  imageLinksAndRoutes,
}) => {
  const history = useHistory();
  console.log(imageLinksAndRoutes.length);
  return (
    <SlideContainer width={`${imageLinksAndRoutes.length * 53}%`}>
      {imageLinksAndRoutes.map((obj) => {
        return (
          <WorkObjectCard
            backgroundImage={obj.imageLink}
            onClick={() => {
              if (obj.projectRoute) {
                history.push(`${obj.projectRoute}`);
              }
              return;
            }}
          />
        );
      })}
    </SlideContainer>
  );
};
