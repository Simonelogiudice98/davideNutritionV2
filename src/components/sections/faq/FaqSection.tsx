"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  alpha,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { colors } from "@/theme/theme";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

type Faq = { q: string; a: React.ReactNode };

const FAQS: Faq[] = [
  {
    q: "What should I expect from the nutrition consultation?",
    a: "A thorough initial assessment, clear goals and a personalised plan with practical guidelines. The focus is on sustainable habits — not a rigid “one-size-fits-all” diet.",
  },
  {
    q: "Who is this service for?",
    a: "Anyone looking to improve body composition, energy, performance or meal management. It can also be adapted to vegetarian/vegan and gluten-free needs.",
  },
  {
    q: "How long does the consultation last?",
    a: "Typically 45–60 minutes for the first appointment. Follow-ups are usually 20–30 minutes (depending on your case).",
  },
  {
    q: "Will I receive a plan after the visit?",
    a: "Yes. You'll receive a personalised meal plan, a grocery list, quick recipes and actionable guidelines.",
  },
  {
    q: "Can I book follow-ups?",
    a: "Absolutely. Scheduled check-ins help track progress and make targeted adjustments over time.",
  },
  {
    q: "Is it suitable for clinical conditions?",
    a: "Yes, after an evaluation. When medical guidance is needed, we coordinate with your physician.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes — online consultations are available. You'll receive the same plan, resources and follow-ups as in-person visits.",
  },
  {
    q: "How do I book a consultation?",
    a: "You can book through the contact form below or message directly on WhatsApp. We'll confirm availability and next steps.",
  },
];

const FaqSection: React.FC = () => {
  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange =
    (panelIndex: number) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panelIndex : false);

  return (
    <Box component="section" sx={{ py: { xs: 7, md: 12 } }}>
      <Container maxWidth={false} sx={{ width: "min(1200px, 96%)", mx: "auto" }}>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Quick answers to common questions about visits, plans and follow-ups."
        />

        <Grid container spacing={2}>
          {FAQS.map((item, i) => (
            <Grid key={i} size={{ xs: 12, md: 6 }}>
              <Reveal delay={(i % 4) * 0.06}>
                <Accordion
                  square
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  sx={{
                    borderRadius: 1,
                    overflow: "hidden",
                    transition: "all .3s ease",
                    "&:hover": {
                      borderColor: alpha(colors.goldMain, 0.3),
                    },
                    "&.Mui-expanded": {
                      borderColor: alpha(colors.goldMain, 0.45),
                      backgroundColor: alpha(colors.goldMain, 0.04),
                      boxShadow: `0 12px 30px ${alpha("#000", 0.4)}`,
                    },
                    "& .MuiAccordionSummary-root": {
                      px: 2.5,
                      py: 1,
                      minHeight: 64,
                    },
                    "& .MuiAccordionSummary-content": {
                      my: 1.5,
                    },
                    "& .MuiAccordionDetails-root": {
                      px: 2.5,
                      pb: 2.5,
                      pt: 0,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: 999,
                          display: "grid",
                          placeItems: "center",
                          border: `1px solid ${alpha(colors.goldMain, 0.4)}`,
                          backgroundColor: expanded === i
                            ? alpha(colors.goldMain, 0.15)
                            : "transparent",
                          transition: "all .25s ease",
                        }}
                      >
                        {expanded === i ? (
                          <RemoveRoundedIcon sx={{ color: "primary.light", fontSize: 18 }} />
                        ) : (
                          <AddRoundedIcon sx={{ color: "primary.light", fontSize: 18 }} />
                        )}
                      </Box>
                    }
                    aria-controls={`faq-content-${i}`}
                    id={`faq-header-${i}`}
                  >
                    <Typography
                      sx={{
                        fontFamily: "var(--font-playfair), serif",
                        fontWeight: 600,
                        fontSize: 16,
                        color: expanded === i ? "primary.light" : "text.primary",
                        transition: "color .25s ease",
                      }}
                    >
                      {item.q}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails id={`faq-content-${i}`}>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.8,
                        fontSize: 14.5,
                      }}
                    >
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FaqSection;
