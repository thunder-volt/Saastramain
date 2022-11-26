import * as React from "react";
import { Flex, Heading, } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { DrawerDesktopMenuItems, DrawerMobileMenuItems } from "./DrawerMenuItems";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDrawer = (props: Props) => {
  const { isOpen } = useDisclosure({ isOpen: props.isOpen });
  const closeButtonSize = useBreakpointValue({ base: "lg", lg: "xl" });

  return (
    <Drawer
      placement="right"
      onClose={props.onClose}
      isOpen={isOpen}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Heading as="h3" size="lg" p={3} pl={{ base: 0, lg: 3 }}>Our Menu</Heading>
          <DrawerCloseButton
            variant="unstyled"
            mt={3}
            mr={3}
            p={2}
            outline="none"
            borderRadius="50%"
            size={closeButtonSize}
          />
        </DrawerHeader>
        <DrawerBody maxHeight={"calc(100vh - 92px)"} overflowY="scroll">
          <Flex flexDirection="row" justifyContent="center" alignItems="center" flex={1}>
            {window.innerWidth > 600 ?
              <DrawerDesktopMenuItems /> :
              <DrawerMobileMenuItems />
            }
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
