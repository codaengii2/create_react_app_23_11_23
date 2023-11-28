import styled from "styled-components";

const Container = styled.div`
  padding: 0 122px;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
