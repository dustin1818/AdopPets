import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Adopt from "./pages/Adopt";
import Donate from "./pages/Donate";
import PetDetail from "./pages/PetDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Login />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/animal/:id" element={<PetDetail />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  );
}

export default App;
