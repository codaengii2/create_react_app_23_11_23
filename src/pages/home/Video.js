import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Title } from "./Home";

const VideoWrap = styled.div`
  margin: 130px 0;
`;
const VideoConWrap = styled.div`
  height: 480px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const VideoSumnail = styled.div`
  width: 50%;
  background: url(${IMG_URL}/original/${(props) => props.$sumnail}) no-repeat
    left/cover;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
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
  return (
    <VideoWrap>
      <Title>{titleName}</Title>
      <VideoConWrap>
        <VideoSumnail $sumnail={upResult[0].backdrop_path}>
          <iframe
            src="https://www.youtube.com/embed/wm0t8yvDTjE"
            title="&#39;Trolls Band Together&#39; with filmmakers | Academy Conversations"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoSumnail>
        <VideoTitle>
          <h3>{upResult[0].title}</h3>
          <p>{upResult[0].overview.slice(0, 80) + "..."}</p>
          <Button>
            <h3>작품 상세보기</h3>
          </Button>
        </VideoTitle>
      </VideoConWrap>
    </VideoWrap>
  );
};
