import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import ReceiptIcon from "@mui/icons-material/Receipt";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Discovery1 from "../discovery1";
import { useNavigate } from "react-router-dom";
import ImageIcon from "../../images/Ellipse.jpg";

const drawerWidth = 220;

function Sidenavs() {
  const navigate = useNavigate();

  function discovery1() {
    navigate("/discovery1");
  }
  const appBarStyle = {
    backgroundColor: "#F3F4F6",
    boxShadow: "none",
    height: "115px",
    top: 0,
  };

  const catalystStyle = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "18px",
    marginTop: "18px",
    marginBottom: "16px",
  };

  return (
    <Box sx={{ display: "flex" }} style={{ backgroundColor: "#fff" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
        style={appBarStyle}
      >
        <Toolbar>
          <Grid container my={4}>
            <Grid item xs={10}>
              {" "}
              <Typography
                style={{
                  color: "var(--gray-900, #101828)",
                  fontSize: " 24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "2.3rem",
                  fontFamily: "Inter",
                }}
              >
                Welcome back, Aditya
              </Typography>
              <Typography
                style={{
                  color: "var(--gray-500, #667085)",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px",
                  fontFamily: "Inter",
                }}
              >
                Track and Manage your vendors
              </Typography>
            </Grid>
            <Grid item xs={0.5} p={1}>
              <Box>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    // Handle the button click here
                  }}
                >
                  <HelpIcon color="action" />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={0.5} p={1}>
              <Box>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    // Handle the button click here
                  }}
                >
                  <CircleNotificationsIcon color="action" />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={0.5} p={1}>
              <Box>
                {" "}
                <Avatar
                  alt="Image"
                  src={ImageIcon}
                  sx={{ width: 30, height: 30 }}
                  style={{ marginTop: "4px", marginLeft: "2px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={0.5} style={{ padding: "5px", marginTop: "10px" }}>
              <Box>
                <Grid>
                  <Typography
                    style={{
                      color: "#202020",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      fontFamily: "Inter",
                      //   padding: "3px",
                    }}
                  >
                    Aditya
                  </Typography>
                  <Typography
                    style={{
                      color: "#898989",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      fontFamily: "Inter",
                      //   padding: "3px",
                    }}
                  >
                    Admin
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #AFAFAF",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Grid container justifyContent="center" alignItems="center">
          <Typography style={catalystStyle}>Catalyst</Typography>
          <Typography
            style={{
              backgroundColor: "#F3F4F6",
              borderRadius: "8px",
              height: "25px",
              width: "34px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-19px",
              color: "#775DA6",
              fontWeight: "700",
              marginTop: "2px",
              padding: "1px 0px 0px 2px",
              fontFamily: "Inter",
            }}
          >
            Pro
          </Typography>
        </Grid>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon color="action" sx={{ marginLeft: "16px" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              <Discovery1 />;
            }}
          >
            <ListItemButton onClick={discovery1}>
              <ListItemIcon>
                <StoreIcon color="action" sx={{ marginLeft: "16px" }} />
              </ListItemIcon>
              <ListItemText primary="Discovery" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SupervisorAccountIcon
                  color="action"
                  sx={{ marginLeft: "16px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Vendors" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FolderSpecialIcon color="action" sx={{ marginLeft: "16px" }} />
              </ListItemIcon>
              <ListItemText primary="Catalogs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptIcon color="action" sx={{ marginLeft: "16px" }} />
              </ListItemIcon>
              <ListItemText primary="Sales Orders" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Sidenavs;
