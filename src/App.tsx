import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Header } from "common/modules/Header";
import { Home } from "./views/Home";

import "common/assets/style";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
