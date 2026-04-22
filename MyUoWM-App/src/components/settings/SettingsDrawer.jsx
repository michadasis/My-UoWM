import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerFooter,
    FormControl,
    Flex,
    Box,
    useColorModeValue,
    Button
} from "@chakra-ui/react";
import {
    FaQuestionCircle,
    FaInfoCircle,
    FaFileAlt,
    FaShareAlt,
    FaGitlab,
    FaBook,
    FaRegComment,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CloseIcon } from "../../assets/icons";
import i18n from "../../i18n";
import LanguagePicker from "./LanguagePicker";
import SettingsOption from "./SettingsOption";
import ThemeToggle from "./ThemeToggle";
import { colors } from "../../theme/theme";

export function SettingsDrawer({ isOpen, onClose }) {
    const handleShare = (e) => {
        const shareOpts = {
            title: "my-UWoM",
            url: "https://github.com/ieeesbkastoria/My-UoWM",
        };
        // on PCs the function does not exist we can define another behavior
        if (navigator.canShare) {
            if (navigator.canShare(shareOpts)) {
                navigator.share(shareOpts);
            }
        }


    };
    return (
        <Drawer
            fontFamily="Syne"
            placement={"right"}
            onClose={onClose}
            isOpen={isOpen}
            autoFocus={false}
            size={["full", "md", "lg"]}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader
                    color={useColorModeValue(colors.primary, colors.lightBg)}
                    backgroundColor={useColorModeValue(colors.lightBg, "black")}
                    borderBottomWidth="1px"
                    fontFamily="Syne"
                >
                    {i18n.t("settings_title")}
                </DrawerHeader>
                <DrawerBody
                    backgroundColor={useColorModeValue(colors.lightBg, "black")}
                    fontFamily="Syne"
                >
                    <Flex
                        direction="column"
                        fontFamily="Syne"
                        justifyItems={"center"}
                        color={useColorModeValue(colors.primary, colors.lightBg)}
                        borderRadius="0.5rem"
                        my={"2rem"}
                    >
                        <LanguagePicker />
                    </Flex>
                    <Box>
                        <FormControl
                            display="flex"
                            alignItems="flex-start"
                            justifyContent={"space-between"}
                            color={useColorModeValue(colors.primary, colors.lightBg)}
                            my={"2rem"}
                        >
                            <ThemeToggle />
                        </FormControl>

                        <Box
                            color={useColorModeValue(colors.primary, colors.lightBg)}
                            alignItems="flex-start"
                            justifyContent={"space-between"}
                        >
                            <Link to={"/faq"}>
                                <SettingsOption Icon={FaQuestionCircle} onClick={onClose} text={i18n.t("frequent_questions")} />
                            </Link>

                            <Link to={"/about"}>
                                <SettingsOption Icon={FaInfoCircle} onClick={onClose} text={i18n.t("about_us")} />
                            </Link>

                            <a
                                href="https://gitlab.com/opensourceuom/myUoM/-/blob/main/LICENSE"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SettingsOption Icon={FaFileAlt} onClick={onClose} text={i18n.t("license")} />
                            </a>
                            <a
                                href={i18n.t("app_manual_link")}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SettingsOption Icon={FaBook} onClick={onClose} text={i18n.t("app_manual")} />

                            </a>
                            {/* <SettingsOption Icon={FaShareAlt} onClick={handleShare} text={i18n.t("share_app")} /> */}
                            <a
                                href="https://netsim.cs.uowm.gr/gitlab/ieee-lab/my.cs.uowm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SettingsOption Icon={FaGitlab} onClick={onClose} text={i18n.t("gitlab_contribute")} />
                            </a>
                            <a
                                href="https://forms.gle/FhbS51RGeBb1xzKi7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SettingsOption Icon={FaRegComment} onClick={onClose} text={i18n.t("form_feedback")} />
                            </a>
                        </Box>
                    </Box>
                </DrawerBody>

                <DrawerFooter
                    backgroundColor={useColorModeValue(colors.lightBg, "black")}
                    color={useColorModeValue(colors.primary, colors.lightBg)}
                    justifyContent={"center"}
                >
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        fontWeight="bold"
                        fontFamily="Syne"
                        fontSize={{ base: "sm", lg: "lg" }}
                        _hover={false}
                        leftIcon={<Box ml="0.5rem" pt="0.4rem">
                            <CloseIcon />
                        </Box>}
                    >
                        {i18n.t("close")}
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>);
}
