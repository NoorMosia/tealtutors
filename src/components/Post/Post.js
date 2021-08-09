import React from "react";
import * as Styles from "./Post.module.css";

import { Avatar, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

const Post = () => {
    return (
        <LinkBox className={Styles.Post}>
            <div className={Styles.Container}>
                <div className={Styles.AvatarSide}>
                    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                </div>
                <div className={Styles.TextSide}>
                    <div className={Styles.Name}>
                        <span className={Styles.DisplayName}>Noor Mosia</span>
                        <span className={Styles.username}> @mosianoor</span>
                    </div>
                    <LinkOverlay href="#">
                    </LinkOverlay>
                    <Text color="gray.800" >
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups.
                    </Text>

                    <div className={Styles.PostExtras}>
                        <div className={Styles.icon}>Attachments</div>
                        <div className={Styles.icon}>Comments</div>
                        <div className={Styles.icon}>Live Class</div>
                    </div>
                </div>
            </div>
        </LinkBox>
    );
}

export default Post;