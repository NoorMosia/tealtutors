import React from "react";
import * as Styles from "./CommentCard.module.css";

import { Avatar, Text } from "@chakra-ui/react";

const CommentCard = props => {
    return (
        <div className={Styles.CommentCard}>
            <div className={Styles.AvatarSide}>
                <Avatar name={props.data.name} src={props.data.img} />
            </div>
            <div className={Styles.TextSide}>
                <div className={Styles.Name}>
                    <span className={Styles.DisplayName}>{props.data.name}</span>
                    <span className={Styles.username}> @{props.data.username}</span>
                </div>
                <Text color="gray.800" >
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </Text>

                <div className={Styles.CommentCardExtras}>
                </div>
            </div>
        </div>
    );
}

export default CommentCard;