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

import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ServicesCard from "../components/ServicesCard";
import { useClubs, useDepName } from "../hooks";
import { DEP_CAMPUS_MAP, CAMPUS_MAPS, CAMPUSES } from "../assets/data/MapData";
import { colors } from "../theme/theme";
import i18n from "../i18n";

export default function ClubsPage() {
  const { depCode } = useDepName();
  const services = useClubs(depCode);

  const isGreek = i18n.language === "el";
  const campus = depCode
    ? DEP_CAMPUS_MAP[depCode] ?? CAMPUSES.KASTORIA
    : CAMPUSES.KASTORIA;
  const campusData = CAMPUS_MAPS[campus];
  const campusLabel = isGreek ? campusData.label_el : campusData.label_en;

  const labelColor = useColorModeValue(colors.primary, colors.lightBg);

  return (
    <Box>
      {/* Campus label */}
      <Text
        fontFamily="Syne"
        fontWeight="bold"
        fontSize={{ base: "md", lg: "xl" }}
        color={labelColor}
        textAlign="center"
        mt="1rem"
        mb="0.5rem"
      >
        {campusLabel}
      </Text>

      <Tabs
        fontFamily="Syne"
        variant="enclosed"
        colorScheme={useColorModeValue(colors.primary, colors.lightBg)}
      >
        <TabList flex="1">
          {services.map((service) => (
            <Tab key={service.tabName}>{service.tabName}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {services.map(({ tabName, services: items }) => (
            <TabPanel key={tabName}>
              {items.map((service) => (
                <ServicesCard srv={service} key={service.url} />
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
