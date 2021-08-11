import React from "react";
import * as Styles from "./Search.module.css";

import { Input, IconButton, Tabs, TabList, TabPanel, Tab, TabPanels } from "@chakra-ui/react";
import {
    AiOutlineSearch,
} from "react-icons/ai";
// import Posts from "../Posts/Posts";


const Search = () => {
    return <div className={Styles.Search}>
        <div className={Styles.SearchBar}>
            <Input placeholder="search" color="teal" />
            <IconButton aria-label="Search database" icon={<AiOutlineSearch />} />
        </div>

        <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
                <Tab>Posts</Tab>
                <Tab>Tutors</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    {/* <Posts /> */}
                </TabPanel>
                <TabPanel>
                    <p>A list of Tutors with same name!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>

    </div>
}

export default Search;