import { Helmet } from "react-helmet";

export const PageTitle = ({ name }) => {
  return (
    <Helmet>
      <title>코챠 | {name}</title>
    </Helmet>
  );
};
