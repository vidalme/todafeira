import { useState } from "react";

import {
  Flex,
  HStack,
  Spacer,
  Grid,
  GridItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import UserSession from "../components/UserSession";
import Footer from "../components/Footer";

export default function RootLayout() {
  const [mobNavbar, setMobNavbar] = useState(false);

  return (
    <Flex justifyContent="center">
      {mobNavbar && <MobileNavbar setMobNavbar={setMobNavbar} />}
      <Grid h="100%" w={["100%", "95%"]} maxW="1280">
        <GridItem>
          <Flex as="nav" alignItems="center" my="20px">
            <HStack fontWeight="bold" alignItems="center" gap=".5em" pl="1em">
              <HamburgerIcon
                onClick={() => {
                  setMobNavbar(true);
                }}
                color="green.500"
                boxSize="1.5em"
                display={["flex", "flex", "flex", "none"]}
                cursor="pointer"
              />
              <Text fontSize={["xl", "2xl", "3xl"]} color="green.500">
                daTerra
              </Text>
            </HStack>

            <Flex ml="auto">
              <Navbar />
              <UserSession />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
    </Flex>
  );
}