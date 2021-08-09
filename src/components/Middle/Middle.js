import React from "react";
import * as Styles from "./Middle.module.css";

// import { Container, Avatar, Text } from "@chakra-ui/react";
import Post from "../Post/Post";


const Middle = () => {
    return (
        <div className={Styles.Middle}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Middle;