import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: "url('/images/vineyard.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        margin: 0,
        padding: 0,
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

      <Box sx={{ py: 8, px: 0, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <Box sx={{ mb: 4 }}>
            <img
              src="/images/crimson-wines-logo-simple.svg"
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
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Welcome to <span style={{ color: "#f0f0f0" }}>Crimson Wines</span>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#ffffff",
              mb: 4,
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            Where passion blends into exceptional wines
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              mb: 4,
              fontSize: "1.1rem",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            Discover our carefully curated selection of premium wines from the
            heart of Provence. Each bottle tells a story of tradition, passion,
            and the finest craftsmanship.
          </Typography>

          {/* Call to action buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/catalog")}
              sx={{
                backgroundColor: "#8b0000",
                "&:hover": {
                  backgroundColor: "#6b0000",
                },
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Explore Wines
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/about")}
              sx={{
                borderColor: "#ffffff",
                color: "#ffffff",
                "&:hover": {
                  borderColor: "#f0f0f0",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Our Story
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
