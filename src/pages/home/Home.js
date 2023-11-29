import styled from "styled-components";

const MainBanners = styled.div`
  width: 100%;
  height: 909px;
`;
const Bg = styled.div``;

export const Home = () => {
  return (
    <MainBanners>
      <Bg />
      <h1>영화제목</h1>
      <h3>영화 부제목</h3>
      <p>영화 간단소개</p>
    </MainBanners>
  );
};
