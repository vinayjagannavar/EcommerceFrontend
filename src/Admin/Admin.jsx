import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import AdminDashboard from "./components/AdminDashboard";
import CreateProducts from "./components/CreateProducts";
import UpdateProductForm from "./components/UpdateProductForm";
import Customers from "./components/Customers";
import DemoAdmin from "./components/DemoAdmin";
import Divider from "@mui/material/Divider";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./theme/customeTheme";
import AdminNavbar from "./Navigation/AdminNavbar";


const drawerWidth = 240;
const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <Inventory2Icon /> },
  { name: "Customers", path: "/admin/customers", icon: <PeopleAltIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ShoppingCartCheckoutIcon /> },
  { name: "Add Product", path: "/admin/product/create", icon: <AddIcon /> }
  //{ name: "", path: ""}
]
const Admin = () => {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
    sx={{
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              {item.name}
            </ListItemText>
          </ListItemButton>
        </ListItem>)}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        {["Account", "Request"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <PeopleAltIcon /> : <Inventory2Icon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  )


  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        <CssBaseline />
        <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} />

        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                  {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    height: "100%",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                  },
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>
        <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={ <AdminDashboard />}></Route>
            <Route path="/product/create" element={<CreateProducts/>}></Route>
            <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route>
            <Route path="/products" element={<ProductsTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
            <Route path="/demo" element={<DemoAdmin />}></Route>
          </Routes>
         
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Admin