import React from "react";
import * as Styles from "./FullPost.module.css";
import Post from "../Post/Post";

const data = {
    name: "noor mosia",
    username: "mosianoor"
}

const FullPost = props => {
    console.log(props);
    return <div className={Styles.FullPost}>
        <Post data={data} />
    </div>
}

export default FullPost;
