import React from "react";
import {Link,useParams} from "react-router-dom";

export const Main = () => {
    return <h1 className="title">Main Page</h1>

}

export const Products = () => {
    return <h1 className="title">Our Products</h1>

}

export const About = () => {
    return <h1 className="title">About Us</h1>

}

export const Contacts = () => {
    return <h1 className="title">Contacts</h1>

}

export const Post = () => {
    const params = useParams();
    return <h1 className="title">Post with id {params.id}</h1>

}

export const NotFound = () => {
    return <h1 className="title">404 NOT FOUND.<Link to="/">Go to Main</Link></h1>

}