import { useHistory } from "react-router";
import styled from "styled-components";
type footerProps = {
  nextPage?: string;
  previousPage?: string;
};
const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  height: 10vh;
  width: 100vw;
  background-color: #222222;
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
`;
const PreviousPageLink = styled.a`
  display: flex;
  align-items: center;
  color: #57ebff;
  cursor: url("AvalonRealSmall.png"), pointer;
`;
const NextPageLink = styled.a`
  display: flex;
  width: 43vw;
  margin-right: 7vw;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  color: #57ebff;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  width: 30vw;
  height: 100%;
  justify-content: center;
  margin-right: 15vw;
  cursor: url("AvalonRealSmall.png"), pointer;
`;
export const WorkFooter: React.FC<footerProps> = ({
  nextPage,
  previousPage,
}) => {
  const history = useHistory();
  return (
    <StyledFooter>
      {previousPage && (
        <Container>
          <PreviousPageLink
            onClick={() => {
              history.push(`/${previousPage}`);
            }}
          >
            {" "}
            &lt; Previous project
          </PreviousPageLink>
        </Container>
      )}
      {!previousPage && (
        <Container>
          <PreviousPageLink />
        </Container>
      )}
      For more information about the project contact me
      {nextPage && (
        <NextPageLink
          onClick={() => {
            history.push(`/${nextPage}`);
          }}
        >
          Next Project &gt;
        </NextPageLink>
      )}
      {!nextPage && <NextPageLink />}
    </StyledFooter>
  );
};
