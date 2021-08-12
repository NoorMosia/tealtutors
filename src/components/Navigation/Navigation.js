import React from "react";

import * as Styles from "./Navigation.module.css";
import RightDrawer from "../Drawer/Drawer";

const Navigation = () => {
    return (
        <div className={Styles.Nav}>
            <div className={Styles.logo}>
                <img alt="Logo" src={process.env.PUBLIC_URL + '/logo.png'} />
            </div>
            <div className={Styles.Buttons}>
                <RightDrawer />
            </div>
        </div>

    );
}

export default Navigation;