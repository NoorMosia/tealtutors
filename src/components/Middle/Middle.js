import React from "react";
import * as Styles from "./Middle.module.css";

import {
    Switch,
    Route,
} from "react-router-dom";

import Posts from "../../containers/Posts/Posts";
import Search from "../../containers/Search/Search";


const Middle = () => {
    return (
        <Switch>
            <div className={Styles.Middle}>
                <Route path="/home">
                    <Posts />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/notifications">
                    notifications
                </Route>
                <Route path="/schedule">
                    schedule
                </Route>
                <Route path="/settings">
                    settings
                </Route>
            </div>

        </Switch>
    );
}

export default Middle;