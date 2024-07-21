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

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <Inventory2Icon /> },
  { name: "Customers", path: "/admin/customers", icon: <PeopleAltIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ShoppingCartCheckoutIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <AddIcon /> }
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
        height: "100%"
      }}>
      {/* {isLargeScreen && <Toolbar />} */}
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

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  return (
    <div>
      <div className='flex h-[100vh]'>
        <CssBaseline />
        <div classname='w-[15%] border border-r-gray-300 h-full'>
          {drawer}
        </div>

        <div className='w-[85%]'>
      
          <Routes>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route path="/product/create" element={<CreateProducts />}></Route>
            <Route path="/product/update/:productId" element={<UpdateProductForm />}></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/demo" element={<DemoAdmin />}></Route>
          </Routes>

        </div>

      </div>
    </div>
  )
}

export default Admin