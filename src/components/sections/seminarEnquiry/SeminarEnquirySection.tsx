"use client";

import * as React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import { type SxProps, type Theme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import { colors, goldText } from "@/theme/theme";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

type SeminarEnquiryValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type SeminarEnquirySectionProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  onSubmit?: (values: SeminarEnquiryValues) => void | Promise<void>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SeminarEnquirySection({
  title = "General Enquiry",
  subtitle = "We also deliver evidence-based nutrition seminars for gyms, sporting organisations, teams and corporate groups. Sessions are tailored to the audience and grounded in practical strategies. For seminar and speaking enquiries, please get in touch below.",
  imageSrc = "/images/hero/seminar.jpg",
  imageAlt = "Seminar — Davide Nutrition",
  onSubmit,
}: SeminarEnquirySectionProps) {
  const [values, setValues] = React.useState<SeminarEnquiryValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const setField =
    (k: keyof SeminarEnquiryValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
    };

  const markTouched = (k: keyof SeminarEnquiryValues) => () =>
    setTouched((t) => ({ ...t, [k]: true }));

  const errors = React.useMemo(() => {
    const e: Partial<Record<keyof SeminarEnquiryValues, string>> = {};
    if (!values.firstName.trim()) e.firstName = "Required";
    if (!values.lastName.trim()) e.lastName = "Required";
    if (!values.email.trim()) e.email = "Required";
    else if (!EMAIL_RE.test(values.email)) e.email = "Invalid email";
    if (!values.phone.trim()) e.phone = "Required";
    if (!values.message.trim()) e.message = "Required";
    return e;
  }, [values]);

  const hasErrors = Object.keys(errors).length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true,
    });
    if (hasErrors) return;

    try {
      setSubmitting(true);
      await onSubmit?.(values);
      setSent(true);
      setValues({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setTouched({});
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 7, md: 12 } }}>
      <Container maxWidth={false} sx={{ width: "min(1200px, 96%)", mx: "auto" }}>
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's start a conversation"
          subtitle="Whether it's a personal consultation or a seminar enquiry, drop a line and I'll get back to you within 24 hours."
        />

        <Reveal>
          <Card variant="luxe" sx={{ overflow: "hidden" }}>
            <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
              <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={3} sx={{ height: "100%" }}>
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ color: "primary.light", letterSpacing: 3 }}
                      >
                        Seminars & speaking
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: 28, md: 36 },
                          ...goldText,
                          mt: 1,
                          mb: 2,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.8,
                          fontSize: 14.5,
                        }}
                      >
                        {subtitle}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        position: "relative",
                        flex: 1,
                        minHeight: { xs: 220, md: 280 },
                        overflow: "hidden",
                        borderRadius: 1,
                        border: `1px solid ${alpha(colors.goldMain, 0.25)}`,
                      }}
                    >
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 500px"
                        style={{
                          objectFit: "cover",
                          filter: "contrast(1.05) saturate(0.95)",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(180deg, transparent 50%, ${alpha(
                            colors.bgBase,
                            0.5,
                          )} 100%)`,
                        }}
                      />
                    </Box>
                  </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  {sent ? (
                    <Stack
                      spacing={2}
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        height: "100%",
                        minHeight: 360,
                        textAlign: "center",
                        p: 4,
                        border: `1px dashed ${alpha(colors.goldMain, 0.4)}`,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{ ...goldText, fontSize: 28 }}
                      >
                        Message sent
                      </Typography>
                      <Typography sx={{ color: "text.secondary", maxWidth: 380 }}>
                        Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setSent(false)}
                        sx={{ mt: 2 }}
                      >
                        Send another message
                      </Button>
                    </Stack>
                  ) : (
                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            value={values.firstName}
                            onChange={setField("firstName")}
                            onBlur={markTouched("firstName")}
                            placeholder="First name"
                            fullWidth
                            variant="filled"
                            error={!!(touched.firstName && errors.firstName)}
                            helperText={touched.firstName ? errors.firstName : " "}
                            slotProps={{ input: { disableUnderline: true } }}
                            sx={fieldSx()}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            value={values.lastName}
                            onChange={setField("lastName")}
                            onBlur={markTouched("lastName")}
                            placeholder="Last name"
                            fullWidth
                            variant="filled"
                            error={!!(touched.lastName && errors.lastName)}
                            helperText={touched.lastName ? errors.lastName : " "}
                            slotProps={{ input: { disableUnderline: true } }}
                            sx={fieldSx()}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            value={values.email}
                            onChange={setField("email")}
                            onBlur={markTouched("email")}
                            placeholder="Email address"
                            fullWidth
                            variant="filled"
                            error={!!(touched.email && errors.email)}
                            helperText={touched.email ? errors.email : " "}
                            slotProps={{ input: { disableUnderline: true } }}
                            sx={fieldSx()}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            value={values.phone}
                            onChange={setField("phone")}
                            onBlur={markTouched("phone")}
                            placeholder="Phone number (with country code)"
                            fullWidth
                            variant="filled"
                            error={!!(touched.phone && errors.phone)}
                            helperText={touched.phone ? errors.phone : " "}
                            slotProps={{ input: { disableUnderline: true } }}
                            sx={fieldSx()}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            value={values.message}
                            onChange={setField("message")}
                            onBlur={markTouched("message")}
                            placeholder="Tell me about your goals or seminar enquiry…"
                            fullWidth
                            variant="filled"
                            multiline
                            minRows={4}
                            error={!!(touched.message && errors.message)}
                            helperText={touched.message ? errors.message : " "}
                            slotProps={{ input: { disableUnderline: true } }}
                            sx={fieldSx()}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={submitting}
                            endIcon={<SendIcon />}
                            sx={{ px: 4, py: 1.4 }}
                          >
                            {submitting ? "Sending…" : "Send message"}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </Box>
  );
}

function fieldSx(): SxProps<Theme> {
  return {
    "& .MuiFilledInput-root": {
      backgroundColor: alpha("#fff", 0.04),
      borderRadius: 1,
      overflow: "hidden",
      border: `1px solid ${alpha("#fff", 0.08)}`,
      transition: "all .25s ease",
      "&:hover": {
        backgroundColor: alpha("#fff", 0.06),
        borderColor: alpha(colors.goldMain, 0.4),
      },
      "&.Mui-focused": {
        backgroundColor: alpha("#fff", 0.06),
        borderColor: colors.goldMain,
        boxShadow: `0 0 0 3px ${alpha(colors.goldMain, 0.15)}`,
      },
      "&.Mui-error": {
        borderColor: "#FF6B6B",
      },
      "&:before, &:after": { display: "none" },
    },
    "& input, & textarea": {
      color: "#fff",
      fontFamily: "var(--font-inter), sans-serif",
      fontWeight: 500,
      fontSize: 14.5,
      "&::placeholder": {
        color: alpha("#fff", 0.45),
        opacity: 1,
        fontWeight: 400,
      },
    },
    "& .MuiFormHelperText-root": {
      marginLeft: 1,
      color: "#FF6B6B",
      fontSize: 11.5,
      letterSpacing: 0.3,
    },
  };
}
