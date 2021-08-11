import React from "react";
import * as Styles from "./Heading.module.css";

const Heading = props => {
    return <div className={Styles.Heading}>
        {props.children}
    </div>
}

export default Heading;