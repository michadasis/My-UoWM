/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

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

import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Divider, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import ProjectMembersCard from "../components/ProjectMembersCard";

export default function ProjectMembersList({ membersList, subsections, heading }) {
  const borderColor = useColorModeValue("primary", "light");
  const textColor = useColorModeValue("black", "white");
  const subheadingColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box borderRadius="20" w="100%" py="1rem" overflow="hidden" border="2px" borderColor={borderColor}>
      <AccordionItem border="none" w="100%">
        <Flex>
          <AccordionButton
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="start"
            _hover={{ bg: "transparent" }}
            w="100%"
            h="100%"
            outline="none"
            textAlign="left"
            bgColor="transparent"
            color={textColor}
            border="none"
            overflow="hidden"
            gap={3}
          >
            <Text w="100%" display="flex" direction="row" alignItems="center" justifyContent="center" fontWeight="bold" fontSize={{ sm: 14, md: 16, lg: 18 }}>
              {heading}
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Flex>
        <AccordionPanel bgColor="transparent" pb={0}>
          {subsections
            ? subsections.map(({ heading: subheading, members }, i) => (
                <Box key={subheading}>
                  {i > 0 && <Divider my={3} borderColor={borderColor} opacity={0.4} />}
                  <Text
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize={{ sm: 12, md: 13, lg: 15 }}
                    color={subheadingColor}
                    mb={2}
                    mt={i === 0 ? 1 : 0}
                  >
                    {subheading}
                  </Text>
                  {members.map((data) => (
                    <ProjectMembersCard data={data} key={data.name} />
                  ))}
                </Box>
              ))
            : membersList.map((data) => (
                <ProjectMembersCard data={data} key={data.name} />
              ))}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}
