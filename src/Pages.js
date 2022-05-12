import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {POSTS} from "./constants";

export const Main = () => {
    return <h1 className="title">Main Page</h1>

}

export const Products = () => {
    return <h1 className="title">Our Products</h1>

}

export const About = () => {
    const navigate = useNavigate();
    const goForward = () => {
        navigate('/products')
    }

    return (
        <>

            <h1 className="title">About Us</h1>
            <button onClick={goForward}>Forward</button>
        </>
    )
}

export const Contacts = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-2);
    }





    return (
        <>
            <h1 className="title">Contacts</h1>
            <button onClick={goBack}>Back</button>
        </>
    )
}

export const FAQ = () => {
    return <h1 className="title">FAQ</h1>

}

export const Comments = () => {
    return <h1 className="title">Comments</h1>

}

export const Post = () => {
    const { id } = useParams();
    const [ post, setPost ] = useState({});
    const navigate = useNavigate();

    const getPost = () =>{
       const post = POSTS.find(item => item.id === parseInt(id) )

        if(!post){
            navigate('/');
       } else {
           setPost(post);
       }

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
















