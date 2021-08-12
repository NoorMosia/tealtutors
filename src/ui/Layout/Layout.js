import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import * as Styles from "./Layout.module.css";

import Navigation from "../../components/Navigation/Navigation";
import Middle from "../../containers/Middle/Middle";
import Left from "../../containers/Left/Left";

const Layout = () => {
    return (
        <ChakraProvider>
            <div className={Styles.Layout}>
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
        </ChakraProvider>
    );
}

export default Layout;
