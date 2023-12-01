import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faApple,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Form = styled.form`
  width: 484px;
  height: 450px;
  border-radius: 10px;
  background-color: #fff;
  padding: 55px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3,
  p {
    color: #222;
  }
`;

const FormTitle = styled.div`
  text-align: center;
  h3 {
    font-size: 36px;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    font-weight: 700;
    margin: 15px 0 50px;
  }
`;
const EmailButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 383px;
  height: 63px;
  background-color: #222222;
  border-radius: 10px;
  color: #fff;

  p {
    color: #fff;
  }
`;

const Or = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 45px;
  div {
    width: 150px;
    height: 0.5px;
    background-color: #bbb;
  }
`;
const EasyJoinWrap = styled.ul`
  display: flex;
  li {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    margin-left: 15px;
  }
  li:nth-child(1) {
    background-color: #fee500;
    margin-left: 0;
  }
  li:nth-child(2),
  li:nth-child(5) {
    border: 1px solid #ddd;
  }
  li:nth-child(3) {
    background-color: #3b5998;
    color: #fff;
  }
  li:nth-child(4) {
    background-color: #55acee;
    color: #fff;
  }
`;

export const Login = () => {
  return (
    <SLogin>
      <Form>
        <FormTitle>
          <h3>CoCha</h3>
          <p>코챠와 함께 다양한 영화를 만나보세요!</p>
        </FormTitle>
        <EmailButton>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>이메일로 가입하기</p>
        </EmailButton>
        <Or>
          <div></div>
          <p>또는</p>
          <div></div>
        </Or>
        <EasyJoinWrap>
          <li>
            <FontAwesomeIcon icon={faComment} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGoogle} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faApple} />
          </li>
        </EasyJoinWrap>
      </Form>
    </SLogin>
  );
};
