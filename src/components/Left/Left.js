import React from "react";

import * as Styles from "./Left.module.css";
import { Button, VStack } from "@chakra-ui/react";


const Left = () => {
    return (
        <div className={Styles.Left}>
            <VStack spacing={2} align="stretch">
                <Button className={Button} align="left" size="lg" colorScheme="teal" variant="ghost">
                    Home
                </Button>
                <Button size="lg" colorScheme="teal" variant="ghost">
                    Search
                </Button>
                <Button size="lg" colorScheme="teal" variant="ghost">
                    Notifications
                </Button>
                <Button size="lg" colorScheme="teal" variant="ghost">
                    Profile
                </Button>
                <Button size="lg" colorScheme="teal" variant="ghost">
                    Settings
                </Button>
            </VStack>
        </div >

    );
}

export default Left;