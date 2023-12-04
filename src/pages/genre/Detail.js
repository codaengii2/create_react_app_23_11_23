import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { movieDetail } from "../../api";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";

const DetailWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 100px 0 50px;
  p {
    color: #222;
  }
  @media screen and (max-width: 450px) {
    margin: 50px 0 0;
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
`;
const DetailTop = styled.div`
  height: 557px;
  position: relative;
  z-index: 0;
  @media screen and (max-width: 450px) {
    height: 300px;
  }
`;
const DetailImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${IMG_URL}/original/${(props) => props.$detailBg}) no-repeat
    center/cover;
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
  @media screen and (max-width: 960px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 680px) {
    padding: 0 40px;
  }
`;
const ConTitle = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
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
`;

export const Detail = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  const [isloading, setIsLoading] = useState(true);

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

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <DetailWrap>
          <DetailCon>
            <DetailTop>
              <DetailImg $detailBg={dataDetail?.backdrop_path} />
              <Con>
                <ConTitle>{dataDetail?.title}</ConTitle>
                <FontAwesomeIcon icon={faHeart} />
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
                  <p>{dataDetail?.overview}</p>
                </DesConRight>
              </DesRight>
            </DetailDes>
          </DetailCon>
        </DetailWrap>
      )}
    </>
  );
};
