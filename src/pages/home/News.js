import styled from "styled-components";
import { IMG_URL } from "../../constants";

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
  }
  h4 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const News = ({ upResult }) => {
  return (
    <NewWrap>
      <NewsConWrap>
        <ConBg $newsBg={upResult[0]?.poster_path} />
        <ConBottom>
          <p>{upResult[0]?.overview.slice(0, 30)}</p>
          <h4>{upResult[0]?.title}</h4>
        </ConBottom>
      </NewsConWrap>
      <NewsConWrap>
        <ConBg $newsBg={upResult[1]?.poster_path} />
        <ConBottom>
          <p>{upResult[1]?.overview.slice(0, 30)}</p>
          <h4>{upResult[1]?.title}</h4>
        </ConBottom>
      </NewsConWrap>
      <NewsConWrap>
        <ConBg $newsBg={upResult[2]?.poster_path} />
        <ConBottom>
          <p>{upResult[2]?.overview.slice(0, 29)}</p>
          <h4>{upResult[2]?.title}</h4>
        </ConBottom>
      </NewsConWrap>
    </NewWrap>
  );
};
