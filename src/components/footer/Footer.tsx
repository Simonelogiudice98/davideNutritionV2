"use client";

import * as React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  Button,
  Grid,
  alpha,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { colors, goldGradient } from "@/theme/theme";

type Props = {
  brand?: string;
  year?: number;
  email: string;
  whatsappUrl: string;
  privacyHref?: string;
  cookiesHref?: string;
  showBackToTop?: boolean;
};

const Footer: React.FC<Props> = ({
  brand = "Davide Nutrition",
  year = new Date().getFullYear(),
  email,
  whatsappUrl,
  privacyHref = "/privacy",
  cookiesHref = "/cookies",
  showBackToTop = true,
}) => {
  const linkSx = {
    color: alpha("#fff", 0.62),
    textDecoration: "none",
    fontSize: 12.5,
    letterSpacing: 0.3,
    transition: "color .2s ease",
    "&:hover": { color: colors.goldLight },
  } as const;

  const onTop = () =>
    typeof window !== "undefined" &&
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 10 },
        pt: { xs: 5, md: 7 },
        pb: 3,
        position: "relative",
        backgroundColor: colors.bgBase,
        backgroundImage: `
          radial-gradient(900px 500px at 30% 20%, ${alpha(
            colors.goldMain,
            0.12,
          )}, transparent 60%),
          radial-gradient(700px 280px at 85% 10%, ${alpha(
            colors.goldDark,
            0.04,
          )}, transparent 55%)
        `,
        borderTop: `1px solid ${alpha(colors.goldMain, 0.12)}`,
      }}
    >
      <Container maxWidth={false} sx={{ width: "min(1200px, 96%)", mx: "auto" }}>
        <Stack spacing={4}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      position: "relative",
                      width: 56,
                      height: 56,
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/brand/logo.png"
                      alt={brand}
                      fill
                      sizes="56px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-playfair), serif",
                        fontWeight: 700,
                        fontSize: 22,
                        letterSpacing: -0.4,
                        background: goldGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {brand}
                    </Typography>
                    <Typography
                      sx={{
                        color: alpha("#fff", 0.6),
                        fontSize: 11,
                        letterSpacing: 2.5,
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      Registered Nutritionist
                    </Typography>
                  </Box>
                </Stack>

                <Typography
                  sx={{
                    color: alpha("#fff", 0.7),
                    maxWidth: 380,
                    fontSize: 14,
                    lineHeight: 1.75,
                  }}
                >
                  Evidence-based nutrition coaching for combat-sport athletes,
                  gym-goers and active people. Online & in-person consultations.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
              <Typography
                variant="overline"
                sx={{ color: "primary.light", letterSpacing: 3, mb: 2, display: "block" }}
              >
                Get in touch
              </Typography>
              <Stack spacing={1.25}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<MailOutlineIcon />}
                  component="a"
                  href={`mailto:${email}`}
                  sx={{ justifyContent: "flex-start", borderRadius: 1.5 }}
                >
                  {email}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<WhatsAppIcon />}
                  component="a"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ justifyContent: "flex-start", borderRadius: 1.5 }}
                >
                  Message on WhatsApp
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
              <Typography
                variant="overline"
                sx={{ color: "primary.light", letterSpacing: 3, mb: 2, display: "block" }}
              >
                Explore
              </Typography>
              <Stack spacing={1.25}>
                <MuiLink href="#what-you-get" sx={linkSx}>
                  What you get
                </MuiLink>
                <MuiLink href="#plans" sx={linkSx}>
                  Nutrition plans
                </MuiLink>
                <MuiLink href="#meet-expert" sx={linkSx}>
                  Meet your expert
                </MuiLink>
                <MuiLink href="#testimonials" sx={linkSx}>
                  Testimonials
                </MuiLink>
                <MuiLink href="#faq" sx={linkSx}>
                  FAQ
                </MuiLink>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: alpha("#fff", 0.08) }} />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
          >
            <Typography sx={{ color: alpha("#fff", 0.5), fontSize: 12 }}>
              © {year} {brand}. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={2.5} alignItems="center">
              <MuiLink href={privacyHref} sx={linkSx}>
                Privacy
              </MuiLink>
              <MuiLink href={cookiesHref} sx={linkSx}>
                Cookies
              </MuiLink>

              {showBackToTop && (
                <IconButton
                  onClick={onTop}
                  aria-label="Back to top"
                  size="small"
                  sx={{
                    borderRadius: 999,
                    border: `1px solid ${alpha(colors.goldMain, 0.3)}`,
                    bgcolor: alpha(colors.goldMain, 0.04),
                    color: "primary.light",
                    "&:hover": {
                      bgcolor: alpha(colors.goldMain, 0.12),
                      borderColor: colors.goldMain,
                      transform: "translateY(-2px)",
                    },
                    transition: "all .25s ease",
                  }}
                >
                  <KeyboardArrowUpIcon fontSize="small" />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
