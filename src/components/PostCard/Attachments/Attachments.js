import React from "react";
import * as Styles from "./Attachments.module.css";
import { Collapse, Box } from "@chakra-ui/react"

const Attachments = props => {
    return (
        <div className={Styles.Attachments}>
            <Collapse in={props.isOpen} animateOpacity>
                <Box
                    p="40px"
                    color="white"
                    mt="4"
                    bg="teal.500"
                    rounded="md"
                    shadow="md"
                >
                </Box>
            </Collapse>
        </div>
    )
}


export default Attachments;