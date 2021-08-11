import React from "react";
import * as Styles from "./FullPost.module.css";
import PostCard from "../PostCard/PostCard";

import { Textarea, Button } from "@chakra-ui/react";
import CommentCard from "../CommentCard/CommentCard";

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
            <CommentCard data={data} />
            <CommentCard data={data} />
            <CommentCard data={data} />
        </div>

    </div>
}

export default FullPost;
