import { Link } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Genre } from "../pages/genre/Genre";
import { Login } from "../pages/login/Login";
import styled from "styled-components";

const SHeader = styled.div``;
const MenuWrap = styled.div``;
const Logo = styled.div``;
const Tag = styled.div``;
const My = styled.div``;
const Search = styled.div``;
const JoinBtn = styled.div``;

export const Header = () => {
  return (
    <SHeader>
      <MenuWrap>
        <Logo>
          <Link to={<Home />} />
          <h3>MovieS</h3>
        </Logo>
        <Tag>
          <Link to={<Genre />} />
          <p>태그별 검색</p>
        </Tag>
        <My>
          <Link to={<Login />} />
          <p>내 작품 보관함</p>
        </My>
      </MenuWrap>

      <Search></Search>
      <JoinBtn>
        <Link to={<Login />} />
        <p>로그인/가입</p>
      </JoinBtn>
    </SHeader>
  );
};
