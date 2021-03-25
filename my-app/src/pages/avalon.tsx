import styled from "styled-components";
import { WorkFooter } from "../components";
import SimpleImageSlider from "react-simple-image-slider";

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
  background-image: black;
`;
const ProjectPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const StyledHeader = styled.div`
  font-size: 4rem;
  color: #57ebff;
`;

const StyledText1 = styled.p`
  font-style: normal;
  font-size: large;
  color: white;
  text-align: left;
`;

const StyledText = styled.p`
  font-style: normal;
  font-size: large;
  color: white;
  text-align: center;
`;

const LeftSide = styled.div`
  width: 40vw;
  height: 50vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4vw;
  width: 47vw;
  height: 65vh;
  margin-top: 10vh;
  background-color: rgba(56, 56, 56, 0.815);
  align-items: center;
  padding: 2rem;
`;
const SliderWrapper = styled.div`
  margin-top: 7vh;
`;
const QuoteStyle = styled.h1`
  color: #ffffff;
  font-style: italic;
  font-weight: normal;
`;

export const Avalon: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectPage>
        <LeftSide>
          <StyledHeader>Avalon</StyledHeader>
          <StyledText>Created by Simon Degen and Marius Sørensen.</StyledText>
          <a
            href="https://github.com/sorensenmarius/AvalonWebAppNoDB"
            target="_blank"
          >
            <img src="GH.png" width="10%" alt="" />
          </a>
          <SliderWrapper>
            <SimpleImageSlider
              showBullets={true}
              showNavs={true}
              width="40%"
              height="40%"
              images={[
                { url: "AvalonHost.jpg" },
                { url: "AvalonMission.jpg" },
                { url: "AvalonTeamChoosing.jpg" },
                { url: "AvalonMission2.jpg" },
                { url: "AvalonRounds.jpg" },
                { url: "AvalonMission3.jpg" },
                { url: "AvalonEndgame.jpg" },
              ]}
            />
          </SliderWrapper>
        </LeftSide>
        <RightSide>
          <QuoteStyle>
            "Everyone`s a star and deserves the right to twinkle
            <br /> -Marilyn Monroe"
          </QuoteStyle>
          <StyledText1>
            As stated so well by Marilyn Monroe, everyone deserves the right tp
            twinkle. The Problem and inspiration for creating this project was
            the fact that every round one player had to sit out and function as
            the 'game master' and therefor could not participate as a player in
            the game. We seeked to solve this so that everyone could play all
            the time. Our solutions takes upon itself the role of the game
            master such that everyone can participate. <br />
            <br />
            Avalon is a game of social deduction in which 5-10 players work
            together to find the players that have been dealt the evil roles. To
            remove the need for a separate person called a 'game master', we
            have digitalized Avalon so that you and your friends can play using
            your smartphones and a TV. <br />
            <br />
            Now over to some of the technicalities. We used C#/.Net for the
            backend and React for the frontend. Additionally, we used WebSockets
            for real-time connections, which has grown to become one of my
            favorite technologies. This project is made in collaboration with
            Marius Sørensen. Check out his GitHub, and check out the project at
            avalon.s0rensen.no
          </StyledText1>
        </RightSide>
      </ProjectPage>
      <WorkFooter nextPage="bachelor" previousPage="masterblaster" />
    </ProjectContainer>
  );
};
