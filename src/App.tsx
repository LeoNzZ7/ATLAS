import { BrowserRouter } from "react-router-dom";
import * as c from "./App.styles"
import { Header } from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
    <c.PageArea>
      <c.HeaderArea>
        <Header/>
      </c.HeaderArea>
    </c.PageArea>
    </BrowserRouter>
  );
}

export default App;