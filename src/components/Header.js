import { Link } from "react-router-dom";

import styled from "styled-components";
import { routes } from "../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #101010;
  height: 75px;
  padding: 0 122px;
  z-index: 3;
  @media screen and (max-width: 1080px) {
    height: 61px;
    padding: 0 60px;
  }
  @media screen and (max-width: 680px) {
    padding: 0 17px;
  }
`;
const MenuWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  h3 {
    font-size: 30px;
    font-weight: 700;
  }
  @media screen and (max-width: 450px) {
    h3 {
      font-size: 24px;
    }
  }
`;
const Tag = styled.div`
  margin: 0 30px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const My = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const SearchWrap = styled.div`
  display: flex;
`;

const JoinBtn = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const MoWrap = styled.div`
  @media screen and (min-width: 1025px) {
    display: none;
    position: relative;
  }
`;

const MoBtn = styled.div`
  color: #fff;
  font-size: 24px;
`;
const Bg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  background-color: rgba(59, 59, 59, 0.5);
  /* display: none; */
`;
const MoMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  width: 60vw;
  height: 100vh;
  background-color: #fff;
  padding: 67px 25px 0 25px;
  h3,
  p {
    color: #222;
  }
`;

const MLogo = styled.div`
  h3 {
    font-size: 30px;
    font-weight: 700;
  }
  @media screen and (max-width: 450px) {
    h3 {
      font-size: 24px;
    }
  }
`;
const MSub = styled.div`
  margin: 15px 0 30px;
  p {
    font-size: 20px;
    font-weight: 500;
  }
  @media screen and (max-width: 450px) {
    p {
      font-size: 16px;
    }
  }
`;
const MLogin = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47px;
  background-color: #222;
  p {
    color: #fff;
  }
  @media screen and (max-width: 450px) {
    height: 40px;
  }
`;
const MTag = styled.div`
  margin: 30px 0 18px;
  p {
    font-size: 20px;
    font-weight: 500;
  }
  @media screen and (max-width: 450px) {
    p {
      font-size: 16px;
    }
  }
`;
const MMy = styled.div`
  p {
    font-size: 20px;
    font-weight: 500;
  }
  @media screen and (max-width: 450px) {
    p {
      font-size: 16px;
    }
  }
`;

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuClickHandler = () => {
    setOpenMenu(true);
  };

  const bgClickHandler = () => {
    setOpenMenu(false);
  };

  return (
    <SHeader>
      <MenuWrap>
        <Logo>
          <Link to={routes.home}>
            <h3>CoCha</h3>
          </Link>
        </Logo>
        <Tag>
          <Link to={routes.genre}>
            <p>영화 찾기</p>
          </Link>
        </Tag>
        <My>
          <Link to={routes.login}>
            <p>내 작품 보관함</p>
          </Link>
        </My>
      </MenuWrap>

      <SearchWrap>
        <JoinBtn>
          <Link to={routes.login}>
            <p>로그인</p>
          </Link>
        </JoinBtn>
      </SearchWrap>
      <MoWrap>
        <Bg
          onClick={bgClickHandler}
          style={{ display: openMenu ? "block" : "none" }}
        />
        <MoBtn onClick={menuClickHandler}>
          <FontAwesomeIcon icon={faBars} />
        </MoBtn>

        <MoMenu style={{ right: openMenu ? "0" : "-100vw" }}>
          <MLogo>
            <Link to={routes.home}>
              <h3>CoCha</h3>
            </Link>
            <MSub>
              <p>코챠에 오신 것을 환영합니다!</p>
            </MSub>
            <Link to={routes.login}>
              <MLogin>
                <p>로그인</p>
              </MLogin>
            </Link>
            <Link to={routes.genre}>
              <MTag>
                <p>영화 검색</p>
              </MTag>
            </Link>
            <Link to={routes.login}>
              <MMy>
                <p>내 작품 보관함</p>
              </MMy>
            </Link>
          </MLogo>
        </MoMenu>
      </MoWrap>
    </SHeader>
  );
};
