import React from "react";
import * as Styles from "./Profile.module.css";

import { Avatar, Button, Tabs, Tab, TabList, TabPanel, TabPanels, Stack, AvatarBadge } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { users } from "../../ui/Data";

import Posts from "../../containers/Posts/Posts";
import Schedule from "../Schedule/Schedule";

const Profile = props => {
    const { id } = useParams();
    const user = users.find(user => {
        return user.username === id;
    })
    return (
        <div className={Styles.Profile}>
            <div className={Styles.Head}>
                <div className={Styles.HeadTop}>
                    <div className={Styles.Image}>
                        <Link to={"/live/" + user.username}>
                            <Stack direction="row" spacing={4}>
                                <Avatar size="xl" name={user.name} src={user.img} >
                                    <AvatarBadge borderColor="papayawhip" bg="red" boxSize="1.25em" />
                                </Avatar>
                            </Stack>
                        </Link>
                    </div>
                    <div className={Styles.Buttons}>
                        {/* <Button colorScheme="teal" variant="outline">Follow</Button>
                        <Button colorScheme="teal" variant="outline">Subscribe</Button> */}
                        <Button colorScheme="teal" variant="outline">Update</Button>
                    </div>
                </div>

                <div className={Styles.HeadBottom}>

                    <div className={Styles.Names}>
                        <h2>{user.name}</h2>
                        <p>@{user.username}</p>
                    </div>
                    <div className={Styles.DescriptionText}>
                        {user.description}
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