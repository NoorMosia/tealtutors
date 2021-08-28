import React from "react";

import { ChakraProvider, HStack, Button, } from "@chakra-ui/react";
import * as Styles from "./Layout.module.css";

import Navigation from "../../components/Navigation/Navigation";
import Middle from "../../containers/Middle/Middle";
import Left from "../../containers/Left/Left";

const Layout = () => {
    return (
        <ChakraProvider>
            <Navigation />
            {/* <div className={Styles.Layout}>
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
            </div> */}


            <div className={Styles.Home}>
                <div className={Styles.TextContainer}>
                    <div className={Styles.BigText}>
                        Connect with all your tutors online.
                    </div>
                    <div className={Styles.MediumText}>
                        Teal Tutors connects students with tutors world
                        wide. Providing resources and allowing them to
                        have real-time lessons through live streams.
                    </div>

                    <div className={Styles.Buttons}>
                        <HStack >
                            <Button size="lg">
                                Demo
                            </Button>
                            <Button size="lg" colorScheme="twitter" >
                                Twitter
                            </Button>
                        </HStack>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default Layout;
