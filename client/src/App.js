import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Pages/Navigation";
import { Home } from './Pages/Home';
import { Leaderboard } from './Pages/Leaderboard';
import { Profile } from './Pages/Profile';
import { Progress } from './Pages/Progress';
import { Login } from './Pages/Login-signup'
import './css/app.css'


function App() {
        return (
            <>
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/signup" element={<Login />} />
                </Routes>
            </>
        )
    }

export default App;