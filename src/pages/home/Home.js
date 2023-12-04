import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying, topRated, trendDay, upComing } from "../../api";
import { Layout } from "../../components/Layout";
import { IMG_URL } from "../../constants";
import "swiper/css";
import "swiper/css/pagination";

import { MovieBanner } from "./MovieBanner";
import { News } from "./News";
import { TopRated } from "./TopRated";
import { Video } from "./Video";
import { Loading } from "../../components/Loading";
import { Pop } from "./Pop";
// import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

export const Title = styled.h3`
  color: #222;
  font-size: 30px;
  font-weight: 700;
`;

export const Img = styled.div`
  width: 260px;
  height: 343px;
  background: url(${IMG_URL}/w300/${(props) => props.$movieImg}) no-repeat
    center/cover;
  @media screen and (max-width: 1280px) {
    width: 240px;
    height: 320px;
  }
  @media screen and (max-width: 1080px) {
    width: 200px;
    height: 300px;
  }
  @media screen and (max-width: 960px) {
    width: 180px;
    height: 280px;
  }
  @media screen and (max-width: 640px) {
    width: 180px;
    height: 280px;
  }
  @media screen and (max-width: 320px) {
    width: 180px;
    height: 280px;
  }
`;

export const MTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-top: 25px;
  color: #222;
  line-height: 30px;
`;

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

            <Pop
              titleName={"이번달 코챠 유저들이 가장 많이 본 영화는?"}
              dayResult={dayResult}
              weekResult={weekResult}
              popResult={popResult}
              isLoading={isLoading}
            />

            <TopRated
              titleName={"실시간 영화 순위는?"}
              topResult={topResult}
              isLoading={isLoading}
            />

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
