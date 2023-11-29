import { Link } from "react-router-dom";

import styled from "styled-components";
import { routes } from "../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #101010;
  height: 75px;
  padding: 0 122px;
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
`;
const Tag = styled.div`
  margin: 0 30px;
`;
const My = styled.div``;
const SearchWrap = styled.div`
  display: flex;
`;
const Search = styled.div`
  color: #fff;
  margin-right: 30px;
`;
const JoinBtn = styled.div``;

export const Header = () => {
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
            <p>태그별 검색</p>
          </Link>
        </Tag>
        <My>
          <Link to={routes.login}>
            <p>내 작품 보관함</p>
          </Link>
        </My>
      </MenuWrap>

      <SearchWrap>
        <Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Search>
        <JoinBtn>
          <Link to={routes.login}>
            <p>로그인/가입</p>
          </Link>
        </JoinBtn>
      </SearchWrap>
    </SHeader>
  );
};
