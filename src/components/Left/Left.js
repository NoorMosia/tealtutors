import React from "react";
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineBell,
    AiOutlineCalendar,
    AiOutlineSetting,
    AiOutlineUser
} from "react-icons/ai";
import * as Styles from "./Left.module.css";

import NavLink from "../NavLink/NavLink";
import { Link } from "react-router-dom"

const Left = () => {
    return (
        <div className={Styles.Left}>
            <Link to="/home">
                <NavLink name="Home" icon={AiOutlineHome} />
            </Link>
            <Link to="/search">
                <NavLink name="Search" icon={AiOutlineSearch} />
            </Link>
            <Link to="/notifications">
                <NavLink name="Notifications" icon={AiOutlineBell} />
            </Link>
            <Link to="/schedule">
                <NavLink name="Schedule" icon={AiOutlineCalendar} />
            </Link>
            <Link to="/profile">
                <NavLink name="Profile" icon={AiOutlineUser} />
            </Link>
            <Link to="/settings">
                <NavLink name="Settings" icon={AiOutlineSetting} />
            </Link>
        </div>
    );
}

export default Left;