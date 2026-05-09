"use client";

import * as React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { motion, useReducedMotion } from "framer-motion";
import { colors, goldGradient, goldText } from "@/theme/theme";
import Reveal from "@/components/common/Reveal";

type Feature = {
  id: string;
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  targetId: string;
};

const FEATURES: Feature[] = [
  {
    id: "what",
    title: "Choose your plan",
    subtitle: "Pick a plan that matches your goal",
    Icon: RestaurantMenuIcon,
    targetId: "plans",
  },
  {
    id: "expert",
    title: "Meet your expert",
    subtitle: "Davide — UK Registered Nutritionist",
    Icon: PersonSearchIcon,
    targetId: "meet-expert",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    subtitle: "Real stories. Real results.",
    Icon: EmojiEventsIcon,
    targetId: "testimonials",
  },
  {
    id: "faq",
    title: "Questions?",
    subtitle: "Answers to common questions",
    Icon: HelpOutlineIcon,
    targetId: "faq",
  },
];

const MotionBox = motion(Box);

export default function HeroSection() {
  const reduce = useReducedMotion();

  const goTo = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(900px 500px at 30% 20%, ${alpha(
            colors.goldMain,
            0.12,
          )}, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth={false} sx={{ width: "min(1200px, 96%)", mx: "auto", position: "relative" }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3.5} alignItems={{ xs: "center", md: "flex-start" }} textAlign={{ xs: "center", md: "left" }}>
              <Reveal>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Box sx={{ width: 36, height: 1.5, backgroundImage: goldGradient }} />
                  <Typography variant="overline" sx={{ color: "primary.light" }}>
                    Premium nutrition coaching
                  </Typography>
                </Stack>
              </Reveal>

              <Reveal delay={0.05}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: 42, sm: 56, md: 68 },
                    ...goldText,
                    maxWidth: 720,
                  }}
                >
                  Davide Nutrition
                </Typography>
              </Reveal>

              <Reveal delay={0.1}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-playfair), serif",
                    fontStyle: "italic",
                    fontSize: { xs: 18, md: 22 },
                    color: alpha("#fff", 0.85),
                    maxWidth: 620,
                    fontWeight: 400,
                  }}
                >
                  Practical nutrition for athletes, gym-goers, active individuals
                  and complete beginners.
                </Typography>
              </Reveal>

              <Reveal delay={0.15}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    maxWidth: 580,
                    fontSize: 15.5,
                    lineHeight: 1.8,
                  }}
                >
                  If you want to change your body, build better habits, and feel
                  confident with food, you&apos;re in the right place. Whether
                  you&apos;re just getting started or training hard already, we&apos;ll
                  build a plan that fits your life and gets results.
                </Typography>
              </Reveal>

              <Reveal delay={0.2}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => goTo("plans")}
                    sx={{ px: 3.5, py: 1.4 }}
                  >
                    Explore plans
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={() => goTo("meet-expert")}
                    sx={{ px: 3.5, py: 1.4 }}
                  >
                    Meet Davide
                  </Button>
                </Stack>
              </Reveal>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={0.1}>
              <MotionBox
                animate={
                  reduce
                    ? undefined
                    : { y: [0, -10, 0] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  position: "relative",
                  height: { xs: 360, sm: 440, md: 520 },
                  borderRadius: 1,
                  overflow: "hidden",
                  border: `1px solid ${alpha(colors.goldMain, 0.25)}`,
                  boxShadow: `0 30px 100px ${alpha("#000", 0.6)}, 0 0 40px ${alpha(
                    colors.goldMain,
                    0.15,
                  )}`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    padding: 1,
                    background: goldGradient,
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                    opacity: 0.4,
                  },
                }}
              >
                <Image
                  src="/images/hero/hero-nutrition.jpg"
                  alt="Premium nutrition coaching for athletes"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 500px"
                  style={{
                    objectFit: "cover",
                    filter: "contrast(1.08) saturate(0.95)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.78) 100%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: 18,
                    right: 18,
                    bottom: 18,
                    p: 2,
                    border: `1px solid ${alpha(colors.goldMain, 0.3)}`,
                    bgcolor: alpha("#000", 0.55),
                    backdropFilter: "blur(14px)",
                    borderRadius: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: 0.3,
                      color: "primary.light",
                    }}
                  >
                    Built for performance & real life
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: alpha("#fff", 0.7),
                      mt: 0.5,
                    }}
                  >
                    Training-focused nutrition support
                  </Typography>
                </Box>
              </MotionBox>
            </Reveal>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Grid container spacing={2.5}>
            {FEATURES.map(({ id, title, subtitle, Icon, targetId }, idx) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Reveal delay={0.1 + idx * 0.08}>
                  <Box
                    component="button"
                    onClick={() => goTo(targetId)}
                    aria-label={`Go to ${title}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                      textAlign: "center",
                      background: alpha(colors.bgPaper, 0.6),
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha("#fff", 0.06)}`,
                      borderRadius: 1,
                      p: 3,
                      transition: "all .35s cubic-bezier(.2,.8,.2,1)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: goldGradient,
                        opacity: 0,
                        transition: "opacity .35s ease",
                        zIndex: 0,
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: alpha(colors.goldMain, 0.5),
                        boxShadow: `0 20px 50px ${alpha("#000", 0.5)}, 0 0 24px ${alpha(
                          colors.goldMain,
                          0.18,
                        )}`,
                      },
                      "&:hover::before": { opacity: 0.04 },
                    }}
                  >
                    <Stack spacing={1.5} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          display: "grid",
                          placeItems: "center",
                          borderRadius: 999,
                          border: `1.5px solid ${alpha(colors.goldMain, 0.4)}`,
                          backgroundColor: alpha(colors.goldMain, 0.06),
                          transition: "all .35s ease",
                        }}
                      >
                        <Icon sx={{ fontSize: 26, color: "primary.light" }} />
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: "var(--font-playfair), serif",
                          fontWeight: 600,
                          fontSize: 17,
                          color: "primary.light",
                          letterSpacing: -0.2,
                        }}
                      >
                        {title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: 13,
                          lineHeight: 1.5,
                        }}
                      >
                        {subtitle}
                      </Typography>
                    </Stack>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 5, md: 7 } }}>
          <MotionBox
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => goTo("what-you-get")}
            sx={{
              cursor: "pointer",
              width: 44,
              height: 44,
              borderRadius: 999,
              display: "grid",
              placeItems: "center",
              border: `1px solid ${alpha(colors.goldMain, 0.35)}`,
              color: "primary.light",
              "&:hover": {
                borderColor: colors.goldMain,
                backgroundColor: alpha(colors.goldMain, 0.08),
              },
            }}
            aria-label="Scroll to next section"
          >
            <ArrowDownwardIcon fontSize="small" />
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
