"use client";

import { alpha, createTheme } from "@mui/material/styles";

const goldDark = "#B8860B";
const goldMain = "#D4AF37";
const goldLight = "#F5C400";
const goldShimmer = "#F4D03F";

const bgBase = "#070707";
const bgPaper = "#0F0F10";
const bgElev = "#15151A";

const textPrimary = "#F2F2F2";
const textMuted = alpha("#FFFFFF", 0.62);

const borderSoft = `1px solid ${alpha("#FFFFFF", 0.06)}`;
const borderStrong = `1px solid ${alpha(goldMain, 0.22)}`;

const shadowDeep = "0 24px 80px rgba(0,0,0,0.55)";
const ringGoldSoft = `0 0 0 1px ${alpha(goldMain, 0.14)}`;
const ringGoldStrong = `0 0 0 1px ${alpha(goldMain, 0.28)}, 0 0 22px ${alpha(goldMain, 0.18)}`;

export const goldGradient = `linear-gradient(135deg, ${goldDark} 0%, ${goldMain} 35%, ${goldShimmer} 55%, ${goldMain} 75%, ${goldDark} 100%)`;
export const goldText = {
  background: goldGradient,
  // Keep the gradient paint area clear of Playfair's ascenders and descenders.
  paddingBlock: "0.12em",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

export const colors = {
  goldDark,
  goldMain,
  goldLight,
  goldShimmer,
  bgBase,
  bgPaper,
  bgElev,
  textPrimary,
  textMuted,
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: goldMain,
      light: goldLight,
      dark: goldDark,
      contrastText: "#0A0A0A",
    },
    background: {
      default: bgBase,
      paper: bgPaper,
    },
    text: {
      primary: textPrimary,
      secondary: textMuted,
    },
    divider: alpha("#FFFFFF", 0.08),
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
    h1: {
      fontFamily: "var(--font-playfair), Georgia, serif",
      fontWeight: 700,
      letterSpacing: -1.2,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "var(--font-playfair), Georgia, serif",
      fontWeight: 700,
      letterSpacing: -0.8,
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: "var(--font-playfair), Georgia, serif",
      fontWeight: 700,
      letterSpacing: -0.6,
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: "var(--font-playfair), Georgia, serif",
      fontWeight: 600,
      letterSpacing: -0.4,
    },
    h5: { fontWeight: 800, letterSpacing: -0.2 },
    h6: { fontWeight: 800, letterSpacing: -0.1 },
    button: {
      fontFamily: "var(--font-inter), system-ui, sans-serif",
      fontWeight: 700,
      letterSpacing: 0.4,
      textTransform: "none",
    },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.7 },
    overline: {
      letterSpacing: 3,
      fontWeight: 700,
      fontSize: 11,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "96px",
          "@media (prefers-reduced-motion: reduce)": { scrollBehavior: "auto" },
        },
        ":is(a, button, input, textarea, [tabindex]):focus-visible": {
          outline: `2px solid ${goldLight}`,
          outlineOffset: "4px",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "*, *::before, *::after": {
            animation: "none !important",
            transition: "none !important",
            scrollBehavior: "auto !important",
          },
        },
        "@media (forced-colors: active)": {
          "*": { WebkitTextFillColor: "currentColor !important" },
        },
        "html, body": {
          backgroundColor: bgBase,
          color: textPrimary,
        },
        body: {
          backgroundColor: bgBase,
          backgroundImage: `
            radial-gradient(1100px 600px at 50% -10%, ${alpha(goldMain, 0.10)}, transparent 60%),
            radial-gradient(800px 400px at 100% 80%, ${alpha(goldDark, 0.06)}, transparent 65%)
          `,
          backgroundAttachment: "fixed",
        },
        "::selection": {
          backgroundColor: alpha(goldMain, 0.35),
          color: "#0A0A0A",
        },
        "*::-webkit-scrollbar": { width: 10, height: 10 },
        "*::-webkit-scrollbar-track": { background: bgBase },
        "*::-webkit-scrollbar-thumb": {
          background: alpha(goldMain, 0.35),
          borderRadius: 6,
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: alpha(goldMain, 0.55),
        },
      },
    },

    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 4,
          backgroundColor: bgPaper,
          border: borderSoft,
          transition:
            "transform .3s cubic-bezier(.2,.8,.2,1), border-color .3s ease, box-shadow .3s ease",
        },
      },
      variants: [
        {
          props: { variant: "softBorder" },
          style: {
            border: borderSoft,
            backgroundColor: bgPaper,
            boxShadow: `${shadowDeep}, ${ringGoldSoft}`,
          },
        },
        {
          props: { variant: "plain" },
          style: {
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        },
        {
          props: { variant: "darkBorder" },
          style: {
            border: borderSoft,
            backgroundColor: bgPaper,
            boxShadow: shadowDeep,
          },
        },
        {
          props: { variant: "strongBorder" },
          style: {
            border: borderStrong,
            backgroundColor: bgPaper,
            boxShadow: `${shadowDeep}, ${ringGoldStrong}`,
          },
        },
        {
          props: { variant: "luxe" },
          style: {
            position: "relative",
            border: "1px solid transparent",
            backgroundColor: bgPaper,
            backgroundImage: `linear-gradient(${bgPaper}, ${bgPaper}), ${goldGradient}`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow: `${shadowDeep}, 0 0 30px ${alpha(goldMain, 0.12)}`,
          },
        },
      ],
    },

    MuiCardActionArea: {
      styleOverrides: {
        root: { borderRadius: 4 },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 10,
          letterSpacing: 0.3,
          transition: "all .25s cubic-bezier(.2,.8,.2,1)",
        },
        containedPrimary: {
          color: "#0A0A0A",
          backgroundImage: goldGradient,
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 50%",
          boxShadow: `0 14px 36px ${alpha(goldMain, 0.30)}`,
          "&:hover": {
            backgroundPosition: "100% 50%",
            boxShadow: `0 18px 44px ${alpha(goldMain, 0.45)}`,
            transform: "translateY(-1px)",
          },
        },
        outlinedPrimary: {
          borderColor: alpha(goldMain, 0.4),
          color: goldLight,
          "&:hover": {
            borderColor: goldMain,
            backgroundColor: alpha(goldMain, 0.08),
            boxShadow: `0 0 24px ${alpha(goldMain, 0.18)}`,
          },
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: alpha("#FFFFFF", 0.02),
          border: borderSoft,
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "none",
          "&:before": { display: "none" },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          letterSpacing: 0.3,
          borderRadius: 4,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: { borderColor: alpha("#FFFFFF", 0.08) },
      },
    },
  },
});
