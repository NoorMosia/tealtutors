import React from "react";
import * as Styles from "./Notifications.module.css";

import NotificationCard from "../NotificationCard/NotificationCard";

import { users } from "../../ui/Data";
import Heading from "../Heading/Heading";

const Notifications = props => {
    const notifs = users.map(user => {
        return <NotificationCard key={user.username} user={user} />
    })

    return <div className={Styles.Notifications}>
        <Heading>Notifications</Heading>
        <div className={Styles.Content}>
            {notifs}
        </div>
    </div>
}

export default Notifications