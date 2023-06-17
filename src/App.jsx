import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Search from "./screens/Search";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
