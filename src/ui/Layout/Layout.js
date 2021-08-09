import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import * as Styles from "./Layout.module.css";

import Navigation from "../../components/Navigation/Navigation";
import Middle from "../../components/Middle/Middle";

import Left from "../../components/Left/Left";

const Layout = () => {
    return (
        <ChakraProvider>
            <div className={Styles.Layout}>
                <Navigation />
                <div className={Styles.Body}>
                    <Left />
                    <Middle />


                    <div className={Styles.Right}>
                        Right
                    </div>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default Layout;
