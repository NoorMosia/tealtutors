import React from "react";
import * as Styles from "./PostCard.module.css";
import {
    AiOutlinePaperClip,
    AiOutlineMessage,
    AiOutlineHeart
} from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Avatar, Text } from "@chakra-ui/react";

const PostCard = props => {
    return (
        <div className={Styles.PostCard}>
            <div className={Styles.AvatarSide}>
                <Link to={"/profile/" + props.user.username}>
                    <Avatar name={props.user.name} src={props.user.img} />
                </Link>
            </div>
            <div className={Styles.TextSide}>
                <div className={Styles.Name}>
                    <span className={Styles.DisplayName}>{props.user.name}</span>
                    <span className={Styles.username}> @{props.user.username}</span>
                </div>
                <Text color="gray.800" >
                    {props.data.message}
                </Text>
                <div className={Styles.PostCardExtras}>
                    <div className={Styles.icon}>
                        <div className={Styles.Icon}>
                            <Icon as={AiOutlinePaperClip} />
                        </div>
                        <div className={Styles.Title}>
                            2 Attachment
                        </div>
                    </div>
                    <div className={Styles.icon}>
                        <div className={Styles.Icon}>
                            <Icon as={AiOutlineMessage} />
                        </div>
                        <div className={Styles.Title}>
                            10 Comments
                        </div>
                    </div>
                    <div className={Styles.icon}>
                        <div className={Styles.Icon}>
                            <Icon as={AiOutlineHeart} />
                        </div>
                        <div className={Styles.Title}>
                            289 Likes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;