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
import { useClubs } from "../hooks"
import { colors } from "../theme/theme";
export default function ClubsPage() {
  const services = useClubs();

  return (
    <Box>
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
