import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying } from "../../api";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { Img, MTitle } from "../home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
const Search = styled.div`
  margin: 50px 0 30px;
  display: flex;
  align-items: center;
  input {
    display: block;
    all: unset;
    width: 500px;
    height: 40px;
    border-radius: 40px 0 0 40px;
    border: 1px solid #aaa;
    border-right: 0;
    font-size: 18px;
    padding-left: 20px;
  }
  button {
    all: unset;
    width: 30px;
    height: 40px;
    border-radius: 0 40px 40px 0;
    border: 1px solid #aaa;
    border-left: 0;
    cursor: pointer;
  }
`;
const FilterWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4,
  p {
    color: #222;
  }
`;

const FilterRight = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 77px;
  padding-bottom: 77px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
  row-gap: 116px;
`;

const Con = styled.div``;

const LoadingWrap = styled.div`
  width: 100vw;
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
        <h3>찾으시는 영화가 있으신가요?</h3>
      </SubHeader>
      <FilterWrap>
        <Search>
          <input type="text" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Search>
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
