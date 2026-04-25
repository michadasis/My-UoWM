/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/
import React from 'react';
import { Flex, Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
import i18n from "../i18n";
import { TimeIcon, PhoneIcon } from "@chakra-ui/icons";
import { colors } from "../theme/theme";
import { useDepName } from "../hooks";
import { DEP_CAMPUS_MAP, CAMPUS_MAPS, CAMPUSES } from "../assets/data/MapData";
import { LIBRARIES } from "../assets/data/Library";

export default function LibraryPage() {
  const { depCode } = useDepName();
  const isGreek = i18n.language === "el";

  const campus = depCode
    ? DEP_CAMPUS_MAP[depCode] ?? CAMPUSES.KASTORIA
    : CAMPUSES.KASTORIA;

  const lib = LIBRARIES[campus];
  const campusData = CAMPUS_MAPS[campus];
  const campusLabel = isGreek ? campusData.label_el : campusData.label_en;

  const { on_weekdays, on_saturday, on_sunday } = lib.opening_hours;

  // Combine Sat+Sun into one row if both closed
  const satSunBothClosed = !on_saturday.start && !on_sunday.start;

  const borderColor = useColorModeValue(colors.primary, colors.lightBg);
  const boxBg       = useColorModeValue(colors.primary, colors.lightBg);
  const boxColor    = useColorModeValue(colors.lightBg, "black");
  const btnColor    = useColorModeValue(colors.primary, colors.lightBg);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Flex
      w="100vw"
      overflowX="hidden"
      flexDirection="column"
      alignItems="center"
    >
      {/* Campus label */}
      <Text
        fontFamily="Syne"
        fontWeight="bold"
        fontSize={{ base: "md", lg: "xl" }}
        color={borderColor}
        mt="1rem"
        mb="0"
      >
        {campusLabel}
      </Text>

      <Flex
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        columnGap={"3rem"}
        alignItems="center"
        justifyContent={"center"}
        width={{ sm: "100%", lg: "fit-content" }}
        height="100%"
        paddingX="16px"
        margin={{ sm: "1rem", lg: "5rem 0 10rem 0" }}
      >
        {/* ── Ωράριο ── */}
        <Box
          border="2px"
          borderRadius="1rem"
          bg={boxBg}
          borderColor={borderColor}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          px="1.5rem"
          py="1.5rem"
          width="100%"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="auto"
        >
          <Flex
            flexDirection={"column"}
            alignItems="center"
            h="fit-content"
            fontFamily="Syne"
            w="100%"
            fontSize={{ base: "md", lg: "xl" }}
            color={boxColor}
          >
            <Flex flexDirection={"row"} alignItems="center">
              <TimeIcon w={30} h={30} />
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                ml="1rem"
                as="span"
                fontWeight={"bold"}
              >
                {i18n.t("orario")}
              </Text>
            </Flex>

            {/* Mon–Fri */}
            <Flex mt="1rem" flexDirection={"row"} alignItems="center">
              <Box mx="0.5rem">
                <Text as="" fontWeight={"bold"}>{i18n.t("defPar")}</Text>
              </Box>
              <Box mx="0.5rem">
                {on_weekdays.start} – {on_weekdays.end}
              </Box>
            </Flex>

            {/* Saturday */}
            {!satSunBothClosed && (
              <Flex mt="1rem" flexDirection={"row"} alignItems="center">
                <Box mx="1rem">
                  <Text as="" fontWeight={"bold"}>{i18n.t("savvato")}:</Text>
                </Box>
                <Box mx="0.5rem">
                  {on_saturday.start
                    ? `${on_saturday.start} – ${on_saturday.end}`
                    : i18n.t("kleista")}
                </Box>
              </Flex>
            )}

            {/* Sunday — or combined Sat-Sun when both closed */}
            <Flex mt="1rem" flexDirection={"row"} alignItems="center">
              <Box mx="1rem">
                <Text as="" fontWeight={"bold"}>
                  {satSunBothClosed
                    ? `${i18n.t("savvato")} - ${i18n.t("kyriaki")}:`
                    : `${i18n.t("kyriaki")}:`}
                </Text>
              </Box>
              <Box mx="0.5rem">
                {on_sunday.start
                  ? `${on_sunday.start} – ${on_sunday.end}`
                  : i18n.t("kleista")}
              </Box>
            </Flex>
          </Flex>
        </Box>
        {/* Επικοινωνία  */}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor={borderColor}
          bg={boxBg}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py="1rem"
          px="0.75rem"
          width="100%"
          height="auto"
        >
          <Flex
            mx="1rem"
            flexDirection={"column"}
            alignItems="center"
            rowGap={"0.75rem"}
            alignContent={"center"}
            justifyContent={"center"}
            columnGap={"1rem"}
            color={boxColor}
            fontFamily="Syne"
            w="auto"
            fontSize={{ base: "md", lg: "2xl" }}
          >
            <Flex flexDirection={"row"} justifyContent="center">
              <PhoneIcon w={27} h={27} />
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                ml="1rem"
                as="span"
                fontWeight={"bold"}
              >
                {i18n.t("epikoinonia")}
              </Text>
            </Flex>

            <Flex
              flexDirection={"column"}
              alignItems="center"
              justifyContent="center"
              w="100%"
              fontSize={{ base: "md", lg: "xl" }}
            >
              {lib.staff.map((person, idx) => (
                <Flex key={idx} flexDirection="column" alignItems="center" mb="0.5rem">
                  <Text>
                    {isGreek
                      ? `${person.name_el}, ${person.role_el}`
                      : `${person.name_en}, ${person.role_en}`}
                  </Text>
                  <Text>{`email: ${person.email}`}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex
        display={"flex"}
        flexDirection={"column"}
        gap={{ base: "1rem", lg: "2rem" }}
      >
        <Button
          color={btnColor}
          variant="ghost"
          fontWeight="bold"
          fontFamily="Syne"
          fontSize={{ base: "lg", lg: "2xl" }}
          rightIcon={
            <Box ml="0.5rem">
              <svg width="15px" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.873535 9L8.91951 1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} stroke={btnColor} />
                <path d="M0.873535 1H8.91951V9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} stroke={btnColor} />
              </svg>
            </Box>
          }
          onClick={() => window.open(lib.websiteUrl, "_blank", "noopener,noreferrer")}
          justifyContent="center"
        >
          {i18n.t("istoselidaVivliothikis")}
        </Button>
        <Button
          color={btnColor}
          variant="ghost"
          fontWeight="bold"
          fontFamily="Syne"
          fontSize={{ base: "lg", lg: "2xl" }}
          rightIcon={
            <Box ml="0.5rem">
              <svg width="15px" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.873535 9L8.91951 1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} stroke={btnColor} />
                <path d="M0.873535 1H8.91951V9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} stroke={btnColor} />
              </svg>
            </Box>
          }
          onClick={() => window.open(lib.catalogUrl, "_blank", "noopener,noreferrer")}
          justifyContent="center"
        >
          {i18n.t("katalogosbibliothikis")}
        </Button>
      </Flex>
    </Flex>
  );
}