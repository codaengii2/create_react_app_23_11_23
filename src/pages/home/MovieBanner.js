import styled from "styled-components";
import { IMG_URL } from "../../constants";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const MainBanners = styled.div`
  width: 100%;
  height: 909px;
  position: relative;
  z-index: 0;
  padding: 565px 122px 0;
  background: url(${IMG_URL}/original/${(props) => props.$mainBg}) no-repeat
    center/cover;
  h1,
  h3,
  p {
    position: relative;
    z-index: 3;
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
    line-height: 25px;
  }
  @media screen and (max-width: 1440px) {
    padding: 500px 122px 0;
  }
  @media screen and (max-width: 1080px) {
    padding: 500px 122px 0;
    h1 {
      font-size: 60px;
    }
    h3 {
      font-size: 30px;
    }
    p {
      width: 60%;
    }
  }
  @media screen and (max-width: 960px) {
    padding: 550px 60px 0;
    h1 {
      font-size: 36px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      width: 100%;
    }
  }
  @media screen and (max-width: 680px) {
    width: 100%;
    height: 568px;
    padding: 300px 60px 0;
    h3 {
      margin: 10px 0;
    }
    p {
      font-size: 16px;
      width: 60vw;
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 300px 17px 0;
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
  z-index: 2;
`;

export const MovieBanner = ({ nowResult }) => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        className="mainSwiper"
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide key={nowResult[0].id}>
          <MainBanners $mainBg={nowResult[0].backdrop_path}>
            <h1>{nowResult[0].title}</h1>
            <h3>{nowResult[0].original_title}</h3>
            <p>{nowResult[0].overview.slice(0, 100) + "..."}</p>
            <Bg />
          </MainBanners>
        </SwiperSlide>
        <SwiperSlide key={nowResult[1].id}>
          <MainBanners $mainBg={nowResult[1].backdrop_path}>
            <h1>{nowResult[1].title}</h1>
            <h3>{nowResult[1].original_title}</h3>
            <p>{nowResult[1].overview.slice(0, 100) + "..."}</p>
            <Bg />
          </MainBanners>
        </SwiperSlide>
        <SwiperSlide key={nowResult[2].id}>
          <MainBanners $mainBg={nowResult[2].backdrop_path}>
            <h1>{nowResult[2].title}</h1>
            <h3>{nowResult[2].original_title}</h3>
            <p>{nowResult[2].overview.slice(0, 100) + "..."}</p>
            <Bg />
          </MainBanners>
        </SwiperSlide>
        <SwiperSlide key={nowResult[3].id}>
          <MainBanners $mainBg={nowResult[3].backdrop_path}>
            <h1>{nowResult[3].title}</h1>
            <h3>{nowResult[3].original_title}</h3>
            <p>{nowResult[3].overview.slice(0, 100) + "..."}</p>
            <Bg />
          </MainBanners>
        </SwiperSlide>
        <SwiperSlide key={nowResult[4].id}>
          <MainBanners $mainBg={nowResult[4].backdrop_path}>
            <h1>{nowResult[4].title}</h1>
            <h3>{nowResult[4].original_title}</h3>
            <p>{nowResult[4].overview.slice(0, 100) + "..."}</p>
            <Bg />
          </MainBanners>
        </SwiperSlide>
        <SwiperSlide key={nowResult[5].id}>
          <MainBanners $mainBg={nowResult[5].backdrop_path}>
            <h1>{nowResult[5].title}</h1>
            <h3>{nowResult[5].original_title}</h3>
            <p>{nowResult[5].overview.slice(0, 100) + "..."}</p>
            <Bg />
          </MainBanners>
        </SwiperSlide>
        <SwiperSlide key={nowResult[6].id}>
          <MainBanners $mainBg={nowResult[6].backdrop_path}>
            <h1>{nowResult[6].title}</h1>
            <h3>{nowResult[6].original_title}</h3>
            <p>{nowResult[6].overview.slice(0, 100) + "..."}</p>
            <Bg />
          </MainBanners>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
