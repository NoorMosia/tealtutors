import React from "react";
import * as Styles from "./Post.module.css";

import { Container, Avatar, Text } from "@chakra-ui/react";


const Post = () => {
    return (
        <div className={Styles.Post}>
            <Container className={Styles.Container}>
                <div className={Styles.AvatarSide}>
                    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                </div>
                <div className={Styles.TextSide}>
                    <div className={Styles.Name}>
                        Noor Mosia
                    </div>
                    <Text color="gray.500" >
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups.
                    </Text>
                </div>
            </Container>
        </div>
    );
}

export default Post;