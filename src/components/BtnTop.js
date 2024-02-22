import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SBtnTop = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 2;
  background-color: #222;
  border-radius: #ddd;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BtnTop = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <SBtnTop onClick={scrollTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </SBtnTop>
  );
};
