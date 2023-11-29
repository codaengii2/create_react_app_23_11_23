import styled from "styled-components";
import { Layout } from "../../components/Layout";

const MainBanners = styled.section`
  width: 100%;
  height: 909px;
  position: relative;
  padding: 565px 122px 0;
  h1,
  h3,
  p {
    position: relative;
  }
  h1 {
    font-size: 80px;
    font-weight: 700;
    color: #fff;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
    margin: 25px 0;
  }
  p {
    font-size: 20px;
    font-weight: 500;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const NewWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NewsConWrap = styled.div`
  width: 100%;
  position: relative;
  top: -43px;
  height: 624px;
  &:nth-child(2) {
    margin: 0 53.5px;
  }
  h4,
  p {
    position: relative;
    color: #fff;
  }
`;
const ConBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightblue;
  position: absolute;
  top: 0;
  left: 0;
`;
const ConBottom = styled.div`
  width: 100%;
  height: 159px;
  background-color: rgba(59, 59, 59, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 53px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const PoppularWrap = styled.div``;
const Title = styled.h3`
  color: #222;
`;
const BtnWrap = styled.ul`
  display: flex;
`;
const DayWrap = styled.div``;
const WeekWrap = styled.div`
  width: 100%;
  display: none;
`;
const PopWrap = styled.div`
  width: 100%;
  display: none;
`;
const RecommendWrap = styled.div`
  width: 100%;
  display: none;
`;

export const Home = () => {
  return (
    <>
      <MainBanners>
        <Bg />
        <h1>영화제목</h1>
        <h3>영화 부제목</h3>
        <p>영화 간단소개</p>
      </MainBanners>
      <Layout>
        <NewWrap>
          <NewsConWrap>
            <ConBg />
            <ConBottom>
              <p>기사 제목</p>
              <h4>영화 제목</h4>
            </ConBottom>
          </NewsConWrap>
          <NewsConWrap>
            <ConBg />
            <ConBottom>
              <p>기사 제목</p>
              <h4>영화 제목</h4>
            </ConBottom>
          </NewsConWrap>
          <NewsConWrap>
            <ConBg />
            <ConBottom>
              <p>기사 제목</p>
              <h4>영화 제목</h4>
            </ConBottom>
          </NewsConWrap>
        </NewWrap>
        <PoppularWrap>
          <Title>이번달 코챠 유저들이 가장 많이 본 영화는?</Title>
          <BtnWrap>
            <li>실시간</li>
            <li>이번주</li>
            <li>인기</li>
            <li>추천</li>
          </BtnWrap>
          <DayWrap></DayWrap>
          <WeekWrap></WeekWrap>
          <PopWrap></PopWrap>
          <RecommendWrap></RecommendWrap>
        </PoppularWrap>
      </Layout>
    </>
  );
};
