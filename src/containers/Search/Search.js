import React from "react";
import * as Styles from "./Search.module.css";

import { Center, Input, IconButton, Tabs, TabList, TabPanel, Tab, TabPanels, Spinner } from "@chakra-ui/react";
import {
    AiOutlineSearch,
} from "react-icons/ai";
import Heading from "../../components/Heading/Heading";


const Search = () => {
    return <div className={Styles.Search}>
        <Heading>Search</Heading>
        <div className={Styles.SearchContent}>
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
                        <Center>
                            <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="teal.200"
                                color="teal.400"
                                size="xl" />
                        </Center>
                    </TabPanel>
                    <TabPanel>
                        <Center>
                            <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="teal.200"
                                color="teal.400"
                                size="xl" />
                        </Center>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
}

export default Search;