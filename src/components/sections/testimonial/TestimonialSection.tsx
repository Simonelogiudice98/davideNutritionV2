"use client";

import * as React from "react";
import Image from "next/image";
import {
  Avatar,
  Rating,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { colors, goldGradient } from "@/theme/theme";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

type Testimonial = {
  name: string;
  subtitle?: string;
  text: string;
  rating?: number;
  initials?: string;
  photoUrl?: string;
  tag?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex M.",
    subtitle: "Pro fighter • Lightweight",
    text: "Simple, structured and easy to follow. Weight cut was smoother, energy stayed high, and performance improved without extremes.",
    rating: 5,
    initials: "AM",
    photoUrl: "/images/testimonials/fighter_3.jpg",
    tag: "Pro Fighter",
  },
  {
    name: "Sara K.",
    subtitle: "Kickboxing athlete",
    text: "The plan fits real training weeks. Clear targets, quick meals, and adjustments when schedule changes — no stress, just consistency.",
    rating: 5,
    initials: "SK",
    photoUrl: "/images/testimonials/fighter_2.jpg",
    tag: "Combat Sports",
  },
  {
    name: "Marco D.",
    subtitle: "MMA athlete",
    text: "Follow-ups make the difference. We adapted macros and timing around sessions and the results came fast — strength, recovery, focus.",
    rating: 5,
    initials: "MD",
    photoUrl: "/images/testimonials/fighter_1.jpg",
    tag: "MMA",
  },
];

function Stars({ value = 5 }: { value?: number }) {
  const v = Math.max(0, Math.min(5, value));
  return (
    <Rating value={v} readOnly precision={0.5}
      getLabelText={(rating) => `${rating} out of 5 stars`}
      sx={{ color: "primary.light", fontSize: 18 }} />
  );
}

const getInitials = (t: Testimonial) =>
  (
    t.initials ??
    t.name
      .split(" ")
      .slice(0, 2)
      .map((x) => x[0]?.toUpperCase())
      .join("")
  ).slice(0, 2) || "DN";

function PhotoHeader({ t }: { t: Testimonial }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: "16 / 10",
        bgcolor: alpha("#fff", 0.03),
        borderRadius: 0.5,
      }}
    >
      {t.photoUrl ? (
        <Image
          src={t.photoUrl}
          alt={t.name}
          fill
          sizes="(max-width: 900px) 100vw, 360px"
          style={{
            objectFit: "cover",
            objectPosition: "center 25%",
            filter: "contrast(1.05) saturate(0.95)",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: `radial-gradient(600px 240px at 30% 20%, ${alpha(
              colors.goldMain,
              0.12,
            )}, transparent 60%)`,
          }}
        />
      )}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {t.tag && (
        <Box sx={{ position: "absolute", top: 12, left: 12 }}>
          <Chip
            size="small"
            label={t.tag}
            sx={{
              bgcolor: alpha("#000", 0.65),
              border: `1px solid ${alpha(colors.goldMain, 0.5)}`,
              color: "primary.light",
              backdropFilter: "blur(10px)",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 0.5,
              borderRadius: 0.5,
            }}
          />
        </Box>
      )}

      <Box sx={{ position: "absolute", left: 14, right: 14, bottom: 14 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar
            src={t.photoUrl}
            alt={t.name}
            sx={{
              width: 44,
              height: 44,
              bgcolor: alpha(colors.goldMain, 0.1),
              color: "primary.light",
              fontWeight: 800,
              border: `1.5px solid ${alpha(colors.goldMain, 0.5)}`,
              fontSize: 14,
            }}
          >
            {getInitials(t)}
          </Avatar>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.1,
                color: "primary.light",
              }}
            >
              {t.name}
            </Typography>
            {t.subtitle && (
              <Typography
                variant="body2"
                sx={{ color: alpha("#fff", 0.72), fontSize: 12.5 }}
              >
                {t.subtitle}
              </Typography>
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default function TestimonialSection({
  testimonials = DEFAULT_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 12 } }}>
      <Container maxWidth={false} sx={{ width: "min(1200px, 96%)", mx: "auto" }}>
        <SectionHeading
          eyebrow="Testimonials"
          title="Real stories. Real results."
          subtitle="Feedback from combat-sport athletes following a clear, sustainable and personalised approach."
        />

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {testimonials.slice(0, 3).map((t, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }}>
              <Reveal delay={idx * 0.1}>
                <Card
                  variant="darkBorder"
                  sx={{
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: alpha(colors.goldMain, 0.4),
                      boxShadow: `0 24px 60px ${alpha("#000", 0.55)}, 0 0 24px ${alpha(
                        colors.goldMain,
                        0.18,
                      )}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 2.5, height: "100%" }}>
                    <Stack spacing={2} sx={{ height: "100%" }}>
                      <PhotoHeader t={t} />

                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Stars value={t.rating ?? 5} />
                        <Box
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: 0.5,
                            display: "grid",
                            placeItems: "center",
                            border: `1px solid ${alpha(colors.goldMain, 0.3)}`,
                            backgroundImage: goldGradient,
                            backgroundSize: "200% 200%",
                          }}
                          aria-hidden="true"
                        >
                          <FormatQuoteIcon sx={{ color: "#0A0A0A", fontSize: 22 }} />
                        </Box>
                      </Stack>

                      <Typography
                        component="blockquote"
                        sx={{
                          m: 0,
                          color: "text.primary",
                          lineHeight: 1.8,
                          fontSize: 14.5,
                          fontStyle: "italic",
                          fontFamily: "var(--font-playfair), serif",
                          fontWeight: 400,
                          flex: 1,
                        }}
                      >
                        “{t.text}”
                      </Typography>

                      <Box sx={{ pt: 1, borderTop: `1px solid ${alpha("#fff", 0.06)}` }}>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", letterSpacing: 1 }}
                        >
                          ATHLETE TESTIMONIAL
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
