import React from "react";
import Post from "../../components/PostCard/PostCard";

import { Link } from "react-router-dom";
import { posts, users } from "../../ui/Data";

const Posts = () => {
    const data = posts.map(post => {
        let userDetails = users.filter(user => post.postedBy === user.username);

        return { ...post, ...userDetails }
    });

    const PostData = data.map(data => {
        const user = { ...data[0] };
        return <Link key={data.id} to={`/post/${data.id}`}>
            <Post data={data} user={user} />
        </Link>
    })

    return <>
        {PostData}
    </>;
}

export default Posts;