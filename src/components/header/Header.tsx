"use client";

import * as React from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  Typography,
  Divider,
  Button,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { goldGradient, colors } from "@/theme/theme";

type NavItem = { label: string; targetId: string };

const NAV: NavItem[] = [
  { label: "What you get", targetId: "what-you-get" },
  { label: "Meet your expert", targetId: "meet-expert" },
  { label: "Plans", targetId: "plans" },
  { label: "Testimonials", targetId: "testimonials" },
  { label: "FAQ", targetId: "faq" },
  { label: "Contact", targetId: "seminar" },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pendingTarget = React.useRef<string | null>(null);

  const closeNavigation = (target: string) => {
    pendingTarget.current = target;
    setDrawerOpen(false);
  };

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? alpha(colors.bgBase, 0.85)
          : alpha(colors.bgBase, 0.45),
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid",
        borderColor: scrolled
          ? alpha(colors.goldMain, 0.2)
          : alpha("#fff", 0.06),
        transition:
          "background-color .3s ease, border-color .3s ease, padding .3s ease",
      }}
    >
      <Toolbar
        sx={{
          width: "min(1200px, 96%)",
          mx: "auto",
          px: { xs: 1, sm: 2 },
          py: scrolled ? 0.5 : 1.5,
          minHeight: "unset !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding .3s ease",
        }}
      >
        <Box
          component="a"
          href="#top"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            cursor: "pointer",
            userSelect: "none",
            textDecoration: "none",
          }}
          aria-label="Davide Nutrition — back to top"
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 44, sm: 52 },
              height: { xs: 44, sm: 52 },
              transition: "transform .3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Image
              src="/images/brand/logo.png"
              alt="Davide Nutrition"
              fill
              sizes="52px"
              priority
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Stack spacing={0} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Typography
              sx={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 700,
                fontSize: 18,
                lineHeight: 1.05,
                letterSpacing: -0.3,
                background: goldGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Davide Nutrition
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "text.secondary",
                fontWeight: 600,
              }}
            >
              Registered Nutritionist
            </Typography>
          </Stack>
        </Box>

        <Stack
          component="nav"
          aria-label="Main navigation"
          direction="row"
          spacing={3}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {NAV.map((n) => (
            <Box
              key={n.targetId}
              component="a"
              href={`#${n.targetId}`}
              sx={{
                textDecoration: "none",
                background: "none",
                border: "none",
                p: 0,
                cursor: "pointer",
                position: "relative",
                color: "text.primary",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 0.5,
                transition: "color .25s ease",
                "&:hover": { color: "primary.light" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -6,
                  height: "1px",
                  backgroundImage: goldGradient,
                  transform: "scaleX(0)",
                  transformOrigin: "center",
                  transition: "transform .3s ease",
                },
                "&:hover::after": { transform: "scaleX(1)" },
              }}
            >
              {n.label}
            </Box>
          ))}
        </Stack>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            href="#seminar"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              fontSize: 12,
              py: 0.9,
              px: 2.2,
            }}
          >
            Book a call
          </Button>

          <IconButton
            size="large"
            edge="end"
            onClick={() => setDrawerOpen((v) => !v)}
            sx={{
              display: { md: "none" },
              color: "primary.light",
              border: "1px solid",
              borderColor: alpha(colors.goldMain, 0.3),
              borderRadius: 999,
              width: 42,
              height: 42,
              "&:hover": {
                backgroundColor: alpha(colors.goldMain, 0.08),
                borderColor: colors.goldMain,
              },
            }}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls={drawerOpen ? "mobile-navigation" : undefined}
          >
            <MenuIcon />
          </IconButton>
        </Stack>

        <Drawer
          anchor="right"
          slotProps={{ transition: { onExited: () => {
            if (pendingTarget.current) {
              document.getElementById(pendingTarget.current)?.focus({ preventScroll: true });
              pendingTarget.current = null;
            }
          } } }}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: "min(320px, 100vw)",
              bgcolor: colors.bgBase,
              borderLeft: "1px solid",
              borderColor: alpha(colors.goldMain, 0.18),
              backgroundImage: `radial-gradient(400px 200px at 80% 0%, ${alpha(
                colors.goldMain,
                0.1,
              )}, transparent 60%)`,
            },
          }}
        >
          <Box component="nav" id="mobile-navigation" aria-label="Mobile navigation" sx={{ p: 2.5 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  fontSize: 18,
                  background: goldGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Menu
              </Typography>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                sx={{ color: "primary.light" }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>

            <Divider sx={{ my: 2.5 }} />

            <Stack spacing={0.75}>
              {NAV.map((n) => (
                <Button
                  key={n.targetId}
                  href={`#${n.targetId}`}
                  onClick={() => closeNavigation(n.targetId)}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    color: "text.primary",
                    fontWeight: 600,
                    fontSize: 14,
                    borderRadius: 1.5,
                    py: 1.25,
                    px: 1.5,
                    backgroundColor: alpha("#fff", 0.02),
                    border: "1px solid transparent",
                    "&:hover": {
                      backgroundColor: alpha(colors.goldMain, 0.06),
                      borderColor: alpha(colors.goldMain, 0.2),
                      color: "primary.light",
                    },
                  }}
                >
                  {n.label}
                </Button>
              ))}

              <Button
                variant="contained"
                color="primary"
                fullWidth
                href="#seminar"
                onClick={() => closeNavigation("seminar")}
                sx={{ mt: 2, py: 1.2 }}
              >
                Book a call
              </Button>
            </Stack>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
