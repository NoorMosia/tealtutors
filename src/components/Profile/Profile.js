import React from "react";
import * as Styles from "./Profile.module.css";
// import {
//     AiOutlinePaperClip,
//     AiOutlineMessage,
//     AiOutlineHeart
// } from "react-icons/ai";
// import { Icon } from "@chakra-ui/react"

import { Avatar, Button, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";

import Posts from "../../containers/Posts/Posts";
import Schedule from "../Schedule/Schedule";

const Profile = props => {
    return (
        <div className={Styles.Profile}>
            <div className={Styles.Head}>
                <div className={Styles.HeadTop}>
                    <div className={Styles.Image}>
                        <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    </div>
                    <div className={Styles.Buttons}>
                        <Button colorScheme="teal" variant="outline">Follow</Button>
                        <Button colorScheme="teal" variant="outline">Subscribe</Button>
                    </div>
                </div>

                <div className={Styles.HeadBottom}>
                    <div className={Styles.DescriptionText}>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups.
                    </div>
                </div>
            </div>


            <div className={Styles.Links}>
                <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                        <Tab>Timeline</Tab>
                        <Tab>Schedule</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Posts />
                        </TabPanel>
                        <TabPanel>
                            <Schedule />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div >
    );
}

export default Profile;