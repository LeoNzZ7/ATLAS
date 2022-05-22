import { BrowserRouter } from "react-router-dom";
import * as c from "./App.styles"
import { Header } from "./components/header";
import { PublicRoutes } from "./routes/publicRoutes";

const App = () => {
  return (
    <BrowserRouter>
    <c.PageArea>
      <c.HeaderArea>
        <Header/>
      </c.HeaderArea>
      <PublicRoutes/>
    </c.PageArea>
    </BrowserRouter>
  );
}

export default App;