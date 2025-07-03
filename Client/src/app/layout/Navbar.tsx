import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

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
        {/* Website title with flexGrow */}
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
            flexGrow: 1,
            textDecoration: "none",
          }}
        >
          Crimson Wines
        </Typography>

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
                OUR WINES
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
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
