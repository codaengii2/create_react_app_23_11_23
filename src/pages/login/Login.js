import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faApple,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { PageTitle } from "../../components/PageTitle";
import { Link, useNavigate } from "react-router-dom";

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
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3,
  p {
    color: #222;
  }
  @media screen and (max-width: 960px) {
    width: 300px;
    height: 350px;
    padding: 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 40px 20px;
  }
  @media screen and (max-width: 320px) {
    width: 250px;
    height: 300px;
    padding: 20px;
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
    margin: 15px 0 30px;
  }
  @media screen and (max-width: 960px) {
    h3 {
      font-size: 32px;
      font-weight: 700;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      margin: 15px 0;
    }
  }
  @media screen and (max-width: 450px) {
    h3 {
      font-size: 24px;
      font-weight: 700;
    }
    p {
      font-size: 16px;
      font-weight: 700;
      margin: 15px 0 30px;
    }
  }
  @media screen and (max-width: 320px) {
    p {
      margin: 15px 0;
    }
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
  position: relative;
  p {
    color: #fff;
  }
  @media screen and (max-width: 960px) {
    width: 260px;
    height: 50px;
    border-radius: 5px;
  }
  @media screen and (max-width: 320px) {
    width: 210px;
    height: 45px;
    border-radius: 5px;
    p {
      font-size: 14px;
    }
  }
`;
const EmailCon = styled.div`
  position: absolute;
  top: 50%;
  left: 37.5px;
  transform: translate(0, -50%);
  @media screen and (max-width: 320px) {
    font-size: 14px;
    left: 20px;
  }
`;

const Or = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 45px;
  white-space: nowrap;
  div {
    width: 150px;
    height: 0.5px;
    background-color: #bbb;
  }
  @media screen and (max-width: 960px) {
    margin: 20px 0;
    div {
      width: 80px;
    }
  }
  @media screen and (max-width: 450px) {
    font-size: 14px;
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
    margin-left: 10px;
  }

  @media screen and (max-width: 960px) {
    li {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 320px) {
    li {
      width: 35px;
      height: 35px;
    }
  }
`;

export const Login = () => {
  let navigate = useNavigate();

  const backClick = () => {
    navigate.push("/");
  };

  return (
    <>
      <PageTitle name={"로그인"} />
      <SLogin onClick={backClick}>
        <Form>
          <FormTitle>
            <h3>CoCha</h3>
            <p>코챠와 함께 다양한 영화를 만나보세요!</p>
          </FormTitle>
          <Link to={"/sign"}>
            <EmailButton>
              <EmailCon>
                <FontAwesomeIcon icon={faEnvelope} />
              </EmailCon>
              <p>이메일로 가입하기</p>
            </EmailButton>
          </Link>
          <Or>
            <div></div>
            <p>또는</p>
            <div></div>
          </Or>
          <EasyJoinWrap>
            <Link to={"/"}>
              <li style={{ backgroundColor: "#fee500" }}>
                <FontAwesomeIcon icon={faComment} />
              </li>
            </Link>
            <Link to={"/"}>
              <li style={{ border: "1px solid #ddd" }}>
                <FontAwesomeIcon icon={faGoogle} />
              </li>
            </Link>
            <Link to={"/"}>
              <li style={{ color: "#fff", backgroundColor: "#3b5998" }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
            </Link>
            <Link to={"/"}>
              <li style={{ color: "#fff", backgroundColor: "#55acee" }}>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </Link>
            <Link to={"/"}>
              <li style={{ border: "1px solid #ddd" }}>
                <FontAwesomeIcon icon={faApple} />
              </li>
            </Link>
          </EasyJoinWrap>
        </Form>
      </SLogin>
    </>
  );
};
