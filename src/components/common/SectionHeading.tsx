"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { goldText, goldGradient } from "@/theme/theme";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  goldTitle?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  goldTitle = true,
}: Props) {
  return (
    <Stack
      spacing={1.5}
      alignItems={align === "center" ? "center" : "flex-start"}
      textAlign={align}
      sx={{ mb: { xs: 4, md: 6 } }}
    >
      {eyebrow && (
        <Reveal>
          <Stack direction="row" spacing={1.25} alignItems="center">
            <Box
              sx={{
                width: 28,
                height: 1.5,
                backgroundImage: goldGradient,
              }}
            />
            <Typography
              variant="overline"
              sx={{ color: "primary.light", letterSpacing: 4 }}
            >
              {eyebrow}
            </Typography>
            <Box
              sx={{
                width: 28,
                height: 1.5,
                backgroundImage: goldGradient,
                display: align === "center" ? "block" : "none",
              }}
            />
          </Stack>
        </Reveal>
      )}

      <Reveal delay={0.05}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 32, sm: 40, md: 50 },
            ...(goldTitle ? goldText : { color: "text.primary" }),
            maxWidth: 880,
          }}
        >
          {title}
        </Typography>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.12}>
          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 720,
              fontSize: { xs: 15, md: 16.5 },
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
        </Reveal>
      )}
    </Stack>
  );
}
