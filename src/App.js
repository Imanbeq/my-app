import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {Main} from "./Pages";
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

