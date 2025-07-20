import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
        overflow: "hidden",
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

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            minHeight: "80vh",
            gap: 4,
          }}
        >
          {/* Left side - Logo and main content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            {/* Logo */}
            <Box
              sx={{
                mb: 4,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
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
                color: "#2c1810",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Welcome to <span style={{ color: "#8b0000" }}>Crimson Wines</span>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#6c757d",
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
                color: "#495057",
                mb: 4,
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "500px",
              }}
            >
              Discover our carefully curated selection of premium wines from the
              heart of Provence. Each bottle tells a story of tradition,
              passion, and the finest craftsmanship.
            </Typography>

            {/* Call to action buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/products")}
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
                  borderColor: "#8b0000",
                  color: "#8b0000",
                  "&:hover": {
                    borderColor: "#6b0000",
                    backgroundColor: "rgba(139, 0, 0, 0.04)",
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

          {/* Right side - Feature cards */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: 3,
              }}
            >
              {/* Feature card 1 */}
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <img
                  src="/images/wine-bottle-icon.svg"
                  alt="Premium Wines"
                  style={{
                    width: "60px",
                    height: "120px",
                    marginBottom: "1rem",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#2c1810", mb: 1 }}
                >
                  Premium Selection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Carefully curated wines from the finest vineyards
                </Typography>
              </Paper>

              {/* Feature card 2 */}
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <img
                  src="/images/wine-glass-icon.svg"
                  alt="Expert Tasting"
                  style={{
                    width: "60px",
                    height: "90px",
                    marginBottom: "1rem",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#2c1810", mb: 1 }}
                >
                  Expert Curation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Each wine selected by our expert sommeliers
                </Typography>
              </Paper>

              {/* Feature card 3 */}
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <img
                  src="/images/grape-cluster-icon.svg"
                  alt="Authentic Origins"
                  style={{
                    width: "60px",
                    height: "60px",
                    marginBottom: "1rem",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#2c1810", mb: 1 }}
                >
                  Authentic Origins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Direct from the finest French vineyards
                </Typography>
              </Paper>

              {/* Feature card 4 */}
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#28a745",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  ✓
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#2c1810", mb: 1 }}
                >
                  Quality Guaranteed
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Every bottle meets our high standards
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
