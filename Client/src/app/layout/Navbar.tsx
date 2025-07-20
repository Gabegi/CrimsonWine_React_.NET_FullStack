import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// const rightLinks = [
//   { title: "login", path: "/login" },
//   { title: "register", path: "/register" },
// ];

export default function Navbar() {
  const navLinkStyles = {
    color: "white",
    textDecoration: "none",
    typography: "h6",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "black",
    },
    "&.active": {
      color: "black",
    },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#4B2E2E",
        color: "#F5EBDD",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        borderBottom: "1px solid #3a1f1f",
      }}
    >
      <Toolbar>
        {/* Logo and Website title */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1 }}
        >
          <img
            src="/images/crimson-wines-logo.svg"
            alt="Crimson Wines Logo"
            style={{ width: "40px", height: "40px" }}
            onError={(e) => {
              console.error("Failed to load logo:", e);
              e.currentTarget.style.display = "none";
            }}
          />
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: 1.5,
              fontSize: "2rem",
              color: "white",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "black",
              },
              textDecoration: "none",
            }}
          >
            Crimson Wines
          </Typography>
        </Box>

        {/* Middle and right links container */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1 }}
        >
          {/* Our Wines link centered */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <List sx={{ display: "flex" }}>
              <ListItem
                component={NavLink}
                to="/catalog"
                key="/catalog"
                sx={navLinkStyles}
              >
                Our special wine selection
              </ListItem>
            </List>
          </Box>
          {/* About and Contact links right-aligned */}
          <List sx={{ display: "flex" }}>
            {[
              { title: "about", path: "/about" },
              { title: "contact", path: "/contact" },
            ].map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navLinkStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>

          {/* Shopping cart pushed far right by margin-left: auto on Box */}
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            sx={{ color: "inherit" }}
          >
            <ShoppingCart />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
