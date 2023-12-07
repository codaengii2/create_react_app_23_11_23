import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { videoFile } from "../../api";
import { IMG_URL } from "../../constants";
import { Title } from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const VideoWrap = styled.div`
  margin: 130px 0;
  @media screen and (max-width: 450px) {
    margin: 70px 0;
  }
`;
const VideoConWrap = styled.div`
  height: 480px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
  @media screen and (max-width: 680px) {
    margin-top: 15px;
  }
`;

const VideoSumnail = styled.div`
  width: 50%;
  background: url(${(props) => props.$sumnail}) no-repeat left/cover;
  position: relative;
  z-index: 0;
  @media screen and (max-width: 1080px) {
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 200px;
    margin-bottom: 30px;
  }
`;

const SumBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.5);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

const SumPlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 70px;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    font-size: 80px;
  }
`;

const VideoTitle = styled.div`
  width: 50%;
  border: 1px solid #e9e9e9;
  border-left: 0;
  padding: 100px 65px 52px;
  h3,
  p {
    color: #222;
  }
  h3 {
    font-size: 40px;
    font-weight: 700;
  }
  p {
    height: 100px;
    overflow: hidden;
    font-size: 24px;
    margin: 25px 0 80px;
    line-height: 34px;
  }
  @media screen and (max-width: 1080px) {
    width: 100%;
    padding: 0;
    border: 0px solid #e9e9e9;
    h3 {
      font-size: 24px;
      font-weight: 700;
    }
    p {
      height: auto;
      font-size: 18px;
      margin: 20px 0;
      line-height: 25px;
    }
  }
  @media screen and (max-width: 680px) {
    h3 {
      font-size: 20px;
      font-weight: 700;
    }
    p {
      font-size: 16px;
      margin: 18px 0 20px;
      line-height: 20px;
    }
  }
`;

const Button = styled.div`
  width: 187px;
  height: 56px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h3 {
    font-weight: 400;
    color: #fff;
    font-size: 16px;
  }
  @media screen and (max-width: 680px) {
    width: 120px;
    height: 40px;
    h3 {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

// const Modal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1000;
//   width: 500px;
//   height: 500px;
//   background-color: red;
//   /* display: ${(props) => (props.$isVisible ? "block" : "none")}; */
// `;
// const MoCon = styled.div`
//   width: 100%;
//   height: 100%;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
// const Close = styled.span`
//   position: absolute;
//   right: 5px;
//   top: 5px;
//   z-index: 100;
//   cursor: pointer;
//   font-size: 20px;
//   color: #222;
// `;
export const Video = ({ titleName, upResult }) => {
  const [videokey, setVideoKey] = useState();
  useEffect(() => {
    (async () => {
      try {
        const videoId = upResult[0].id;
        const { results: videoResult } = await videoFile(videoId);
        setVideoKey(videoResult);
      } catch (error) {
        console.log(error);
        setVideoKey(false);
      }
    })();
  }, [upResult]);

  const handleThumbnailClick = () => {
    let selectedKey = null;
    if (videokey && videokey.length > 0) {
      //videokey의 배열이 존재할 때
      if (videokey[0]?.key) {
        selectedKey = videokey[0].key;
      } else if (videokey[1]?.key) {
        selectedKey = videokey[1].key;
      }
    }

    if (selectedKey) {
      const YOUTUBE_URL = `https://www.youtube.com/watch?v=${selectedKey}`;
      window.open(YOUTUBE_URL, "_blank");
    } else {
      const noVideo =
        "https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=1060&t=st=1701746907~exp=1701747507~hmac=b1bddd4ade08ce6644e65e6194e7f5794031fe5f2cd436ec8cab83f86a8524ca";
      window.open(noVideo, "_blank");
    }
  };

  return (
    <VideoWrap>
      <Title>{titleName}</Title>
      <VideoConWrap>
        <VideoSumnail
          $sumnail={
            upResult[0].backdrop_path
              ? `${IMG_URL}/original/${upResult[0].backdrop_path}`
              : "https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=1060&t=st=1701746907~exp=1701747507~hmac=b1bddd4ade08ce6644e65e6194e7f5794031fe5f2cd436ec8cab83f86a8524ca"
          }
          onClick={handleThumbnailClick}
        >
          {/* <Modal>
            <MoCon>
              <Close></Close>
              <img src="" />
            </MoCon>
          </Modal> */}
          <SumBg />
          <SumPlay>
            <FontAwesomeIcon icon={faPlayCircle} />
          </SumPlay>
        </VideoSumnail>
        <VideoTitle>
          <h3>{upResult[0].title}</h3>
          <p>
            {upResult[0]?.overview
              ? `${upResult[0].overview.slice(0, 80) + "..."}`
              : "[줄거리 없음]"}
          </p>
          <Link to={`/detail/${upResult[0].id}`}>
            <Button>
              <h3>작품 상세보기</h3>
            </Button>
          </Link>
        </VideoTitle>
      </VideoConWrap>
    </VideoWrap>
  );
};
