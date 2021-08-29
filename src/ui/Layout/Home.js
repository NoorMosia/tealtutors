import React from "react";

import { HStack, Button, } from "@chakra-ui/react";
import {
    Link
} from "react-router-dom";
import { AiOutlineTwitter, AiFillPlayCircle } from "react-icons/ai";
import * as Styles from "./Layout.module.css";

const Layout = () => {
    return (

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
                    <HStack spacing="5">
                        <Link to="/home">
                            <Button size="lg" leftIcon={<AiFillPlayCircle />} >
                                Demo
                            </Button>
                        </Link>
                        <Button size="lg" colorScheme="twitter" leftIcon={<AiOutlineTwitter />}>
                            Twitter
                        </Button>
                    </HStack>
                </div>
            </div>
        </div>
    );
}

export default Layout;
