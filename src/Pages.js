import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {POSTS} from "./constants";

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
    const { id } = useParams();
    const [ post, setPost ] = useState({});

    const getPost = () =>{
       const post = POSTS.find(item => item.id === parseInt(id) )
       setPost(post);
    }

    useEffect(() => {
        getPost();
    }, [])


    return (
        <>
            <h1 className="title">{post.title}</h1>
            <p>{post.desc}</p>
        </>
    )

}

export const Posts = () => {
    return (
        <div className="posts">
            <h1 className="title">All Posts</h1>
            <ul>
                {
                    POSTS.map(item => {
                        return <li><Link to={`/post/${item.id}`}>{item.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export const NotFound = () => {
    return <h1 className="title">404 NOT FOUND.<Link to="/">Go to Main</Link></h1>

}
















