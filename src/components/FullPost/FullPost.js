import React from "react";
import * as Styles from "./FullPost.module.css";
import PostCard from "../PostCard/PostCard";

const data = {
    name: "noor mosia",
    username: "mosianoor",
    img: "https://bit.ly/ryan-florence"
}

const FullPost = props => {
    console.log(props);
    return <div className={Styles.FullPost}>
        <PostCard {...props} data={data} />
    </div>
}

export default FullPost;
