import { Box, Heading, useToast } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDepName, usePersonnelLink } from "../hooks";
import i18n from "../i18n";

export default function AcademicPersonnelPage() {
  const { depCode } = useDepName();
  const toast = useToast();
  const navigate = useNavigate();
  const personnelLink = usePersonnelLink(depCode);
  const didRedirect = useRef(false);

  useEffect(() => {
    if (didRedirect.current) return;
    didRedirect.current = true;

    if (!depCode || !personnelLink) {
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

    window.open(personnelLink.link, "_blank", "noopener,noreferrer");
    navigate("/");
  }, []);

  return (
    <Box>
      <Heading textAlign="center" marginTop="50px">
        {i18n.t("redirecting")}
      </Heading>
    </Box>
  );
}