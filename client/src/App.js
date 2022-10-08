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

// random addition question code 
function question() {
    this.a = Math.round(Math.random()*10);
    this.b = Math.round(Math.random()*10);
    this.result = this.a + this.b;
    this.checkResult = function(givenResultString) {
        return (""+result == givenResultString);
    }
}

// random addition, multiplication, and subtraction code 
function question() {
    var add(x, y) { return x+y; };
    var subtract(x, y) { return x-y; };
    var multiply(x, y) { return x*y };
    var operators = [add, subtract, multiply];

    this.a = Math.round(Math.random()*10);
    this.b = Math.round(Math.random()*10);
    var operatorIdx = Math.min(Math.floor(Math.random()*4),3);
    this.operator = operators[operatorIdx];
    this.result = operator(this.a,this.b);
    this.checkResult = function(givenResultString) {
        return (""+this.result == givenResultString);
    }
}