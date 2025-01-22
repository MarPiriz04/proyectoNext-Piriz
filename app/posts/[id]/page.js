'use client'

import { useEffect, useState } from "react";

const getPostsId = async (postId = '') => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    return res.json();
}

const PostById = ({ params = {} }) => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostsId(params.id);
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [params.id]);

    if (isLoading) {
        return <p className="text-center text-blue-500">Cargando publicación...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">{post.title}</h1>
            <p className="text-lg text-gray-700">{post.body}</p>
        </div>
    );
}

export default PostById;
