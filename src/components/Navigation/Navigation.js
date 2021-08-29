import React from "react";

import * as Styles from "./Navigation.module.css";
import RightDrawer from "../Drawer/Drawer";

import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className={Styles.Nav}>
            <Link to="/">
                <div className={Styles.logo}>
                    <img alt="Logo" src={process.env.PUBLIC_URL + '/logo.png'} />
                </div>
            </Link>
            <div className={Styles.Buttons}>
                <RightDrawer />
            </div>
        </div>

    );
}

export default Navigation;