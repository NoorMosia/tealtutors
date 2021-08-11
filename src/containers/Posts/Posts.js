import React from "react";
import Post from "../../components/Post/Post";

import { Link } from "react-router-dom"

const data = [
    {
        name: "noor mosia",
        username: "mosianoor",
        img: "https://bit.ly/code-beast"
    },
    {
        name: "Kyle Walker",
        username: "KWalker",
        img: "https://bit.ly/dan-abramov"
    },
    {
        name: "Lionel Messi",
        username: "THEGOAT",
        img: "https://bit.ly/sage-adebayo"
    },
    {
        name: "King James",
        username: "KINGJ",
        img: "https://bit.ly/ryan-florence"
    }
]

const Posts = () => {
    const PostData = data.map(data => {
        return <Link to="/Post">
            <Post data={data} />
        </Link>
            ;
    })
    return (<>
        {PostData}
    </>
    );
}

export default Posts;