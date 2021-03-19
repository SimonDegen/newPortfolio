import { useHistory } from "react-router";
import styled from "styled-components";

type footerProps = {
  nextPage: string;
  previousPage: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
const StyledFooter = styled.div`
  position: relative;
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
  margin-left: 7vw;
  align-items: center;
  color: #57ebff;
  cursor: pointer;
  width: 43vw;
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
const FancySpan = styled.span`
  cursor: pointer;
`;
export const WorkFooter: React.FC<footerProps> = ({
  nextPage,
  hasNextPage,
  previousPage,
}) => {
  const history = useHistory();
  return (
    <StyledFooter>
      {previousPage !== "" && (
        <PreviousPageLink
          onClick={() => {
            history.push(`/${previousPage}`);
          }}
        >
          {" "}
          &lt; Previous project
        </PreviousPageLink>
      )}
      For more information about the project contact me
      {nextPage !== "" && (
        <NextPageLink>
          <FancySpan
            onClick={() => {
              history.push(`/${nextPage}`);
            }}
          >
            Next Project &gt;
          </FancySpan>
        </NextPageLink>
      )}
    </StyledFooter>
  );
};
