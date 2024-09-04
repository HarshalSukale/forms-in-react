// Filename: App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './nav';
import Form from './form';
import Calculator from './calculator';
import TicTacToe from './tic tack toe';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Welcome to My App</h1>} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/tictactoe" element={<TicTacToe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;