import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying } from "../../api";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { Img, MTitle } from "../home/Home";

const SubHeader = styled.div`
  margin-top: 75px;
  position: relative;
  height: 111px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  h3 {
    color: #222;
    font-size: 30px;
    font-weight: 700;
  }
`;
const FilterWrap = styled.div`
  position: relative;
  display: flex;
  h4,
  p {
    color: #222;
  }
`;
const FilterLeft = styled.div`
  width: 337px;
  height: 100%;
  padding-right: 93px;
  padding-top: 77px;
  padding-bottom: 77px;
`;
const FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #797979;
  }
`;
const GenreTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 25px;
  p {
    color: #797979;
  }
`;
const GenreWrap = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  li:last-child {
    margin-bottom: 0;
  }
  input {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    margin-right: 15px;
  }
`;
const LocationTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 25px;
  p {
    color: #797979;
  }
`;
const LocationWrap = styled.ul`
  li {
    display: flex;
    margin-bottom: 20px;
  }
  li:last-child {
    margin-bottom: 0;
  }
  input {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    margin-right: 15px;
  }
`;

const FilterRight = styled.div`
  width: calc(100% - 337px);
  height: 100%;
  padding-right: 93px;
  padding-top: 77px;
  padding-bottom: 77px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 116px;
`;

const Con = styled.div``;

const LoadingWrap = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Genre = () => {
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

  // console.log(nowResult);
  // console.log(isLoading);

  return (
    <Layout>
      <SubHeader>
        <h3>태그검색</h3>
      </SubHeader>
      <FilterWrap>
        <FilterLeft>
          <FilterTitle>
            <h4>필터</h4>
            <p>초기화</p>
          </FilterTitle>
          <GenreTitle>
            <h4>장르</h4>
            <p>더보기</p>
          </GenreTitle>
          <GenreWrap>
            <li>
              <input type="checkbox" />
              <p>드라마</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>액션</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>스릴러</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>공포</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>코미디</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>SF</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>애니메이션</p>
            </li>
          </GenreWrap>
          <LocationTitle>
            <h4>지역</h4>
            <p>더보기</p>
          </LocationTitle>
          <LocationWrap>
            <li>
              <input type="checkbox" />
              <p>국내</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>해외</p>
            </li>
          </LocationWrap>
        </FilterLeft>
        <FilterRight>
          {isLoading ? (
            <LoadingWrap>
              <Loading />
            </LoadingWrap>
          ) : (
            <>
              {nowResult.map((now) => (
                <Con key={now.id}>
                  <Img $movieImg={now.poster_path} />
                  <MTitle>{now.title}</MTitle>
                </Con>
              ))}
            </>
          )}
        </FilterRight>
      </FilterWrap>
    </Layout>
  );
};

// => 장르 카테고리 종류 api만 있음
