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
`;
const FootWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FootMain = styled.div`
  display: flex;
  align-items: center;
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
