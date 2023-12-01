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
import { Video } from "./Video";
import { Loading } from "../../components/Loading";
// import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

const PoppularWrap = styled.div`
  margin: 67px 0 130px;
  input:nth-child(1):checked ~ .daywrap {
    display: block;
  }
  input:nth-child(2):checked ~ .weekwrap {
    display: block;
  }
  input:nth-child(3):checked ~ .popwrap {
    display: block;
  }
`;

export const Title = styled.h3`
  color: #222;
  font-size: 30px;
  font-weight: 700;
`;
const BtnWrap = styled.div`
  display: flex;
  margin: 27px 0;
  label {
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
  label:last-child {
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
const WeekWrap = styled.div``;
const PopWrap = styled.div``;

export const MTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-top: 25px;
  color: #222;
`;

const params = {
  spaceBetween: 30,
  slidesPerView: 5,
};

export const Home = () => {
  // const { videoId } = useParams();
  const [nowResult, setNowResult] = useState();
  const [upResult, setUpResult] = useState();
  const [popResult, setPopResult] = useState();
  const [dayResult, setDayResult] = useState();
  const [weekResult, setWeekResult] = useState();
  const [topResult, setTopResult] = useState();
  // const [videoResult, setVideoResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [select, setSelect] = useState("dayinput");
  const [menuSelect, setMenuSelect] = useState(false);

  const handleInput = (e) => {
    setSelect(e.target.value);
    setMenuSelect(true);
  };

  useEffect(() => {
    (async () => {
      try {
        const { results: nowData } = await nowPlaying();
        setNowResult(nowData);

        const { results: upData } = await upComing();
        setUpResult(upData);

        const { results: popData } = await upComing();
        setPopResult(popData);

        const { results: dayData } = await trendDay();
        setDayResult(dayData);

        const { results: weekData } = await trendDay();
        setWeekResult(weekData);

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
  // console.log(upResult);
  // console.log(dayResult);
  // console.log(weekResult);
  // console.log(popResult);
  // console.log(topResult);
  // console.log(videoResult);
  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MovieBanner nowResult={nowResult} />

          <Layout>
            <News upResult={upResult} />

            <PoppularWrap>
              <Title>이번달 코챠 유저들이 가장 많이 본 영화는?</Title>
              <input
                type="radio"
                id="dayinput"
                value="dayinput"
                name="pop"
                checked={setSelect === "dayinput"}
                onChange={handleInput}
              />
              <input
                type="radio"
                id="weekinput"
                value="weekinput"
                name="pop"
                checked={setSelect === "weekinput"}
                onChange={handleInput}
              />
              <input
                type="radio"
                id="popinput"
                value="popinput"
                name="pop"
                checked={setSelect === "popinput"}
                onChange={handleInput}
              />
              <BtnWrap>
                <label htmlFor="dayinput">실시간</label>
                <label htmlFor="weekinput">이번주</label>
                <label htmlFor="popinput">인기</label>
              </BtnWrap>
              {menuSelect && (
                <>
                  {select === "dayinput" && (
                    <Swiper {...params}>
                      {isLoading
                        ? "loading"
                        : dayResult && (
                            <>
                              {dayResult.map((day) => (
                                <SwiperSlide key={day.id}>
                                  <DayWrap className="daywrap">
                                    <Img $movieImg={day.poster_path} />
                                    <MTitle>{day.title}</MTitle>
                                  </DayWrap>
                                </SwiperSlide>
                              ))}
                            </>
                          )}
                    </Swiper>
                  )}
                  {select === "weekinput" && (
                    <Swiper {...params}>
                      {isLoading
                        ? "loading"
                        : dayResult && (
                            <>
                              {weekResult.map((week) => (
                                <SwiperSlide key={week.id}>
                                  <WeekWrap className="weekwrap">
                                    <Img $movieImg={week.poster_path} />
                                    <MTitle>{week.title}</MTitle>
                                  </WeekWrap>
                                </SwiperSlide>
                              ))}
                            </>
                          )}
                    </Swiper>
                  )}

                  {select === "popinput" && (
                    <Swiper {...params}>
                      {isLoading
                        ? "loading"
                        : dayResult && (
                            <>
                              {popResult.map((pop) => (
                                <SwiperSlide key={pop.id}>
                                  <PopWrap className="popwrap">
                                    <Img $movieImg={pop.poster_path} />
                                    <MTitle>{pop.title}</MTitle>
                                  </PopWrap>
                                </SwiperSlide>
                              ))}
                            </>
                          )}
                    </Swiper>
                  )}
                </>
              )}
            </PoppularWrap>

            <TopRated titleName={"실시간 영화 순위는?"} topResult={topResult} />

            <Video titleName={"예고편 미리보기!"} upResult={upResult} />
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
