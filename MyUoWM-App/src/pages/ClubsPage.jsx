import { Box } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import ServicesCard from "../components/ServicesCard";
import { useScrollToTopOnLoad, useClubs } from "../hooks"
export default function ClubsPage() {
  const services = useClubs();
  useScrollToTopOnLoad();

  return (
    <Box>
      <Tabs
        fontFamily="Syne"
        variant="enclosed"
        colorScheme={useColorModeValue("#00ABC1", "#f3f3f3")}
      >
        <TabList flex="1">
          {services.map((service) => {
            return <Tab>{service.tabName}</Tab>;
          })}
        </TabList>
        <TabPanels>
          {services.map(({ services }) => {
            return (
              <TabPanel>
                {services.map((service) => {
                  return <ServicesCard srv={service} key={service.url} />;
                })}
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
