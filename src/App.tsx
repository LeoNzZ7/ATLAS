import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import * as c from "./App.styles"
import { Feedbacks } from "./components/feedbacks";
import { Header } from "./components/header";
import { Packges } from "./components/packges";
import { Place } from "./components/places";
import { Slides } from "./components/slides";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { PublicRoutes } from "./routes/publicRoutes";

const App = () => {
  const themeStatus = useAppSelector(state => state.theme.status)

  const [searchBar, setSearchBar] = useState(false);

  return (
    <BrowserRouter>
    <c.PageArea theme={themeStatus} >
      <c.HeaderArea  theme={themeStatus}>
        <Header searchBar={searchBar} setSearchBar={setSearchBar}/>
      </c.HeaderArea>
      <Slides searchBar={searchBar} />
      <c.PlacesArea  theme={themeStatus}>
        <h1>Destinos</h1>
        <h3>Veja para onde você pode viajar hoje</h3>
        <Place/>
      </c.PlacesArea>
      <c.PackgeArea  theme={themeStatus}>
        <h1>Pacotes</h1>
        <h3>Veja os pacotes disponíveis</h3>
        <Packges/>
      </c.PackgeArea>
      <c.FeedbacksArea theme={themeStatus}>
        <h1>Feedbacks</h1>
        <h3>Avalições dos nossos clientes</h3>
        <Feedbacks/>
      </c.FeedbacksArea>
      <c.Contact>
        ...
      </c.Contact>
    </c.PageArea>
    <PublicRoutes/>
    </BrowserRouter>
  );
};

export default App;