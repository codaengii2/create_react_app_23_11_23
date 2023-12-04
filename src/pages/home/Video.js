import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { videoFile } from "../../api";
import { IMG_URL } from "../../constants";
import { Title } from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

const VideoWrap = styled.div`
  margin: 130px 0;
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
`;

const VideoSumnail = styled.div`
  width: 50%;
  background: url(${IMG_URL}/original/${(props) => props.$sumnail}) no-repeat
    left/cover;
  position: relative;
  z-index: 0;
  @media screen and (max-width: 1080px) {
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
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
    font-size: 48px;
    font-weight: 700;
  }
  p {
    font-size: 28px;
    margin: 25px 0 121px;
    line-height: 34px;
  }
  @media screen and (max-width: 1080px) {
    width: 100%;
    padding: 0;
    border: 0px solid #e9e9e9;
    h3 {
      font-size: 36px;
      font-weight: 700;
    }
    p {
      font-size: 20px;
      margin: 20px 0 25px;
      line-height: 25px;
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
`;
export const Video = ({ titleName, upResult }) => {
  const [videokey, setVideoKey] = useState();
  useEffect(() => {
    (async () => {
      try {
        const videoId = upResult[1].id;
        const { results: videoResult } = await videoFile(videoId);
        setVideoKey(videoResult);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(videokey);

  const handleThumbnailClick = () => {
    const YOUTUBE_URL = `https://www.youtube.com/watch?v=${videokey[1].key}`;
    window.open(YOUTUBE_URL, "_blank");
  };

  return (
    <VideoWrap>
      <Title>{titleName}</Title>
      <VideoConWrap>
        <VideoSumnail
          $sumnail={upResult[1].backdrop_path}
          onClick={handleThumbnailClick}
        >
          <SumBg />
          <SumPlay>
            <FontAwesomeIcon icon={faPlayCircle} />
          </SumPlay>
        </VideoSumnail>
        <VideoTitle>
          <h3>{upResult[1].title}</h3>
          <p>{upResult[1].overview.slice(0, 80) + "..."}</p>
          <Button>
            <h3>작품 상세보기</h3>
          </Button>
        </VideoTitle>
      </VideoConWrap>
    </VideoWrap>
  );
};
