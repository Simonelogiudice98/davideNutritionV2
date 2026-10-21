"use client";

import * as React from "react";
import { Box, Stack, alpha } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { colors, goldGradient } from "@/theme/theme";

type Props = {
  whatsapp?: string;
  email?: string;
  message?: string;
};

const encode = (s: string) => encodeURIComponent(s);

const buttonSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1.25,
  textDecoration: "none",
  px: 1.5,
  py: 1.25,
  borderRadius: 999,
  bgcolor: alpha(colors.bgPaper, 0.85),
  backdropFilter: "blur(12px)",
  border: `1px solid ${alpha(colors.goldMain, 0.3)}`,
  color: "primary.light",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: 0.3,
  transition: "all .3s cubic-bezier(.2,.8,.2,1)",
  cursor: "pointer",
  boxShadow: `0 8px 24px ${alpha("#000", 0.4)}`,
  "&:hover": {
    transform: "translateY(-3px) scale(1.02)",
    borderColor: colors.goldMain,
    boxShadow: `0 12px 30px ${alpha("#000", 0.5)}, 0 0 20px ${alpha(
      colors.goldMain,
      0.3,
    )}`,
  },
  "&:focus-visible": {
    outline: `2px solid ${alpha(colors.goldMain, 0.7)}`,
    outlineOffset: 2,
  },
} as const;

const iconWrapSx = {
  display: "grid",
  placeItems: "center",
  width: 34,
  height: 34,
  borderRadius: 999,
  backgroundImage: goldGradient,
  color: "#0A0A0A",
  flexShrink: 0,
  "& svg": { fontSize: 20 },
} as const;

const FloatingContacts: React.FC<Props> = ({
  whatsapp = "+447444660645",
  email = "info@example.com",
  message = "Hi! I'd like to know more about your consultations.",
}) => {
  const waHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encode(
    message,
  )}`;
  const mailHref = `mailto:${email}?subject=${encode("Information request")}`;

  return (
    <Stack
      role="navigation"
      aria-label="Quick contacts"
      direction="column"
      spacing={1.25}
      sx={{
        position: "fixed",
        right: { xs: 12, sm: 18 },
        bottom: { xs: 12, sm: 18 },
        zIndex: 1200,
      }}
    >
      <Box
        component="a"
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        sx={buttonSx}
      >
        <Box sx={iconWrapSx}>
          <WhatsAppIcon />
        </Box>
        <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
          WhatsApp
        </Box>
      </Box>

      <Box
        component="a"
        href={mailHref}
        aria-label="Send us an email"
        sx={buttonSx}
      >
        <Box sx={iconWrapSx}>
          <MailOutlineIcon />
        </Box>
        <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
          Email
        </Box>
      </Box>
    </Stack>
  );
};

export default FloatingContacts;
