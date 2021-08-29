import React from "react";
import * as Styles from "./LiveClass.module.css";

import { Stack, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import Heading from "../Heading/Heading";

import tutor from "./tutor.png";
import s1 from "./1.jpg";
import s2 from "./2.jpg";
import s3 from "./3.jpg";
import s4 from "./4.jpg";

const LiveClass = () => {
    const { id } = useParams();
    console.log(id);

    return <div className={Styles.LiveClass}>
        <Heading>@{id}'s Live</Heading>
        <div className={Styles.Contents}>
            <div className={Styles.Buttons}>
                <Stack direction="row" spacing={4}>
                    <Button colorScheme="teal" variant="solid">
                        Resources
                    </Button>
                </Stack>
            </div>
            <div className={Styles.Tutor}>
                <img src={tutor} alt="tutor" />
            </div>
            <div className={Styles.Learners}>
                <div className={Styles.Learner}>
                    <img src={s1} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s2} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s3} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s4} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s1} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s2} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s3} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s4} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s1} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s2} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s3} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s4} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s1} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s2} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s3} alt="tutor" />
                </div>
                <div className={Styles.Learner}>
                    <img src={s4} alt="tutor" />
                </div>
            </div>
        </div>
    </div>
}

export default LiveClass;