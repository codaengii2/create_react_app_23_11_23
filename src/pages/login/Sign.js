import styled from "styled-components";
import { useForm } from "react-hook-form";
import { PageTitle } from "../../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
  justify-content: space-between;
  align-items: center;
  position: relative;
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
    width: 300px;
    height: 350px;
    padding: 40px 20px;
  }
`;

const Back = styled.div`
  position: absolute;
  top: 70px;
  left: 45px;
  font-size: 20px;
  @media screen and (max-width: 960px) {
    top: 45px;
    left: 45px;
  }
`;

const FormTitle = styled.div`
  text-align: center;
  display: flex;
  h3 {
    font-size: 36px;
    font-weight: 700;
  }

  @media screen and (max-width: 960px) {
    h3 {
      font-size: 32px;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 450px) {
    h3 {
      font-size: 24px;
      font-weight: 700;
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
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
  p {
    color: #fff;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50px;
    border-radius: 5px;
  }
`;

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid #222;
  padding-bottom: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.div`
  color: #9a9a9a;
  font-size: 14px;
  margin-bottom: 25px;
`;

export const Sign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};

  return (
    <>
      <PageTitle name={"로그인"} />
      <SLogin>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <Back>
            <Link to={"/login"}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </Back>
          <FormTitle>
            <h3>CoCha</h3>
          </FormTitle>
          <Input
            {...register("useremail", {
              required: "이메일을 입력해주세요.",
            })}
            type="text"
            placeholder="이메일 입력"
            style={{ marginTop: "25px", width: "100%" }}
          />
          <ErrorMessage style={{ marginBottom: "10px" }}>
            {errors?.useremail?.message}
          </ErrorMessage>
          <Input
            {...register("password", {
              required: "비밀번호는 필수입니다.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자리 이상입니다.",
              },
            })}
            type="password"
            placeholder="비밀번호 입력"
            style={{ width: "100%" }}
          />
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          <EmailButton $isActive={isValid}>
            <Link to={"/"}>
              <p>시작하기</p>
            </Link>
          </EmailButton>
        </Form>
      </SLogin>
    </>
  );
};
