import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying, search } from "../../api";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { Img, MTitle } from "../home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { IMG_URL } from "../../constants";
import { BtnTop } from "../../components/BtnTop";

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
  @media screen and (max-width: 1080px) {
    margin-top: 61px;
    height: 80px;
    h3 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 320px) {
    h3 {
      font-size: 18px;
    }
  }
`;
const Form = styled.form`
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
  @media screen and (max-width: 1080px) {
    button {
      width: 40px;
    }
  }
  @media screen and (max-width: 960px) {
    input {
      width: 430px;
    }
    button {
      width: 40px;
    }
  }
  @media screen and (max-width: 450px) {
    input {
      width: 250px;
    }
    button {
      width: 40px;
    }
  }
  @media screen and (max-width: 320px) {
    input {
      font-size: 16px;
      width: 200px;
      height: 35px;
    }
    button {
      width: 30px;
      height: 35px;
    }
  }
`;
const FilterWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4,
  p {
    color: #9a9a9a;
  }
`;
const SearchWrap = styled.div`
  margin-top: 50px;
`;
const MGTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
const SearchCon = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
  row-gap: 116px;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 50px;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8px;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
    padding-top: 30px;
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8px;
    row-gap: 40px;
  }
`;

const Con = styled.div``;

const LoadingWrap = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Genre = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const [nowResult, setNowResult] = useState();
  const [term, setTerm] = useState();
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

  const searchHandler = async (data) => {
    const { search: searchQuery } = data;
    try {
      const { results } = await search(searchQuery);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(nowResult);
  // console.log(isLoading);

  return (
    <>
      <PageTitle name={"검색"} />
      <Layout>
        <SubHeader>
          <h3>찾으시는 영화가 있으신가요?</h3>
        </SubHeader>
        <FilterWrap>
          <Form onSubmit={handleSubmit(searchHandler)}>
            <input
              {...register("search", {
                required: "검색 내용을 입력해주세요.",
              })}
              type="text"
            />
            <button $isActive={isValid}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Form>
          <p>{errors?.search?.message}</p>
          <>
            {isLoading ? (
              <LoadingWrap>
                <Loading />
              </LoadingWrap>
            ) : (
              <SearchWrap>
                {term ? (
                  <>
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <SearchCon>
                        {term.map((payload) => (
                          <Con key={payload.id}>
                            <Link to={`/detail/${payload.id}`}>
                              <Img
                                $movieImg={
                                  payload.poster_path
                                    ? `${IMG_URL}/w300/${payload.poster_path}`
                                    : "https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=1060&t=st=1701746907~exp=1701747507~hmac=b1bddd4ade08ce6644e65e6194e7f5794031fe5f2cd436ec8cab83f86a8524ca"
                                }
                              />
                              <MTitle>{payload.title}</MTitle>
                            </Link>
                          </Con>
                        ))}
                      </SearchCon>
                    )}
                  </>
                ) : (
                  <>
                    <MGTitle>현재 상영 인기작</MGTitle>
                    <SearchCon>
                      {nowResult.map((now) => (
                        <Con key={now.id}>
                          <Link to={`/detail/${now.id}`}>
                            <Img
                              $movieImg={
                                now.poster_path
                                  ? `${IMG_URL}/w300/${now.poster_path}`
                                  : "https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=1060&t=st=1701746907~exp=1701747507~hmac=b1bddd4ade08ce6644e65e6194e7f5794031fe5f2cd436ec8cab83f86a8524ca"
                              }
                            />
                            <MTitle>{now.title}</MTitle>
                          </Link>
                        </Con>
                      ))}
                    </SearchCon>
                  </>
                )}
              </SearchWrap>
            )}
          </>
        </FilterWrap>
        <BtnTop />
      </Layout>
    </>
  );
};

// => 장르 카테고리 종류 api만 있음
