import React, { useEffect, useState } from 'react'
import axios from 'axios';
function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response);
                this.setState({
                    posts: Array.isArray(response.data)
                        ? response.data
                        : [response.data]
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }, [])
    return (
        <div>
            <h2>Posts:</h2>
            {
                posts.length ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.id}. {post.title}</h2>
                            <h4>By User ID {post.userId}</h4>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    ))
                ) : (
                    error
                        ? <p>{error}</p>
                        : <h4>Loading posts ...</h4>
                )
            }
        </div>
    )
}

export default HTTPHooks