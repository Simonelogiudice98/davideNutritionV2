import Box from "@mui/material/Box";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import WhatYouGetSection from "@/components/sections/whatYouGet/WhatYouGetSection";
import NutritionalPlanSection from "@/components/sections/nutritionalPlan/NutritionalPlanSection";
import MeetOurExpertsSection from "@/components/sections/meetOurExperts/MeetOurExpertsSection";
import TestimonialSection from "@/components/sections/testimonial/TestimonialSection";
import SeminarEnquirySection from "@/components/sections/seminarEnquiry/SeminarEnquirySection";
import FaqSection from "@/components/sections/faq/FaqSection";
import FloatingContacts from "@/components/floatingContacts/FloatingContacts";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box component="a" href="#top" sx={{
        position: "fixed", top: 8, left: 8, zIndex: 1500,
        transform: "translateY(-200%)", bgcolor: "background.paper",
        color: "primary.light", p: 2, borderRadius: 1,
        "&:focus": { transform: "none" },
      }}>
        Skip to main content
      </Box>
      <Header />

      <Box component="main" id="top" tabIndex={-1} sx={{ flex: 1, scrollMarginTop: 96 }}>
        <HeroSection />
        <Box id="what-you-get" tabIndex={-1} sx={{ scrollMarginTop: 96 }}>
          <WhatYouGetSection />
        </Box>
        <Box id="meet-expert" tabIndex={-1} sx={{ scrollMarginTop: 96 }}>
          <MeetOurExpertsSection />
        </Box>
        <Box id="plans" tabIndex={-1} sx={{ scrollMarginTop: 96 }}>
          <NutritionalPlanSection />
        </Box>
        <Box id="testimonials" tabIndex={-1} sx={{ scrollMarginTop: 96 }}>
          <TestimonialSection />
        </Box>
        <Box id="faq" tabIndex={-1} sx={{ scrollMarginTop: 96 }}>
          <FaqSection />
        </Box>
        <Box id="seminar" tabIndex={-1} sx={{ scrollMarginTop: 96 }}>
          <SeminarEnquirySection />
        </Box>
      </Box>

      <Footer
        email="info@davide-nutrition.com"
        whatsappUrl="https://wa.me/447444660645?text=Hi%20Davide%2C%20I%27d%20like%20to%20book%20a%20consultation"
      />

      <FloatingContacts
        whatsapp="+447444660645"
        email="info@davide-nutrition.com"
        message="Hi Davide! I'd love to know more about your consultations."
      />
    </Box>
  );
}
