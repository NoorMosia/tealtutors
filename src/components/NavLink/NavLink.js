import React from "react";
import * as Styles from "./NavLink.module.css";

import { Icon } from "@chakra-ui/react";

const NavLink = props => {
    return <div className={Styles.Link}>
        <div className={Styles.Icon}>
            <Icon as={props.icon} />
        </div>
        <div className={Styles.Title}>
            {props.name}
        </div>
    </div>
}

export default NavLink