import React from "react";
import * as Styles from "./Middle.module.css";

import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import Posts from "../Posts/Posts";
import Search from "../Search/Search";
import FullPost from "../../components/FullPost/FullPost";
import Notifications from "../../components/Notifications/Notifications";
import Schedule from "../../components/Schedule/Schedule";
import Profile from "../../components/Profile/Profile";
import LiveClass from "../../components/LiveClass/LiveClass";

const Middle = () => {
    const location = useLocation()
    return (
        <div className={Styles.Middle}>
            <Switch location={location}>
                <Route path="/home">
                    <Posts />
                </Route>
                <Route path="/post">
                    <FullPost />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/notifications">
                    <Notifications />
                </Route>
                <Route path="/schedule">
                    <Schedule />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/live">
                    <LiveClass />
                </Route>
                <Route path="/settings">
                    settings
                </Route>
            </Switch>
        </div>
    );
}

export default Middle;