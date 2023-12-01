import { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Loading } from "../../components/Loading";
import { Title, Img, MTitle } from "./Home";

const RatedWrap = styled.div`
  width: 100%;
`;

const RatedCon = styled.div`
  margin-top: 50px;
  position: relative;
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
`;

const params = {
  spaceBetween: 30,
  slidesPerView: 5,
};

export const TopRated = ({ topResult, titleName }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log(isLoading);

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
                    <Img $movieImg={top.poster_path} />
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
