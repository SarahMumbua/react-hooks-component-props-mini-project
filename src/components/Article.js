import React from "react";


function Article({ posts }) {
    console.log({ posts })

    const postItems = posts.map((post => {
        const date = post.date || "January 1, 1970";
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <small>{date}</small>
                <p>{post.preview}</p>
            </div>

        );
    }))

    return (
        <article>
            {postItems}
        </article>
    );


}

export default Article; 