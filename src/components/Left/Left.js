import React from "react";
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineBell,
    AiOutlineCalendar,
    AiOutlineSetting
} from "react-icons/ai";
import { Icon } from "@chakra-ui/react"

import * as Styles from "./Left.module.css";

const Left = () => {
    return (
        <div className={Styles.Left}>
            <div className={Styles.Link}>
                <div className={Styles.Icon}>
                    <Icon as={AiOutlineHome} />
                </div>
                <div className={Styles.Title}>
                    Home
                </div>
            </div>
            <div className={Styles.Link}>
                <div className={Styles.Icon}>
                    <Icon as={AiOutlineSearch} />
                </div>
                <div className={Styles.Title}>
                    Search
                </div>
            </div>
            <div className={Styles.Link}>
                <div className={Styles.Icon}>
                    <Icon as={AiOutlineBell} />
                </div>
                <div className={Styles.Title}>
                    Notifications
                </div>
            </div>
            <div className={Styles.Link}>
                <div className={Styles.Icon}>
                    <Icon as={AiOutlineCalendar} />
                </div>
                <div className={Styles.Title}>
                    Schedule
                </div>
            </div>
            <div className={Styles.Link}>
                <div className={Styles.Icon}>
                    <Icon as={AiOutlineSetting} />
                </div>
                <div className={Styles.Title}>
                    Settings
                </div>
            </div>
        </div >

    );
}

export default Left;