import { HelmetProvider, Helmet } from "react-helmet-async";

export const PageTitle = ({ name }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>코챠 | {name}</title>
      </Helmet>
    </HelmetProvider>
  );
};
