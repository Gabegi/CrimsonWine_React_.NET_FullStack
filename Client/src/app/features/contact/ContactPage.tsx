import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import { Email, Phone, LocationOn, AccessTime } from "@mui/icons-material";

export default function ContactPage() {
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

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={6}>
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
            </Grid>

            {/* Additional Information */}
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
