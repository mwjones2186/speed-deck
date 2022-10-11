import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import Login from "./pages/Login-signup";
import LevelOne from "./components/LevelOne";
import "./css/app.css";
import Gameplay from "./pages/GameScreen";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/levelSelect" element={<Progress />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/gameplay" element={<Gameplay />} />
        <Route path="/levelOne" element={<LevelOne />} />
      </Routes>
    </>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 3a178a26ddb22024123b6eac7be1d42c344e7a1e
