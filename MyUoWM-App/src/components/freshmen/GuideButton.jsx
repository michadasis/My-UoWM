import React from "react";
import { RightArrowIcon } from "../../assets/icons";
import { Flex, Spacer, Heading, useColorModeValue } from "@chakra-ui/react";
import { colors } from "../../theme/theme";

const GuideButton = ({ text, guidePath, onClick }) => {
  return (
    <Flex
      align="center"
      color="red"
      paddingY={5}
      cursor="pointer"
      onClick={() => onClick(guidePath)}
      paddingX={4}
    >
      <Heading
        fontSize={{ sm: 16, md: 18, lg: 20 }}
        w="100%"
        color={useColorModeValue("black", colors.lightBg)}
        fontWeight="mormal"
        fontFamily="Syne"
        userSelect="none"
      >
        {text}
      </Heading>
      <Spacer />
      <RightArrowIcon
        width={16}
        stroke={useColorModeValue("black", colors.lightBg)}
      />
    </Flex>
  );
};

export default GuideButton;
