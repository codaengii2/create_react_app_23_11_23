import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";

const NewWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NewsConWrap = styled.div`
  width: 100%;
  position: relative;
  top: -43px;
  height: 624px;
  z-index: 2;
  &:nth-child(2) {
    margin: 0 53.5px;
  }
  h4,
  p {
    position: relative;
    color: #fff;
  }
  @media screen and (max-width: 1440px) {
    height: 500px;
    &:nth-child(2) {
      margin: 0 40px;
    }
  }
  @media screen and (max-width: 1280px) {
    height: 400px;
    &:nth-child(2) {
      margin: 0 30px;
    }
  }
  @media screen and (max-width: 1080px) {
    position: relative;
    top: 0px;
    height: 300px;
    margin-top: 50px;
    &:nth-child(2) {
      margin: 50px 30px;
    }
  }
  @media screen and (max-width: 960px) {
    height: 280px;
    margin-top: 50px;
    &:nth-child(2) {
      margin: 50px 15px;
    }
  }
  @media screen and (max-width: 680px) {
    height: 250px;
  }
  @media screen and (max-width: 450px) {
    height: 161px;
  }
`;
const ConBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightblue;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${IMG_URL}/w500/${(props) => props.$newsBg}) no-repeat
    center/cover;
`;
const ConBottom = styled.div`
  width: 100%;
  height: 159px;
  background-color: rgba(59, 59, 59, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 53px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  p {
    font-weight: 700;
    line-height: 20px;
  }
  h4 {
    font-size: 20px;
    font-weight: 700;
  }
  @media screen and (max-width: 1440px) {
    height: 150px;
    padding: 35px 30px;
    p {
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1280px) {
    height: 120px;
    padding: 22px 25px;
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1080px) {
    height: 100px;
    padding: 22px 0;
    h4 {
      color: #222;
    }
    position: relative;
    top: 300px;
    background-color: transparent;
    p {
      font-size: 16px;
      font-weight: 500;
      display: none;
    }
  }

  @media screen and (max-width: 960px) {
    top: 300px;
    padding: 0;
    h4 {
      font-size: 16px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 680px) {
    top: 260px;
  }
  @media screen and (max-width: 450px) {
    top: 170px;
  }
`;

export const News = ({ upResult }) => {
  return (
    <NewWrap>
      <NewsConWrap>
        <Link to={`/detail/${upResult[0].id}`}>
          <ConBg $newsBg={upResult[0]?.poster_path} />
          <ConBottom>
            <p>{upResult[0]?.overview.slice(0, 30)}</p>
            <h4>{upResult[0]?.title}</h4>
          </ConBottom>
        </Link>
      </NewsConWrap>
      <NewsConWrap>
        <Link to={`/detail/${upResult[1].id}`}>
          <ConBg $newsBg={upResult[1]?.poster_path} />
          <ConBottom>
            <p>{upResult[1]?.overview.slice(0, 28)}</p>
            <h4>{upResult[1]?.title}</h4>
          </ConBottom>
        </Link>
      </NewsConWrap>
      <NewsConWrap>
        <Link to={`/detail/${upResult[2].id}`}>
          <ConBg $newsBg={upResult[2]?.poster_path} />
          <ConBottom>
            <p>{upResult[2]?.overview.slice(0, 29)}</p>
            <h4>{upResult[2]?.title}</h4>
          </ConBottom>
        </Link>
      </NewsConWrap>
    </NewWrap>
  );
};
