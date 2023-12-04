import styled from "styled-components";

const Container = styled.section`
  padding: 0 122px;
  @media screen and (man-width: 1080px) {
    padding: 0 60px;
  }
  @media screen and (man-width: 680px) {
    padding: 0 17px;
  }
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
