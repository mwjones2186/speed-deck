import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from './components/Home';
import { Leaderboard } from './components/Leaderboard';
import { Profile } from './components/Profile';
import { Progress } from './components/Progress';
import { Login } from './components/Login-signup'
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