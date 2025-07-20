import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { Email, Phone, LocationOn, AccessTime } from "@mui/icons-material";

export default function ContactPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/images/vineyard.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        pt: 10, // Account for navbar
      }}
    >
      {/* Overlay for better text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />

      <Container maxWidth={false} sx={{ py: 8, px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          {/* Logo */}
          <Box sx={{ mb: 4 }}>
            <img
              src="/images/crimson-wines-logo.svg"
              alt="Crimson Wines Logo"
              style={{ width: "120px", height: "120px" }}
              onError={(e) => {
                console.error("Failed to load logo:", e);
                e.currentTarget.style.display = "none";
              }}
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
              color: "#ffffff",
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Contact Us
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
            We'd love to hear from you
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* Contact Information */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#2c1810",
                  mb: 3,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Get in Touch
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocationOn sx={{ color: "#8b0000", fontSize: 28 }} />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "#2c1810" }}
                    >
                      Address
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      12 Rue des Vignerons
                      <br />
                      13100 Aix-en-Provence, France
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Phone sx={{ color: "#8b0000", fontSize: 28 }} />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "#2c1810" }}
                    >
                      Phone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +33 4 42 00 00 00
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Email sx={{ color: "#8b0000", fontSize: 28 }} />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "#2c1810" }}
                    >
                      Email
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      contact@crimsonwines.fr
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <AccessTime sx={{ color: "#8b0000", fontSize: 28 }} />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "#2c1810" }}
                    >
                      Opening Hours
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monday to Saturday
                      <br />
                      10:00 AM - 6:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Additional Information */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#2c1810",
                  mb: 3,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Visit Our Cellar
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#495057",
                  mb: 3,
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                Located in the heart of Aix-en-Provence, our wine cellar offers
                a unique experience for wine enthusiasts. Our knowledgeable
                staff is always ready to help you discover the perfect wine for
                any occasion.
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
                Whether you're looking for a special bottle for a celebration,
                seeking expert advice on wine pairings, or simply want to
                explore our curated collection, we welcome you to visit us
                during our opening hours.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
