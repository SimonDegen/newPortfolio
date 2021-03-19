import styled from "styled-components";
import "../components/SharedStyling.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
type workProps = {
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
  font-size: 3.6rem;
  color: white;
  margin-bottom: 10vh;
`;
const StyledText = styled.p`
  font-style: normal;
  font-size: large;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #017592;
`;

export const Work: React.FC<workProps> = ({ setStateHeader }) => {
  setStateHeader(3);
  const classes = useStyles();

  return (
    <MainContainer className="workAnimation">
      <StyledHeader>My journey has just begun</StyledHeader>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" color="error">
            Present
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="primary">
              January 2021
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                <StyledLink target="blank" href="https://www.veni.no">
                  Veni
                </StyledLink>
              </Typography>
              <Typography>
                Started working for Veni as a Consultent <br />
                Current working with Frontend related tasks
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="primary">
              May 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <EmojiEventsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Bachelor!
              </Typography>
              <Typography>Completed My bachelors degree </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="primary">
              November 2019
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined"></TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Teaching Assistent
              </Typography>
              <Typography>Finished working as teaching assistent</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="primary">
              august 2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Teaching Assistent
              </Typography>
              <Typography>
                Started working as Teaching assistent <br /> in ING100 at
                University of Stavanger
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </MainContainer>
  );
};
