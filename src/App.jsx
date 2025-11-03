import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Adopt from "./pages/Adopt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Login />} />
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
    </>
  );
}

export default App;
