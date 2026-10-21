"use client";

import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TimerIcon from "@mui/icons-material/Timer";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { colors, goldGradient } from "@/theme/theme";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

type Benefit = {
  title: string;
  text: string;
  Icon: React.ElementType;
};

const BENEFITS: Benefit[] = [
  {
    title: "Personalised meal plan",
    text: "Built around your goals, preferences and routine — work, training and family life included.",
    Icon: RestaurantMenuIcon,
  },
  {
    title: "Smart grocery list",
    text: "A ready-to-use weekly list with quick swaps and budget-friendly options.",
    Icon: ShoppingCartIcon,
  },
  {
    title: "Fast recipes",
    text: "15–30 min meals with vegetarian and gluten-free alternatives.",
    Icon: TimerIcon,
  },
  {
    title: "Real progress tracking",
    text: "Regular check-ins and adjustments — no rigid diet, no “see you in 6 months”.",
    Icon: QueryStatsIcon,
  },
];

type Step = { n: number; title: string; text: string; accent?: boolean };

const STEPS: Step[] = [
  {
    n: 1,
    title: "Initial assessment",
    text: "We review lifestyle, goals, food preferences and any clinical needs.",
  },
  {
    n: 2,
    title: "Your nutrition plan",
    text: "A flexible plan plus practical guidelines: what to eat, when, and how much.",
  },
  {
    n: 3,
    title: "Follow-ups & tweaks",
    text: "We track progress and adjust — no “one-size-fits-all” approach.",
  },
  {
    n: 4,
    title: "Ongoing support",
    text: "Quick answers to real-life questions so you stay consistent without stress.",
    accent: true,
  },
];

const WhatYouGetSection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 12 } }}>
      <Container maxWidth={false} sx={{ width: "min(1200px, 96%)", mx: "auto" }}>
        <SectionHeading
          eyebrow="What you get"
          title="A clear plan you can actually stick to"
          subtitle={
            <>
              Not just a diet. A practical method to improve habits, keep your
              social life, and make progress sustainably.
            </>
          }
        />

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Reveal style={{ width: "100%", height: "100%" }}>
              <Card variant="luxe" sx={{ height: "100%" }}>
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.light", letterSpacing: 3, mb: 2.5, display: "block" }}
                  >
                    The journey
                  </Typography>

                  <Stack component="ol" spacing={2.5} sx={{ m: 0, p: 0, listStyle: "none" }}>
                    {STEPS.map((s, idx) => (
                      <Box component="li" key={s.n}>
                        <Stack direction="row" spacing={2.5} alignItems="flex-start">
                          <Box
                            aria-hidden="true"
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: 999,
                              display: "grid",
                              placeItems: "center",
                              fontFamily: "var(--font-playfair), serif",
                              fontWeight: 700,
                              fontSize: 18,
                              border: `1.5px solid ${
                                s.accent
                                  ? colors.goldMain
                                  : alpha(colors.goldMain, 0.25)
                              }`,
                              color: s.accent ? "primary.light" : "text.primary",
                              backgroundImage: s.accent ? goldGradient : "none",
                              WebkitBackgroundClip: s.accent ? "text" : undefined,
                              WebkitTextFillColor: s.accent ? "transparent" : undefined,
                              flex: "0 0 auto",
                            }}
                          >
                            {s.n}
                          </Box>

                          <Box sx={{ flex: 1, minWidth: 0, pt: 0.5 }}>
                            <Typography
                              component="h3"
                              sx={{
                                fontFamily: "var(--font-playfair), serif",
                                fontWeight: 600,
                                fontSize: 18,
                                color: "primary.light",
                                mb: 0.4,
                              }}
                            >
                              {s.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: "text.secondary", lineHeight: 1.7 }}
                            >
                              {s.text}
                            </Typography>
                          </Box>
                        </Stack>

                        {idx !== STEPS.length - 1 && (
                          <Divider sx={{ ml: 7.5, borderColor: alpha("#fff", 0.06) }} />
                        )}
                      </Box>
                    ))}
                  </Stack>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems={{ sm: "center" }}
                    justifyContent="space-between"
                    sx={{ mt: 4 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      href="#seminar"
                    >
                      Book your first visit
                    </Button>

                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      Replies within 24h • Online & in-person
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Box sx={{
              display: "grid",
              gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "repeat(2, minmax(0, 1fr))" },
              gridAutoRows: "1fr",
              gap: 2.5,
              width: "100%",
            }}>
              {BENEFITS.map(({ title, text, Icon }, idx) => (
                <Box key={title} sx={{ minWidth: 0, display: "flex" }}>
                  <Reveal delay={0.05 + idx * 0.08} style={{ width: "100%", height: "100%" }}>
                    <Card
                      variant="darkBorder"
                      sx={{
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          borderColor: alpha(colors.goldMain, 0.4),
                          boxShadow: `0 20px 50px ${alpha("#000", 0.5)}, 0 0 22px ${alpha(
                            colors.goldMain,
                            0.15,
                          )}`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Stack spacing={1.75}>
                          <Box
                            aria-hidden="true"
                            sx={{
                              width: 52,
                              height: 52,
                              display: "grid",
                              placeItems: "center",
                              borderRadius: 1,
                              border: `1px solid ${alpha(colors.goldMain, 0.35)}`,
                              bgcolor: alpha(colors.goldMain, 0.06),
                            }}
                          >
                            <Icon sx={{ fontSize: 26, color: "primary.light" }} />
                          </Box>

                          <Typography
                            component="h3"
                            sx={{
                              fontFamily: "var(--font-playfair), serif",
                              fontWeight: 600,
                              fontSize: 18,
                              color: "primary.light",
                            }}
                          >
                            {title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", lineHeight: 1.7 }}
                          >
                            {text}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Reveal>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatYouGetSection;
