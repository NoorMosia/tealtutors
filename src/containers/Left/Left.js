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

import Link from "../../components/NavLink/NavLink";
import { NavLink } from "react-router-dom";

const Left = () => {
    return (
        <div className={Styles.Left}>
            <NavLink to="/home" activeClassName={Styles.Active}>
                <Link name="Home" icon={AiOutlineHome} />
            </NavLink>
            <NavLink to="/search" activeClassName={Styles.Active}>
                <Link name="Search" icon={AiOutlineSearch} />
            </NavLink>
            <NavLink to="/notifications" activeClassName={Styles.Active}>
                <Link name="Notifications" icon={AiOutlineBell} />
            </NavLink>
            <NavLink to="/schedule" activeClassName={Styles.Active}>
                <Link name="Schedule" icon={AiOutlineCalendar} />
            </NavLink>

            <NavLink to="/bobby69" activeClassName={Styles.Active}>
                <Link name="Profile" icon={AiOutlineUser} />
            </NavLink>

            <NavLink to="/settings" activeClassName={Styles.Active}>
                <Link name="Settings" icon={AiOutlineSetting} />
            </NavLink>
        </div>
    );
}

export default Left;