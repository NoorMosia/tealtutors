import React from "react";

import { ChakraProvider, } from "@chakra-ui/react";
import {
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Home";
import Application from "./Application";

const Layout = () => {
    return (
        <ChakraProvider>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/" component={Application} />
            </Switch>
        </ChakraProvider>
    );
}

export default Layout;
