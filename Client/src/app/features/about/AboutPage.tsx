import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
        overflow: "hidden",
        pt: 10, // Account for navbar
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(106, 13, 173, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(139, 0, 0, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          {/* Logo */}
          <Box sx={{ mb: 4 }}>
            <img
              src="/images/crimson-wines-logo.svg"
              alt="Crimson Wines Logo"
              style={{ width: "120px", height: "120px" }}
            />
          </Box>

          {/* Main heading */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#2c1810",
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Our Story
          </Typography>
        </Box>

        {/* Content */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 6 },
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#8b0000",
              mb: 4,
              fontWeight: 400,
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            Crimson Wines is a family-owned winery located in the heart of
            Provence.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#495057",
              mb: 4,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            We are passionate about wine and we are committed to offering you
            the best wines. Our journey began generations ago in the picturesque
            village of Gigondas, where our ancestors first planted the vines
            that would become the foundation of our family's legacy.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#495057",
              mb: 4,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            Today, we continue the tradition of excellence, carefully selecting
            and curating the finest wines from the most prestigious vineyards
            across France. Each bottle in our collection represents not just
            exceptional quality, but a story of tradition, passion, and the
            timeless art of winemaking.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#495057",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            We are open from Monday to Saturday from 10am to 6pm, welcoming wine
            enthusiasts and connoisseurs alike to discover the perfect bottle
            for every occasion. Whether you're a seasoned collector or just
            beginning your wine journey, our expert team is here to guide you
            through our carefully curated selection.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
