import React from "react";
import {
  Flex,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import i18n from "../i18n";
import { menu } from "../assets/data/restaurantMenu";
import { dayKeys, greekDays } from "../utils/days";
import { getPreviousWeekKey } from "../utils/date";

export default function RestaurantUniversity() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const weekKey = getPreviousWeekKey();
  const dayKey = dayKeys[new Date().getDay()];
  const todayMenu = menu[weekKey][dayKey];

  return (
    <Flex
      w="100vw"
      overflowX="hidden"
      flexDirection="column"
      alignItems="center"
    >
      {/* Wrapper container*/}
      <Flex
        textAlign="center"
        flexDirection="column"
        rowGap="1.5rem"
        alignItems="center"
        justifyContent="center"
        width={{ sm: "100%", lg: "fit-content" }}
        paddingX="16px"
        margin={{ sm: "1rem", lg: "5rem 0 10rem 0" }}
      >

        {/*Menu Ημερας*/}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue("#00ABC1", "#f3f3f3")}
          bg={useColorModeValue("#00ABC1", "#f3f3f3")}
          px="1.5rem"
          py="1.5rem"
          width="100%"
          marginTop={{ base: "1rem", lg: "0" }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
          >
          <Box mt="1rem" w="100%">
            <Text
              fontSize={{ base: "xl", lg: "3xl" }}
              fontWeight="bold"
              mb="0.25rem"
            >
            Πρόγραμμα Εστιατορίου
            </Text>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              fontWeight="semibold"
              mt="0.25rem"
            >
            Σήμερα: {greekDays[dayKey]}
            </Text>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              fontWeight="semibold"
              mt="0.25rem"
            >
            Έχει συνοδευτικό: {todayMenu.extra}
            </Text>
            </Box>
            </Flex>
            </Box>
            {/*Πρωινό*/}
            <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue("#00ABC1", "#f3f3f3")}
          bg={useColorModeValue("#00ABC1", "#f3f3f3")}
          px="1.5rem"
          py="1.5rem"
          width="100%"
          marginTop={{ base: "1rem", lg: "0" }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
          >
            <Flex alignItems="center">
              <Text ml="1rem" fontSize={{ base: "lg", lg: "2xl" }} fontWeight="bold">
                Πρωινό
              </Text>
            </Flex>
              <Text mt="0.5rem">
                <b>Ποτα: </b>{menu.breakfast.drinks.join(", ")}
              </Text>
              <Text mt="0.5rem">
                <b>Ψωμιά: </b>{menu.breakfast.breads.join(", ")}
              </Text>
              <Text mt="0.5rem">
                <b>Αλείμματα: </b>{menu.breakfast.spreads.join(", ")}
              </Text>
              <Text mt="0.5rem">
                <b>Διάφορα: </b>{menu.breakfast.staples.join(", ")}
              </Text>
            </Flex>
            </Box>

            {/*Μεσημεριανό*/}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue("#00ABC1", "#f3f3f3")}
          bg={useColorModeValue("#00ABC1", "#f3f3f3")}
          px="1.5rem"
          py="1.5rem"
          width="100%"
          marginTop={{ base: "1rem", lg: "0" }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
          >
              <Flex alignItems="center">
              <Text ml="1rem" fontSize={{ base: "lg", lg: "2xl" }} fontWeight="bold">
                Μεσημεριανό
              </Text>
            </Flex>
              <Text mt="0.5rem">
                <b>Πρώτο Πιάτο:</b> {todayMenu.lunch.first.join(", ")}
              </Text>
              <Text mt="0.25rem">
                <b>Κυρίως Πιάτο:</b> {todayMenu.lunch.main.join(", ")}
              </Text>
            </Flex>
            </Box>
            {/*Άπογευματινο*/}
            <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue("#00ABC1", "#f3f3f3")}
          bg={useColorModeValue("#00ABC1", "#f3f3f3")}
          px="1.5rem"
          py="1.5rem"
          width="100%"
          marginTop={{ base: "1rem", lg: "0" }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
          >
              <Flex alignItems="center">
              <Text ml="1rem" fontSize={{ base: "lg", lg: "2xl" }} fontWeight="bold">
                Απογευματινό
              </Text>
            </Flex>
              <Text mt="0.5rem">
                <b>Πρώτο Πιάτο:</b> {todayMenu.dinner.first.join(", ")}
              </Text>
              <Text mt="0.25rem">
                <b>Κυρίως Πιάτο:</b> {todayMenu.dinner.main.join(", ")}
              </Text>
            </Flex>
            </Box>
  
        {/*Ωραριο*/}
        <Box
          border="2px"
          borderRadius="1rem"
          bg={useColorModeValue("#00ABC1", "#f3f3f3")}
          borderColor={useColorModeValue("#00ABC1", "#f3f3f3")}
          px="1.5rem"
          py="1.5rem"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            fontFamily="Syne"
            w="100%"
            fontSize={{ base: "md", lg: "xl" }}
            color={useColorModeValue("#f3f3f3", "black")}
          >
            <Flex alignItems="center">
              <TimeIcon w={30} h={30} />
              <Text ml="1rem" fontSize={{ base: "lg", lg: "2xl" }} fontWeight="bold">
                {i18n.t("orario")}
              </Text>
            </Flex>

            <Flex mt="1rem">
              <Text fontWeight="bold" mr="0.5rem">
                Πρωινό:
              </Text>
              <Text>7:00 – 9:00</Text>
            </Flex>
            <Flex mt="0.5rem">
              <Text fontWeight="bold" mr="0.5rem">
                Μεσημεριανό:
              </Text>
              <Text>12:00 – 16:00</Text>
            </Flex>

            <Flex mt="0.5rem">
              <Text fontWeight="bold" mr="0.5rem">
                Απογευματινό:
              </Text>
              <Text>18:00 – 21:00</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
