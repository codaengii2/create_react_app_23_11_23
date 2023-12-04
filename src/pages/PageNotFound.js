import styled from "styled-components";

const PContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotImg = styled.div`
  width: 60vw;
  height: 700px;
  background: url(${(props) => props.$notBg}) no-repeat center/cover;
`;

const NotTitle = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

export const PageNotFound = () => {
  return (
    <PContainer>
      <NotImg $notBg="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=1060&t=st=1701662097~exp=1701662697~hmac=cb97dd9bf8ec02b850bdae3ffc132b0170764e96b804762fa4fdab57462c00b4" />
      <NotTitle>요청하신 페이지를 찾을 수 없습니다.</NotTitle>
    </PContainer>
  );
};
