import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { routes } from "./routes";
import { Genre } from "./pages/genre/Genre";
import { Login } from "./pages/login/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Detail } from "./pages/genre/Detail";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sign } from "./pages/login/Sign";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.genre} element={<Genre />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.sign} element={<Sign />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
