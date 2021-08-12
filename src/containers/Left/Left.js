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
            <NavLink to="/home" className={Styles.FullWidth} activeClassName={Styles.Active}>
                <Link className={Styles.FullWidth} name="Home" icon={AiOutlineHome} />
            </NavLink>
            <NavLink to="/search" className={Styles.FullWidth} activeClassName={Styles.Active}>
                <Link name="Search" icon={AiOutlineSearch} />
            </NavLink>
            <NavLink to="/notifications" className={Styles.FullWidth} activeClassName={Styles.Active}>
                <Link name="Notifications" icon={AiOutlineBell} />
            </NavLink>
            <NavLink to="/schedule" className={Styles.FullWidth} activeClassName={Styles.Active}>
                <Link name="Schedule" icon={AiOutlineCalendar} />
            </NavLink>

            <NavLink to="/bobby69" className={Styles.FullWidth} activeClassName={Styles.Active} >
                <Link name="Profile" icon={AiOutlineUser} />
            </NavLink>

            <NavLink to="/settings" className={Styles.FullWidth} activeClassName={Styles.Active}>
                <Link name="Settings" icon={AiOutlineSetting} />
            </NavLink>
        </div>
    );
}

export default Left;