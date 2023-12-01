import styled from "styled-components";
import { MoonLoader } from "react-spinners";

const SLoading = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <SLoading>
      <MoonLoader color="rgba(96, 96, 96, 1)" size={50} />
    </SLoading>
  );
};
