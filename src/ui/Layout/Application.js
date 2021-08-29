import React from "react";
import * as Styles from "./Layout.module.css";

import Navigation from "../../components/Navigation/Navigation";
import Middle from "../../containers/Middle/Middle";
import Left from "../../containers/Left/Left";

const Application = () => {
    return (
        <div className={Styles.Application}>
            <Navigation />
            <div className={Styles.Body}>
                <div className={Styles.Left} >
                    <Left />
                </div>
                <Middle />
                <div className={Styles.Right}>
                </div>
            </div>
            <div className={Styles.Footer}>Built by Mosia Noor-Tshepo</div>
        </div>
    );
}

export default Application;
