import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Post from "./pages/Post/Post";
import Main from "./pages/Main/Main";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/post' element={<Post/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;






















