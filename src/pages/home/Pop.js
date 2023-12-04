import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Img, MTitle, Title } from "./Home";

const PoppularWrap = styled.div`
  margin: 67px 0 130px;
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

const WeekWrap = styled.div``;
const PopWrap = styled.div``;

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
    1080: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    640: {
      spaceBetween: 12,
      slidesPerView: 3.5,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.2,
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
    console.log(e);
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
  );
};
