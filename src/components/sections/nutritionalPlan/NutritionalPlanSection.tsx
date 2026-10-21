"use client";

import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  alpha,
  Chip,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StarIcon from "@mui/icons-material/Star";
import { colors, goldGradient, goldText } from "@/theme/theme";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

type Plan = {
  id: string;
  label: string;
  title: string;
  description: string;
  price: string;
  priceHint: string;
  suitableFor: string | string[];
  features: string[];
  Icon: React.ElementType;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "weight",
    label: "Body Recomp",
    title: "Weight Management",
    description: "Supports your weight loss & body recomposition journey.",
    price: "£200",
    priceHint: "8 weeks programme",
    suitableFor: [
      "Beginner starting their fitness journey",
      "Gym goers aiming for fat loss or muscle gain",
      "Busy professionals who want structure without extremes",
    ],
    Icon: FitnessCenterIcon,
    features: [
      "Initial consultation",
      "Personalised nutritional plan delivered within 7 days",
      "Practical grocery shopping list",
      "Weekly WhatsApp or email support, with response within 48 hours",
      "One follow-up consultation",
    ],
  },
  {
    id: "combat",
    label: "Fight Camp",
    title: "Combat Sport Athlete",
    description:
      "Full fight camp support: weigh-in and rehydration protocols and performance focused nutrition",
    price: "£250",
    priceHint: "Covers up to 8 weeks",
    suitableFor: "MMA, Boxing, Kickboxing, Muay Thai, Grappling",
    Icon: SportsMmaIcon,
    featured: true,
    features: [
      "Initial assessment + targets for fight camp",
      "Weekly tailored nutrition plan (training & rest days)",
      "Supplement & heat acclimation protocol (if needed)",
      "Custom weight-cut plan + water/sodium strategy",
      "Weigh-in + refuel protocol to peak on the day",
      "Post-fight recovery nutrition & adjustments",
      "Weekly check-ins and plan refinement",
    ],
  },
  {
    id: "proam",
    label: "Performance",
    title: "Pro / Amateur Athlete",
    description:
      "Performance nutrition for endurance & hybrid athletes — fueling, recovery and race-day execution.",
    price: "€180",
    priceHint: "Program package",
    suitableFor: "Hyrox, marathon runners, endurance & hybrid training",
    Icon: DirectionsRunIcon,
    features: [
      "Goal setting + training routine review",
      "Fueling strategy (pre / intra / post workout)",
      "Weekly plan updates based on training load",
      "Recovery and sleep-support guidelines",
      "Race-week or event protocol (if applicable)",
      "Check-ins and adjustments to keep progress steady",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const isWeightManagement = plan.id === "weight";
  const FeatureCheck = isWeightManagement ? CheckIcon : CheckCircleIcon;

  return (
    <Card
      variant={plan.featured ? "luxe" : "softBorder"}
      sx={{
        height: "100%",
        position: "relative",
        overflow: "visible",
        ...(isWeightManagement && {
          border: `1px solid ${alpha(colors.goldMain, 0.22)}`,
        }),
        transform: { md: plan.featured ? "translateY(-12px)" : "none" },
        "&:hover": {
          transform: {
            xs: "translateY(-4px)",
            md: plan.featured ? "translateY(-18px)" : "translateY(-8px)",
          },
          boxShadow: `0 30px 80px ${alpha("#000", 0.55)}, 0 0 30px ${alpha(
            colors.goldMain,
            plan.featured ? 0.25 : 0.15,
          )}`,
        },
      }}
    >
      {plan.featured && (
        <Chip
          icon={<StarIcon sx={{ fontSize: 14, color: "#0A0A0A !important" }} />}
          label="Most popular"
          sx={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundImage: goldGradient,
            color: "#0A0A0A",
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: 11,
            height: 28,
            px: 1.5,
            zIndex: 2,
            boxShadow: `0 8px 22px ${alpha(colors.goldMain, 0.4)}`,
          }}
        />
      )}

      <CardContent
        sx={{
          p: { xs: 3, sm: 4 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Stack spacing={2.5} alignItems="center">
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 999,
              display: "grid",
              placeItems: "center",
              backgroundColor: alpha(colors.goldMain, plan.featured ? 0.16 : 0.08),
              border: `1.5px solid ${alpha(colors.goldMain, plan.featured ? 0.5 : 0.3)}`,
              boxShadow: `0 14px 32px ${alpha("#000", 0.4)}`,
            }}
          >
            <plan.Icon sx={{ color: "primary.light", fontSize: 30 }} />
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{ color: "primary.light", letterSpacing: 3 }}
            >
              {plan.label}
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 700,
                fontSize: 26,
                mt: 0.5,
                ...goldText,
              }}
            >
              {plan.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, color: plan.id === "combat" ? "#fff" : "text.secondary", maxWidth: 320, mx: "auto" }}
            >
              {plan.description}
            </Typography>
          </Box>

          <Box sx={{ pt: 1 }}>
            <Typography
              sx={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 52,
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: -1.5,
                ...goldText,
              }}
            >
              {plan.price}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 0.5, color: "text.secondary", fontSize: 12, letterSpacing: 1 }}
            >
              {plan.priceHint.toUpperCase()}
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3, borderColor: alpha(colors.goldMain, 0.15) }} />

        <Stack component="ul" spacing={1.4} sx={{ flex: 1, m: 0, p: 0, listStyle: "none" }}>
          {plan.features.map((f) => (
            <Stack
              component="li"
              key={f}
              direction="row"
              spacing={1.4}
              sx={{ alignItems: "flex-start", textAlign: "left" }}
            >
              <FeatureCheck
                sx={{ mt: "2px", fontSize: 18, color: "primary.light", flexShrink: 0 }}
              />
              <Typography variant="body2" sx={{ color: "text.primary", fontSize: 13.5 }}>
                {f}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Box sx={{ mt: 3 }}>
          {Array.isArray(plan.suitableFor) ? (
            <Box sx={{ mb: 2.5, textAlign: "left" }}>
              <Typography
                variant="caption"
                sx={{ color: "primary.light", fontWeight: 700, display: "block", mb: 1.4 }}
              >
                Suitable for:
              </Typography>
              <Stack component="ul" spacing={1.4} sx={{ m: 0, p: 0, listStyle: "none" }}>
                {plan.suitableFor.map((audience) => (
                  <Stack component="li" key={audience} direction="row" spacing={1.4} alignItems="flex-start">
                    <CheckIcon sx={{ mt: "2px", fontSize: 18, color: "#66BB6A", flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.primary", fontSize: 13.5 }}>
                      {audience}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          ) : (
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontSize: 12,
              lineHeight: 1.6,
              display: "block",
              mb: 2.5,
            }}
          >
            <Box
              component="span"
              sx={{ color: "primary.light", fontWeight: 700 }}
            >
              Suitable for:
            </Box>{" "}
            {plan.suitableFor}
          </Typography>
          )}

          <Button
            variant={plan.featured ? "contained" : "outlined"}
            color="primary"
            fullWidth
            href="#seminar"
            aria-label={`Get this plan: ${plan.title}`}
          >
            Get this plan
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function NutritionalPlanSection() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 12 }, position: "relative" }}>
      <Container maxWidth={false} sx={{ width: "min(1200px, 96%)", mx: "auto" }}>
        <SectionHeading
          eyebrow="Nutrition plans"
          title="Choose your path"
          subtitle="Pick the nutrition path that suits your goals. All consultations are held online until further notice."
        />

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {PLANS.map((p, idx) => (
            <Grid key={p.id} size={{ xs: 12, md: 4 }}>
              <Reveal delay={idx * 0.1}>
                <PlanCard plan={p} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
