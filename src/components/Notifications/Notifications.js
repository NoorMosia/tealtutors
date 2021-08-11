import React from "react";
import * as Styles from "./Notifications.module.css";

import NotificationCard from "../NotificationCard/NotificationCard";

const Notifications = props => {
    return <div className={Styles.Notifications}>
        <div className={Styles.Heading}>
            Notifications
        </div>
        <div className={Styles.Content}>
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
        </div>
    </div>
}

export default Notifications