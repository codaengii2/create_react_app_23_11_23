import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { movieDetail } from "../../api";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { useScroll } from "../../lib/useScroll";
import { PageTitle } from "../../components/PageTitle";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DetailWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 150px 0 50px;
  p {
    color: #222;
  }
  @media screen and (max-width: 1024px) {
    margin: 200px 0;
    height: 90vh;
  }

  @media screen and (max-width: 960px) {
    margin: 50px 0 10px;
  }
  @media screen and (max-width: 680px) {
    margin: 200px 0 100px;
    height: 100vh;
  }

  @media screen and (max-width: 450px) {
    margin: 0;
    height: 80vh;
  }
  @media screen and (max-width: 400px) {
    margin: 100px 0 80px;
    height: 80vh;
  }
`;

const DetailCon = styled.div`
  width: 80vw;
  height: 813px;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    height: auto;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    border-radius: 0;
  }
`;
const DetailTop = styled.div`
  height: 557px;
  position: relative;
  z-index: 0;
  @media screen and (max-width: 450px) {
    height: 300px;
  }
  @media screen and (max-width: 320px) {
    height: 250px;
  }
`;

// const BackBtn = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;
//   color: #fff;
//   width: 20px;
//   height: 20px;
//   background-color: red;
// `;
const DetailImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.$detailBg}) no-repeat center/cover;
  position: relative;
`;
const Con = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
  z-index: 2;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 88px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
  }
  div p {
    margin-top: 8px;
    color: #fff;
    white-space: nowrap;
  }
  @media screen and (max-width: 960px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 680px) {
    bottom: 30px;
    padding: 0 40px;
  }

  @media screen and (max-width: 450px) {
    div p {
      font-size: 14px;
    }
  }
`;
const ConTitle = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 450px) {
    font-size: 24px;
  }
`;
const DetailDes = styled.div`
  width: 100%;
  height: calc(100% - 557px);
  display: flex;
  padding: 50px 88px 0;
  border: 1px solid #e9e9e9;
  border-top: 0;
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 960px) {
    padding: 50px 60px;
  }
  @media screen and (max-width: 680px) {
    padding: 50px 40px;
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    height: calc(100% - 300px);
    border-radius: 0;
    border: 0;
  }
`;
const DesLeft = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;
const DesTitleLeft = styled.div`
  li {
    margin-bottom: 20px;
  }
  margin-right: 50px;
  font-weight: 700;
  @media screen and (max-width: 960px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 450px) {
    li {
      white-space: nowrap;
    }
    margin-right: 15px;
  }
`;
const DesConLeft = styled.div`
  ul {
    display: flex;
  }
  p {
    margin-top: 20px;
  }
  @media screen and (max-width: 450px) {
    li {
      white-space: nowrap;
    }
  }
`;

const DesRight = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
const DesTitleRight = styled.div`
  white-space: nowrap;
  margin-right: 30px;
  font-weight: 700;
  @media screen and (max-width: 450px) {
    p {
      white-space: nowrap;
      margin-bottom: 10px;
    }
  }
`;
const DesConRight = styled.div`
  line-height: 20px;
  @media screen and (max-width: 1080px) {
    p {
      overflow-y: scroll;
      height: 150px;
    }
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  const [isloading, setIsLoading] = useState(true);
  useScroll();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setDataDetail(data);
        setIsLoading(false);
      } catch (error) {}
    })();
  }, [id]);
  // console.log(isloading);

  const heartClick = () => {};

  return (
    <>
      <PageTitle name={"상세"} />
      {isloading ? (
        <Loading />
      ) : (
        <DetailWrap>
          <DetailCon>
            <DetailTop>
              {/* <BackBtn>
                <FontAwesomeIcon icon={faArrowLeft} />
              </BackBtn> */}
              <DetailImg
                $detailBg={
                  dataDetail?.backdrop_path
                    ? `${IMG_URL}/original/${dataDetail.backdrop_path}`
                    : "https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=1060&t=st=1701746907~exp=1701747507~hmac=b1bddd4ade08ce6644e65e6194e7f5794031fe5f2cd436ec8cab83f86a8524ca"
                }
              />
              <Con>
                <ConTitle>{dataDetail?.title}</ConTitle>
                <div>
                  <FontAwesomeIcon icon={faHeart} onClick={heartClick} />
                  <p>내 작품</p>
                </div>
              </Con>
            </DetailTop>
            <DetailDes>
              <DesLeft>
                <DesTitleLeft>
                  <li>장르</li>
                  <li>러닝타임</li>
                  <li>평점</li>
                </DesTitleLeft>
                <DesConLeft>
                  <ul>
                    {dataDetail?.genres.map((data) => (
                      <li key={data.id}>{data.name} &nbsp; </li>
                    ))}
                  </ul>
                  <p>{dataDetail?.runtime}분</p>
                  <p>{Math.round(dataDetail?.vote_average)}</p>
                </DesConLeft>
              </DesLeft>
              <DesRight>
                <DesTitleRight>
                  <p>줄거리</p>
                </DesTitleRight>
                <DesConRight>
                  <p>
                    {/* {dataDetail?.overview || "[줄거리 없음]"} */}
                    {dataDetail?.overview
                      ? `${dataDetail?.overview}`
                      : "[줄거리 없음]"}
                  </p>
                </DesConRight>
              </DesRight>
            </DetailDes>
          </DetailCon>
        </DetailWrap>
      )}
    </>
  );
};
