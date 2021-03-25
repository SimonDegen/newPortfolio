import styled from "styled-components";
import { WorkFooter } from "../components";

import SimpleImageSlider from "react-simple-image-slider";

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
`;
const ProjectPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const StyledHeader = styled.div`
  font-size: 2.5rem;
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
  width: 35vw;
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
const StyledH1 = styled.h1`
  padding-top: 0rem;
  color: white;
`;
const BlueSpan = styled.span`
  color: #57ebff;
`;

export const BachelorPage: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectPage>
        <LeftSide>
          <StyledHeader>
            Meeting assistant - a web application using Graph API
          </StyledHeader>
          <StyledText>Created by Simon Degen and Johanna Kinstad.</StyledText>
          <SliderWrapper>
            <SimpleImageSlider
              showBullets={true}
              showNavs={true}
              width="35%"
              height="40%"
              images={[
                { url: "BasicLayout.png" },
                { url: "test.jpg" },
                { url: "bachelorContentlist.jpg" },
                { url: "bachelorexample.jpg" },
                { url: "security.jpg" },
              ]}
            />
          </SliderWrapper>
        </LeftSide>
        <RightSide>
          <StyledH1>My Bachelor Thesis</StyledH1>
          <StyledText1>
            This thesis presents the process of developing a web application for
            the purpose of acting as a "Meeting assistant" to the user through
            the use of the <BlueSpan>Microsoft Graph API</BlueSpan> and an
            interactive and user-friendly UI. The purpose of the application is
            to simplify the process of booking meetings as this is a large part
            of many peoples everyday life and can be quite time consuming with
            solutions currently available. The main focus of the project has
            been to ensure that the system will find coinciding meeting times
            for all attendees and handle bookings and cancellations. <br />
            <br />
            Booking and attending meetings is an essential part of everyday life
            for many people. Organizing a meeting in a way so that it fits
            everyone's schedule can be a difficult process and can take up
            valuable time for the people involved. That is exactly why we wanted
            to make this our project. The goal for this project is to simplify
            this process by the use of a platform which uses the Microsoft Graph
            API and focuses on user simplicity. <br />
            <br />
            Aside from that, our personalmotivation is directed towards learning
            new technology and new languages, such as{" "}
            <BlueSpan>C#, .NET CORE, and React</BlueSpan>, which we have never
            used before. We created this project using{" "}
            <BlueSpan>Azure DevOps</BlueSpan>. I would like to thank Veni for
            their help and guidance in creating this project. This project was
            created in collabotarion with Johanna Kinstad. For more information
            about my bachelor please dont hesitate to send me a email or contact
            me on LinkedIn which can be found on the contact page.
          </StyledText1>
        </RightSide>
      </ProjectPage>
      <WorkFooter nextPage="oldportfolio" previousPage="avalon" />
    </ProjectContainer>
  );
};
