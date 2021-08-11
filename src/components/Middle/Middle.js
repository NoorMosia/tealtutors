import React from "react";
import * as Styles from "./Middle.module.css";

import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

import Posts from "../../containers/Posts/Posts";
import Search from "../../containers/Search/Search";
import FullPost from "../FullPost/FullPost";
import Notifications from "../Notifications/Notifications";

const Middle = () => {
    const location = useLocation()
    return (
        <div className={Styles.Middle}>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                >
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
                            schedule
                        </Route>
                        <Route path="/settings">
                            settings
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Middle;