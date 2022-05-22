import { BrowserRouter } from "react-router-dom";
import * as c from "./App.styles"
import { Header } from "./components/header";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { PublicRoutes } from "./routes/publicRoutes";

const App = () => {
  const themeStatus = useAppSelector(state => state.theme.status);

  return (
    <BrowserRouter>
    <c.PageArea>
      <c.HeaderArea theme={themeStatus} >
        <Header/>
      </c.HeaderArea>
      <PublicRoutes/>
    </c.PageArea>
    </BrowserRouter>
  );
}

export default App;