import styled from "styled-components";

const SFooter = styled.div`
  padding: 0 122px;
`;
const FootWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FLogo = styled.div``;
const FootMenuWrap = styled.ul`
  display: flex;
`;
const SnsWrap = styled.ul`
  display: flex;
`;
const Bottom = styled.select`
  all: unset;
`;

export const Footer = () => {
  return (
    <SFooter>
      <FootWrap>
        <FLogo>MovieS</FLogo>
        <FootMenuWrap>
          <li>회사소개</li>
          <li>고객센터</li>
          <li>개인정보 처리방침</li>
          <li>저작권 표기</li>
        </FootMenuWrap>
        <SnsWrap>
          <li>twitter</li>
          <li>youtube</li>
          <li>instagram</li>
        </SnsWrap>
      </FootWrap>
      <Bottom>
        <option>(주)무비스 사업자 정보</option>
      </Bottom>
    </SFooter>
  );
};
