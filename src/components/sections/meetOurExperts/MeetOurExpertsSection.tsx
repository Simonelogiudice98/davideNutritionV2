"use client";

import * as React from "react";
import Image from "next/image";
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
import VerifiedIcon from "@mui/icons-material/Verified";
import { colors, goldGradient, goldText } from "@/theme/theme";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

export type MeetOurExpertsProps = {
  fullName?: string;
  role?: string;
  bioShort?: string;
  ctaPrimaryText?: string;
  onPrimary?: () => void;
};

const DEFAULT_BIO = `Davide is a Registered Associate Nutritionist (ANutr) and Human Nutrition graduate, experienced in weight management and sports nutrition. He supports athletes, gym-goers, active individuals and complete beginners using practical nutrition strategies that fit real life and drive real results. He also specialises in combat sports nutrition, helping fighters fuel training, manage weight safely, and perform at their best throughout camp and competition. Davide has worked with European and Intercontinental Muay Thai and kickboxing champions, bringing elite-level experience into a tailored plan built around your goals.`;

const MeetOurExpertsSection: React.FC<MeetOurExpertsProps> = ({
  fullName = "Davide Maltagliati",
  role = "UK Registered Nutritionist",
  bioShort = DEFAULT_BIO,
  ctaPrimaryText = "Book a consultation",
  onPrimary,
}) => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 12 } }}>
      <Container maxWidth={false} sx={{ width: "min(1200px, 96%)", mx: "auto" }}>
        <SectionHeading
          eyebrow="Meet your expert"
          title="The professional guiding your journey"
        />

        <Reveal>
          <Card variant="luxe" sx={{ overflow: "hidden" }}>
            <Grid container>
              <Grid size={{ xs: 12, md: 7 }}>
                <CardContent sx={{ p: { xs: 3, sm: 5 }, height: "100%" }}>
                  <Stack spacing={3} sx={{ height: "100%" }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <VerifiedIcon sx={{ color: "primary.light", fontSize: 22 }} />
                      <Typography
                        variant="overline"
                        sx={{ color: "primary.light", letterSpacing: 3 }}
                      >
                        Registered Nutritionist
                      </Typography>
                    </Stack>

                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: 32, md: 42 },
                          ...goldText,
                          mb: 0.5,
                        }}
                      >
                        {fullName}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "var(--font-playfair), serif",
                          fontStyle: "italic",
                          color: "text.secondary",
                          fontSize: 17,
                        }}
                      >
                        {role}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.85,
                        fontSize: 15,
                        maxWidth: 600,
                      }}
                    >
                      {bioShort}
                    </Typography>

                    <Divider sx={{ borderColor: alpha(colors.goldMain, 0.15) }} />

                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: 1,
                        border: `1px solid ${alpha(colors.goldMain, 0.25)}`,
                        bgcolor: alpha(colors.goldMain, 0.05),
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "var(--font-playfair), serif",
                          color: "text.primary",
                          fontSize: 16,
                        }}
                      >
                        Your next step is simple.{" "}
                        <Box
                          component="span"
                          sx={{
                            background: goldGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 700,
                          }}
                        >
                          Schedule a free introductory call
                        </Box>{" "}
                        and let&apos;s map out your nutrition plan together.
                      </Typography>
                    </Box>

                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        href={onPrimary ? undefined : "#seminar"}
                        onClick={onPrimary}
                        sx={{ px: 4, py: 1.4 }}
                      >
                        {ctaPrimaryText}
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }} order={{ xs: 0, md: 1 }}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 420, sm: 520, md: "100%" },
                    minHeight: { md: 600 },
                    bgcolor: colors.bgBase,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/expert/expert.jpg"
                    alt={fullName}
                    fill
                    sizes="(max-width: 900px) 100vw, 500px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                    }}
                  />

                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(180deg, transparent 30%, ${alpha(
                        colors.bgBase,
                        0.55,
                      )} 100%)`,
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Reveal>
      </Container>
    </Box>
  );
};

export default MeetOurExpertsSection;
