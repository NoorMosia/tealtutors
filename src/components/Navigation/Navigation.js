import React from "react";

import * as Styles from "./Navigation.module.css";
// import { Button, Stack } from "@chakra-ui/react";

const Navigation = () => {
    return (
        <div className={Styles.Nav}>
            <div className={Styles.logo}>
                <img alt="Logo" src={process.env.PUBLIC_URL + '/logo.png'} />
            </div>
            {/* <div className={Styles.Buttons}>
                <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="solid">
                        Register
                    </Button>
                    <Button colorScheme="teal" variant="outline">
                        Login
                    </Button>
                </Stack>
            </div> */}
        </div>

    );
}

export default Navigation;