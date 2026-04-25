/*
  MIT License

  Copyright (c) 2024 Open Source UOM

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

*/

import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  ButtonGroup,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import i18n from "../i18n";
import { colors } from "../theme/theme";
import { useDepName } from "../hooks";
import { CAMPUSES, CAMPUS_MAPS, DEP_CAMPUS_MAP } from "../assets/data/MapData";

// All campuses in display order
const ALL_CAMPUSES = [
  CAMPUSES.KOZANI,
  CAMPUSES.FLORINA,
  CAMPUSES.KASTORIA,
  CAMPUSES.PTOLEMAIDA,
];

function MapPage() {
  const { depCode } = useDepName();
  const isGreek = i18n.language === "el";

  // Default to the user's department campus, or Kastoria if none selected
  const defaultCampus = depCode
    ? DEP_CAMPUS_MAP[depCode] ?? CAMPUSES.KASTORIA
    : CAMPUSES.KASTORIA;

  const [activeCampus, setActiveCampus] = useState(defaultCampus);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    // If the user's department changes, follow it
    if (depCode && DEP_CAMPUS_MAP[depCode]) {
      setActiveCampus(DEP_CAMPUS_MAP[depCode]);
    }
  }, [depCode]);

  const campusData = CAMPUS_MAPS[activeCampus];
  const campusLabel = isGreek ? campusData.label_el : campusData.label_en;

  const borderColor = useColorModeValue(colors.primary, colors.lightBg);
  const headerBg = useColorModeValue(colors.primary, colors.lightBg);
  const headerColor = useColorModeValue(colors.lightBg, "black");
  const activeScheme = useColorModeValue("teal", "yellow");

  return (
    <Flex direction="column" align="center" minH="100vh" pb="2rem">
      {/* Info banner */}
      <Box
        border="2px"
        borderRadius="1rem"
        borderColor={borderColor}
        bg={headerBg}
        mt="1rem"
        mb="0.75rem"
        py="0.75rem"
        px="1rem"
        width="90%"
      >
        <Text
          color={headerColor}
          fontFamily="Syne"
          fontSize={{ base: "sm", lg: "xl" }}
          textAlign="center"
        >
          {i18n.t("MapInfo")}
        </Text>
      </Box>

      {/* Campus tabs */}
      <ButtonGroup
        isAttached
        variant="outline"
        mb="0.75rem"
        flexWrap="wrap"
        justifyContent="center"
        gap={1}
        px="1rem"
      >
        {ALL_CAMPUSES.map((campus) => {
          const data = CAMPUS_MAPS[campus];
          const label = isGreek ? data.label_el : data.label_en;
          const isActive = activeCampus === campus;
          return (
            <Button
              key={campus}
              fontFamily="Syne"
              size={{ base: "sm", lg: "md" }}
              colorScheme={isActive ? activeScheme : "gray"}
              variant={isActive ? "solid" : "outline"}
              onClick={() => setActiveCampus(campus)}
            >
              {label}
            </Button>
          );
        })}
      </ButtonGroup>

      {/* Active campus label */}
      <Text
        fontFamily="Syne"
        fontWeight="bold"
        fontSize={{ base: "md", lg: "xl" }}
        mb="0.5rem"
        color={borderColor}
      >
        {campusLabel}
      </Text>

      {/* Map iframe */}
      <Box
        width="90%"
        flex="1"
        minH={{ base: "400px", lg: "600px" }}
        border="2px"
        borderColor={borderColor}
        borderRadius="1rem"
        overflow="hidden"
      >
        <iframe
          key={activeCampus}
          src={campusData.embedUrl}
          width="100%"
          height="100%"
          style={{ minHeight: "400px", border: 0 }}
          title={campusLabel}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      {/* Open in Google Maps link */}
      <Link
        href={campusData.googleMapsUrl}
        isExternal
        mt="0.75rem"
        fontFamily="Syne"
        fontWeight="bold"
        color={borderColor}
        fontSize={{ base: "sm", lg: "md" }}
      >
        {i18n.t("open_in_google_maps")}
      </Link>
    </Flex>
  );
}

export default MapPage;
