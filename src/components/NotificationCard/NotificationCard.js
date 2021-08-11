import React from "react";
import * as Styles from "./NotificationCard.module.css";

import { Icon, Avatar } from "@chakra-ui/react";
import {
    AiOutlineHeart,
} from "react-icons/ai";

const NotificationCard = props => {
    return <div className={Styles.NotificationCard}>
        <div className={Styles.Icon}>
            <Icon w={10} h={10} as={AiOutlineHeart} />
        </div>
        <div className={Styles.Details}>
            <div className={Styles.Image}>
                <Avatar size="md" name={props.user.name} src={props.user.img} />
            </div>
            <div className={Styles.Text}>
                <div className={Styles.Summary}>
                    <div className={Styles.Name}>
                        {props.user.name}
                    </div>
                    <div className={Styles.Text}>
                        liked your post
                    </div>
                </div>
                <div className={Styles.PostText}>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </div>
            </div>
        </div>
    </div>
}

export default NotificationCard