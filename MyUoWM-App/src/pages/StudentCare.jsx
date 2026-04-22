import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import ServicesCard from "../components/ServicesCard";
import i18n from "../i18n";
import React from 'react';
import { colors } from "../theme/theme";


function StudentCarePage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
    width: '100%',
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={containerStyle}>
      <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue(colors.primary, colors.lightBg)}
          bg={useColorModeValue(colors.primary, colors.lightBg)}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py="1rem"
          px="0.75rem"
          width="80%"
          height="10%"
        >
          <Flex
            mx="1rem"
            alignItems="center"
            rowGap={"0.75rem"}
            justifyContent={"center"}
            columnGap={"1rem"}
            color={useColorModeValue(colors.lightBg, "black")}
            fontFamily="Syne"
            w="100%"
            fontSize={{ base: "md", lg: "2xl" }}
          > 
            {i18n.t("StudentCare")}
          </Flex>
      </Box>
      <br></br>
      <div style={{width:'80%', margin:'auto'}}>
          <ServicesCard
                srv={{
                url: "https://myfeo.uowm.gr/en/archiki-english/", 
                title: i18n.t("Myfeo"),
                imgUrl: "UoWM.png",
                }}
              />
              <ServicesCard
                srv={{ 
                url: "https://holistic.uowm.gr/",
                title: i18n.t("OlistikhMerimna"), 
                imgUrl: "UoWM.png" }}
              />
              <ServicesCard
                srv={{ 
                url: "https://www.uowm.gr/dioikisi/dioikitikes-ypiresies/dieythynsi-akadimaikon-thematon-kai-foititikis-merimnas/tmima-foititikis-spoydastikis-merimnas/iatrofarmakeytiki-perithalpsi/",
                title: i18n.t("MedicalCare"), 
                imgUrl: "UoWM.png" }}
              />
              <ServicesCard
                srv={{
                url: "https://www.uowm.gr/dioikisi/dioikitikes-ypiresies/dieythynsi-akadimaikon-thematon-kai-foititikis-merimnas/tmima-foititikis-spoydastikis-merimnas/sitisi/", 
                title: i18n.t("Sitish"), 
                imgUrl:"UoWM.png",
                }}
              />
              <ServicesCard
                srv={{
                url: "https://www.uowm.gr/dioikisi/dioikitikes-ypiresies/dieythynsi-akadimaikon-thematon-kai-foititikis-merimnas/tmima-foititikis-spoydastikis-merimnas/stegasi/", 
                title: i18n.t("Stegash"), 
                imgUrl: "UoWM.png",
                }}
              />
              <ServicesCard
                srv={{
                url: "https://www.uowm.gr/dioikisi/dioikitikes-ypiresies/dieythynsi-akadimaikon-thematon-kai-foititikis-merimnas/tmima-foititikis-spoydastikis-merimnas/foititiko-stegastiko-epidoma/", 
                title: i18n.t("FoithtikoEpidoma"), 
                imgUrl: "UoWM.png",
                }}
              />
              <ServicesCard
                srv={{
                url: "https://www.uowm.gr/dioikisi/dioikitikes-ypiresies/dieythynsi-akadimaikon-thematon-kai-foititikis-merimnas/tmima-foititikis-spoydastikis-merimnas/eyropaiki-karta-asfalisis/", 
                title: i18n.t("EuroCardAsfalish"), 
                imgUrl: "UoWM.png",
                }}
              />
        </div>
      
      
    </div>
  );
}

export default StudentCarePage;



