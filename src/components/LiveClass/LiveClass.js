import React from "react";
import * as Styles from "./LiveClass.module.css";

import { Stack, Button } from "@chakra-ui/react";

import Heading from "../Heading/Heading";

const LiveClass = () => {

    return <div className={Styles.LiveClass}>
        <Heading>@bobby69's Live</Heading>

        <div className={Styles.Contents}>

            <div className={Styles.Buttons}>
                <Stack direction="row" spacing={4}>
                    <Button colorScheme="teal" variant="solid">
                        Resources
                    </Button>
                    <Button colorScheme="teal" variant="outline">
                        Change view
                    </Button>
                </Stack>
            </div>
            <div className={Styles.Tutor}>
                Tutor
            </div>
            <div className={Styles.Learners}>
                <div className={Styles.Learner}>
                    l1
                </div>
                <div className={Styles.Learner}>
                    l2
                </div>
                <div className={Styles.Learner}>
                    l3
                </div>
                <div className={Styles.Learner}>
                    l3
                </div>
                <div className={Styles.Learner}>
                    l3
                </div>
                <div className={Styles.Learner}>
                    l3
                </div>
                <div className={Styles.Learner}>
                    l3
                </div>
                <div className={Styles.Learner}>
                    l3
                </div>
                <div className={Styles.Learner}>
                    l3
                </div>
            </div>
        </div>
    </div>
}

export default LiveClass;