import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying, topRated, trendDay, upComing } from "../../api";
import { Layout } from "../../components/Layout";
import { IMG_URL } from "../../constants";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieBanner } from "./MovieBanner";
import { News } from "./News";
import { TopRated } from "./TopRated";
// import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

const PoppularWrap = styled.div`
  margin: 67px 0 130px;
`;
export const Title = styled.h3`
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
    margin-right: 20px;
  }
  li:last-child {
    margin-right: 0;
  }
`;
const DayWrap = styled.div``;
export const Img = styled.div`
  width: 250px;
  height: 343px;
  background: url(${IMG_URL}/w300/${(props) => props.$movieImg}) no-repeat
    center/cover;
`;
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

export const MTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-top: 25px;
  color: #222;
`;

const VideoWrap = styled.div`
  margin: 130px 0;
`;
const VideoConWrap = styled.div`
  height: 480px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const VideoSumnail = styled.div`
  width: 50%;
  background: url(${IMG_URL}/original/${(props) => props.$sumnail}) no-repeat
    left/cover;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
// const SumnailBg = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.3);
// `;

// const PlayBtn = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 100px;
//   color: #fff;
// `;

const VideoTitle = styled.div`
  width: 50%;
  border: 1px solid #e9e9e9;
  border-left: 0;
  padding: 100px 65px 52px;
  h3,
  p {
    color: #222;
  }
  h3 {
    font-size: 48px;
    font-weight: 700;
  }
  p {
    font-size: 28px;
    margin: 25px 0 121px;
    line-height: 34px;
  }
`;

const Button = styled.div`
  width: 187px;
  height: 56px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h3 {
    font-weight: 400;
    color: #fff;
    font-size: 16px;
  }
`;

const params = {
  spaceBetween: 30,
  slidesPerView: 5,
};

export const Home = () => {
  // const { videoId } = useParams();
  const [nowResult, setNowResult] = useState();
  const [upResult, setUpResult] = useState();
  const [dayResult, setDayResult] = useState();
  const [topResult, setTopResult] = useState();
  // const [videoResult, setVideoResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowData } = await nowPlaying();
        setNowResult(nowData);

        const { results: upData } = await upComing();
        setUpResult(upData);

        const { results: dayData } = await trendDay();
        setDayResult(dayData);

        const { results: topData } = await topRated();
        setTopResult(topData);

        // const videoData = await videoFile(videoId);
        // setVideoResult(videoData);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log(nowResult);
  console.log(upResult);
  // console.log(dayResult);
  // console.log(topResult);
  // console.log(videoResult);
  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <>
          <MovieBanner nowResult={nowResult} />

          <Layout>
            <News upResult={upResult} />

            <PoppularWrap>
              <Title>이번달 코챠 유저들이 가장 많이 본 영화는?</Title>
              <BtnWrap>
                <li>실시간</li>
                <li>이번주</li>
                <li>인기</li>
                <li>추천</li>
              </BtnWrap>
              <Swiper {...params}>
                {isLoading
                  ? "loading"
                  : dayResult && (
                      <>
                        {dayResult.map((day) => (
                          <SwiperSlide key={day.id}>
                            <DayWrap>
                              <Img $movieImg={day.poster_path} />
                              <MTitle>{day.title}</MTitle>
                            </DayWrap>
                          </SwiperSlide>
                        ))}
                      </>
                    )}
              </Swiper>

              <WeekWrap></WeekWrap>
              <PopWrap></PopWrap>
              <RecommendWrap></RecommendWrap>
            </PoppularWrap>

            <TopRated titleName={"실시간 영화 순위는?"} topResult={topResult} />

            <VideoWrap>
              <Title>예고편 보러가기!</Title>
              <VideoConWrap>
                <VideoSumnail $sumnail={upResult[0].backdrop_path}>
                  <iframe
                    src="https://www.youtube.com/embed/wm0t8yvDTjE"
                    title="&#39;Trolls Band Together&#39; with filmmakers | Academy Conversations"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  {/* <SumnailBg />
                  <PlayBtn>
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </PlayBtn> */}
                </VideoSumnail>
                <VideoTitle>
                  <h3>{upResult[0].title}</h3>
                  <p>{upResult[0].overview.slice(0, 80) + "..."}</p>
                  <Button>
                    <h3>작품 상세보기</h3>
                  </Button>
                </VideoTitle>
              </VideoConWrap>
            </VideoWrap>
          </Layout>
        </>
      )}
    </>
  );
};

// 예고편 id 요청 => id에 대한 key값 받아오기 => key값을 영상주소에 넣기 ???
// id 값은 upcoming에 포함돼어있음
// videoURL 안에 id값을 요청하면 key 값을 받아올 수 있음
// 받아온 key값을 iframe 주소에 넣으면 해당 영상을 불러올 수 있음
