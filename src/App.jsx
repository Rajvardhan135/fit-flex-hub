import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Explore from "./routes/Explore/Explore";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="explore/*" element={<Explore />} />
      </Route>
    </Routes>
  );
}

export default App;

// 1f1c26  f24b88  1e222a  97df52  c72121  00c5ed  0068a7