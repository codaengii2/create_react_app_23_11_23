import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Loading } from "../../components/Loading";
import { Title, Img, MTitle } from "./Home";
import { Link } from "react-router-dom";

const RatedWrap = styled.div`
  width: 100%;
`;

const RatedCon = styled.div`
  margin-top: 50px;
  position: relative;
  @media screen and (max-width: 680px) {
    margin-top: 15px;
  }
`;

const Num = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 69px;
  height: 97px;
  background-color: rgba(59, 59, 59, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  p {
    font-size: 48px;
  }
  @media screen and (max-width: 1080px) {
    width: 50px;
    height: 80px;
    p {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 480px) {
    p {
      font-size: 24px;
    }
    width: 40px;
    height: 70px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5,
  breakpoints: {
    1440: {
      spaceBetween: 20,
      slidesPerView: 4.5,
    },
    1280: {
      spaceBetween: 15,
      slidesPerView: 4,
    },
    1080: { spaceBetween: 15, slidesPerView: 3.5 },
    640: {
      spaceBetween: 12,
      slidesPerView: 3.2,
    },
    320: {
      slidesPerView: 3,
    },
  },
};

export const TopRated = ({ topResult, titleName, isLoading }) => {
  return (
    <RatedWrap>
      <Title>{titleName}</Title>
      <Swiper {...params}>
        {isLoading ? (
          <Loading />
        ) : (
          topResult && (
            <>
              {topResult.map((top, index) => (
                <SwiperSlide key={top.id}>
                  <RatedCon>
                    <Num>
                      <p>{index + 1}</p>
                    </Num>
                    <Link to={`/detail/${top.id}`}>
                      <Img $movieImg={top.poster_path} />
                    </Link>
                    <MTitle>{top.title}</MTitle>
                  </RatedCon>
                </SwiperSlide>
              ))}
            </>
          )
        )}
      </Swiper>
    </RatedWrap>
  );
};
