import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {Main, Products, About, Contacts, Post, NotFound} from "./Pages";
import "./App.css"

const App = () => {

    const isActive = (object) =>{
        return object.isActive ? 'active-link' : '';
    }

    return (
        <BrowserRouter>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink className={isActive} to="/">Main</NavLink>
                    </li>

                    <li>
                        <NavLink className={isActive}  to="/products">Products</NavLink>
                    </li>

                    <li>
                        <NavLink className={isActive}  to="/about">About</NavLink>
                    </li>

                    <li>
                        <NavLink className={isActive}  to="/contacts">Contacts</NavLink>
                    </li>

                    <li>
                        <NavLink className={isActive}  to="/post/165">Post</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/post/:id' element={<Post/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

