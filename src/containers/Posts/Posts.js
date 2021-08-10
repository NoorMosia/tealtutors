import React from "react";
import Post from "../../components/Post/Post";

import { Link } from "react-router-dom"

const data = [
    {
        name: "noor mosia",
        username: "mosianoor",
        img: ""
    },
    {
        name: "Kyle Walker",
        username: "KWalker",
        img: ""
    },
    {
        name: "Lionel Messi",
        username: "THEGOAT",
        img: ""
    },
    {
        name: "King James",
        username: "KINGJ",
        img: ""
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