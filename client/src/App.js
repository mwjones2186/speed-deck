import { Route, Routes } from "react-router-dom";
import  Navigation from "./components/Navigation";
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import  Progress from "./pages/Progress";
import Login from "./pages/Login-signup";

import './css/app.css'
import Gameplay from "./pages/GameScreen";


function App() {
        return (
            <>
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/levelSelect" element={<Progress/>} /> 
                     <Route path="/signup" element={<Login />} />
                     <Route path="/gameplay" element={<Gameplay />} />
                </Routes>
            </>
        )
    }

export default App;