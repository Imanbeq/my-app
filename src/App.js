import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import TestFetch from "./pages/TestFetch/TestFetch";
// import AlbumCards from "./pages/AlbumCards/AlbumCards";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/test-fetch' element={<TestFetch/>}/>
                {/*<Route path='/' element={<AlbumCards/>}/>*/}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
