import React from 'react'
import Achievement from './Achievement'
import AdminPannel from "../../Styles/AdminPannelWrapper";
import "../AdminPannel.css";
import CustomerTable from "./CustomerTable";
import { customTheme, darkTheme } from "../theme/customeTheme";
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material";
import MonthlyOverview from './MonthlyOverview';
import WeeklyOverview from './WeeklyOverview';
import TotalEarning from './TotalEarning';
import OrdersTableView from '../view/OrderTableView';
import ProductsTableView from '../view/ProductTableView';
import CardStatsVertical from "../../Styles/CardStatsVertical";
import BriefcaseVariantOutline from '@mui/icons-material/BusinessCenter';
import CurrencyUsd from '@mui/icons-material/AttachMoney';
import HelpCircleOutline from '@mui/icons-material/Help';
import Poll from '@mui/icons-material/Poll';

const darkTheme1 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#312d4b',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const AdminDashboard = () => {
  return (
    <div className="adminContainer ">
      <ThemeProvider theme={customTheme}>
        <AdminPannel>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Achievement />
            </Grid>
            <Grid item xs={12} md={8}>
              <MonthlyOverview />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <WeeklyOverview />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TotalEarning />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="$25.6k"
                    icon={<Poll />}
                    color="success"
                    trendNumber="+42%"
                    title="Total Profit"
                    subtitle="Weekly Profit"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="$78"
                    title="Refunds"
                    trend="negative"
                    color="secondary"
                    trendNumber="-15%"
                    subtitle="Past Month"
                    icon={<CurrencyUsd />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="862"
                    trend="negative"
                    trendNumber="-18%"
                    title="New Orders"
                    subtitle="Weekly Orders"
                    icon={<BriefcaseVariantOutline />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="15"
                    color="warning"
                    trend="negative"
                    trendNumber="-18%"
                    subtitle="Last Week"
                    title="Sales Queries"
                    icon={<HelpCircleOutline />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <CustomerTable />
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <OrdersTableView />
            </Grid>
             <Grid item xs={12} md={12} lg={8}>
              <ProductsTableView />
            </Grid>
          
          </Grid>
        </AdminPannel>
      </ThemeProvider>
    </div>
  )
}

export default AdminDashboard