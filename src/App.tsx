import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import * as c from "./App.styles"
import { Header } from "./components/header";
import { Slides } from "./components/slides";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { PublicRoutes } from "./routes/publicRoutes";

const App = () => {
  const themeStatus = useAppSelector(state => state.theme.status);

    const [searchBar, setSearchBar] = useState(false);

  return (
    <BrowserRouter>
    <c.PageArea theme={themeStatus}>
      <c.HeaderArea theme={themeStatus}>
        <Header searchBar={searchBar} setSearchBar={setSearchBar}/>
      </c.HeaderArea>
      <Slides searchBar={searchBar} />
      <PublicRoutes/>
    </c.PageArea>
    </BrowserRouter>
  );
};

export default App;