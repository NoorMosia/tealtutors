import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

import Left from "../../containers/Left/Left";

function RightDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <div ref={btnRef} onClick={onOpen}>
                <Icon as={AiOutlineMenu} w={10} h={10} />
            </div>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Left />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default RightDrawer;