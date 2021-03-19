import styled from "styled-components";
import "../components/home.css";

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 10vw;
  height: 100%;
  width: 50vw;
  padding-top: 30vh;
  padding-left: 9vw;
  color: white;
`;

const StyledHeader = styled.div`
  font-size: 3.6rem;
  color: white;
`;
type aboutProps = {
  setStateHeader: (value: number) => void;
};
export const About: React.FC<aboutProps> = ({ setStateHeader }) => {
  setStateHeader(1);
  return (
    <AboutContainer className="TextAnimation">
      <StyledHeader> Testing if this works</StyledHeader>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        possimus impedit molestias autem asperiores. Expedita officia dolorum
        perspiciatis laboriosam, accusamus, officiis quasi fuga iste, laborum
        nemo provident at odit sed! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde fuga voluptate ab assumenda consequuntur? Vitae,
        culpa. Totam impedit veniam dolorum odit perferendis qui minus,
        repellendus corporis assumenda esse animi doloribus?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        possimus impedit molestias autem asperiores. Expedita officia dolorum
        perspiciatis laboriosam, accusamus, officiis quasi fuga iste, laborum
        nemo provident at odit sed!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        possimus impedit molestias autem asperiores. Expedita officia dolorum
        perspiciatis laboriosam, accusamus, officiis quasi fuga iste, laborum
        nemo provident at odit sed!
      </p>
    </AboutContainer>
  );
};
