import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
