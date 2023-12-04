import {
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const SFooter = styled.footer`
  width: 100%;
  padding: 50px 122px;
  height: 187px;
  background-color: #101010;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 960px) {
    padding: 50px 60px;
  }

  @media screen and (max-width: 680px) {
    padding: 50px 17px;
    height: auto;
    align-items: flex-start;
  }
`;
const FootWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FootMain = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;
const FLogo = styled.div`
  font-size: 30px;
  font-weight: 700;
  a {
    color: #fff;
  }
`;
const FootMenuWrap = styled.ul`
  display: flex;
  li {
    margin-left: 30px;
    cursor: pointer;
  }
  li:nth-child(1) {
    margin-left: 56px;
  }
  @media screen and (max-width: 680px) {
    flex-direction: column;
    li {
      margin-left: 0;
      cursor: pointer;
      margin-bottom: 10px;
    }
    li:nth-child(1) {
      margin-left: 0;
      margin-top: 50px;
    }
    li:last-child {
      margin-bottom: 50px;
    }
  }
`;
const SnsWrap = styled.ul`
  display: flex;
  li {
    font-size: 20px;
    cursor: pointer;
  }
  li:nth-child(2) {
    margin: 0 18px;
  }
  @media screen and (max-width: 680px) {
    margin-bottom: 20px;
  }
`;
const Bottom = styled.select`
  all: unset;
`;

export const Footer = () => {
  return (
    <SFooter>
      <FootWrap>
        <FootMain>
          <FLogo>
            <Link to={routes.home}>CoCha</Link>
          </FLogo>
          <FootMenuWrap>
            <li>회사소개</li>
            <li>고객센터</li>
            <li>개인정보 처리방침</li>
            <li>저작권 표기</li>
          </FootMenuWrap>
        </FootMain>
        <SnsWrap>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </SnsWrap>
      </FootWrap>
      <Bottom>
        <option>(주)코챠 사업자 정보</option>
      </Bottom>
    </SFooter>
  );
};
