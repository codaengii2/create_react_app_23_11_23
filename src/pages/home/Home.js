import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying } from "../../api";
import { Layout } from "../../components/Layout";
import { IMG_URL } from "../../constants";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const MainBanners = styled.section`
  width: 100%;
  height: 909px;
  position: relative;
  padding: 565px 122px 0;
  background: url(${IMG_URL}/original/${(props) => props.$mainBg}) no-repeat
    center/cover;
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
    width: 40%;
    font-size: 20px;
    font-weight: 500;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7345063025210083) 0%,
    rgba(0, 0, 0, 0) 52%
  );
  position: absolute;
  top: 0;
  left: 0;
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

const PoppularWrap = styled.div`
  margin: 67px 0 130px;
`;
const Title = styled.h3`
  color: #222;
  font-size: 30px;
  font-weight: 700;
`;
const BtnWrap = styled.ul`
  display: flex;
  margin: 27px 0;
  li {
    width: 122px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #222;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
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
  const [nowResult, setNowResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowData } = await nowPlaying();
        setNowResult(nowData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowResult);
  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <>
          (nowResult &&
          <>
            <MainBanners $mainBg={nowResult[0]?.backdrop_path}>
              <Bg />
              <Swiper
                modules={[Pagination]}
                pagination={true}
                className="mainSwiper"
              >
                <SwiperSlide></SwiperSlide>
              </Swiper>
              <h1>{nowResult[0]?.title}</h1>
              <h3>{nowResult[0]?.original_title}</h3>
              <p>{nowResult[0]?.overview.slice(0, 100) + "..."}</p>
            </MainBanners>
          </>
          )
        </>
      )}

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
