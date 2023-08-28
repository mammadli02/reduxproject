
import { Route, Routes } from "react-router-dom";

import Header from "./shared/components/Header/Header";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  return (
  <>
  <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </>
  );
}

export default App;
