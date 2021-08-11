import React from "react";
import * as Styles from "./FullPost.module.css";
import PostCard from "../PostCard/PostCard";
import Posts from "../../containers/Posts/Posts";

import { Textarea, Button } from "@chakra-ui/react"

const data = {
    name: "noor mosia",
    username: "mosianoor",
    img: "https://bit.ly/ryan-florence"
}

const FullPost = props => {
    return <div className={Styles.FullPost}>
        <PostCard {...props} data={data} />

        <div className={Styles.CommentInput}>
            <Textarea placeholder="Type your comment" />
            <Button colorScheme="teal" size="sm">
                Send
            </Button>
        </div>
        <div className={Styles.Comments}>
            <Posts />
        </div>

    </div>
}

export default FullPost;
