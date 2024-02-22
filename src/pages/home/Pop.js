import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Img, MTitle, Title } from "./Home";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../constants";

const PoppularWrap = styled.div`
  margin: 67px 0 130px;
  @media screen and (max-width: 450px) {
    margin: 70px 0;
  }
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
  @media screen and (max-width: 680px) {
    label {
      width: 100px;
      height: 40px;
      margin-right: 10px;
      font-size: 16px;
    }
    margin: 15px 0;
  }
`;

const WeekWrap = styled.div``;
const PopWrap = styled.div``;

const params = {
  spaceBetween: 20,
  slidesPerView: 5,
  breakpoints: {
    //min-width 기준임
    1760: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 5.1,
    },
    1280: {
      spaceBetween: 15,
      slidesPerView: 4,
    },
    1080: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    760: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    640: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
    300: {
      spaceBetween: 8,
      slidesPerView: 2.9,
    },
    280: {
      spaceBetween: 8,
      slidesPerView: 2.3,
    },
  },
};
const DayWrap = styled.div``;
export const Pop = ({ dayResult, weekResult, popResult, isLoading }) => {
  const [select, setSelect] = useState("dayinput");
  const [menuSelect, setMenuSelect] = useState(true);

  const handleInput = (e) => {
    setSelect(e.target.value);
    setMenuSelect(true);
  };
  return (
    <PoppularWrap>
      <Title>이번달 코챠 유저들이 가장 많이 본 영화는?</Title>
      <input
        type="radio"
        id="dayinput"
        value="dayinput"
        name="pop"
        checked={setSelect === "checked"}
        onChange={handleInput}
      />
      <input
        type="radio"
        id="weekinput"
        value="weekinput"
        name="pop"
        // checked={setSelect === "weekinput"}
        onChange={handleInput}
      />
      <input
        type="radio"
        id="popinput"
        value="popinput"
        name="pop"
        // checked={setSelect === "popinput"}
        onChange={handleInput}
      />
      <BtnWrap>
        <label
          style={{
            color: select === "dayinput" ? "#fff" : "#222",
            backgroundColor: select === "dayinput" ? "#222" : "#fff",
          }}
          htmlFor="dayinput"
        >
          실시간
        </label>

        <label
          style={{
            color: select === "weekinput" ? "#fff" : "#222",
            background: select === "weekinput" ? "#222" : "#fff",
          }}
          htmlFor="weekinput"
        >
          이번주
        </label>
        <label
          style={{
            color: select === "popinput" ? "#fff" : "#222",
            background: select === "popinput" ? "#222" : "#fff",
          }}
          htmlFor="popinput"
        >
          인기
        </label>
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
                            <Link to={`/detail/${day.id}`}>
                              <Img
                                $movieImg={
                                  day.poster_path
                                    ? `${IMG_URL}/w300/${day.poster_path}`
                                    : "https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=1060&t=st=1701746907~exp=1701747507~hmac=b1bddd4ade08ce6644e65e6194e7f5794031fe5f2cd436ec8cab83f86a8524ca"
                                }
                              />
                              <MTitle>{day.title}</MTitle>
                            </Link>
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
                            <Link to={`/detail/${week.id}`}>
                              <Img
                                $movieImg={
                                  week.poster_path
                                    ? `${IMG_URL}/w300/${week.poster_path}`
                                    : "https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=1060&t=st=1701746907~exp=1701747507~hmac=b1bddd4ade08ce6644e65e6194e7f5794031fe5f2cd436ec8cab83f86a8524ca"
                                }
                              />
                              <MTitle>{week.title}</MTitle>
                            </Link>
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
                            <Link to={`/detail/${pop.id}`}>
                              <Img
                                $movieImg={
                                  pop.poster_path
                                    ? `${IMG_URL}/w300/${pop.poster_path}`
                                    : "https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=1060&t=st=1701746907~exp=1701747507~hmac=b1bddd4ade08ce6644e65e6194e7f5794031fe5f2cd436ec8cab83f86a8524ca"
                                }
                              />
                              <MTitle>{pop.title}</MTitle>
                            </Link>
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
  );
};
