import { Box, Heading, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDepName, usePersonnelLink } from "../hooks";
import i18n from "../i18n";

export default function AcademicPersonnelPage() {
  const { depCode } = useDepName();
  const toast = useToast();
  const navigate = useNavigate();
  const personnelLink = usePersonnelLink(depCode);

  useEffect(() => {
    if (!depCode) {
      toast({
        title: i18n.t("error_title"),
        description: i18n.t("error_description"),
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      navigate("/");
      return;
    }
    if (personnelLink) {
      window.open(personnelLink.link, "_blank", "noopener,noreferrer");
      navigate("/");
    }
  }, [depCode]);

  return (
    <Box>
      {personnelLink ? (
        <Heading textAlign="center" marginTop="50px">
          {i18n.t("redirecting")}
        </Heading>
      ) : (
        <Heading textAlign="center" marginTop="50px">
          {i18n.t("error_description")}
        </Heading>
      )}
    </Box>
  );
}
