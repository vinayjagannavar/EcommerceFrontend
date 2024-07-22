import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    FormControl,
    Grid,
    InputLabel,
    Menu,
    MenuItem,
    Pagination,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
  
  const OrdersTableView = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ status: "", sort: "" });
    const [anchorElArray, setAnchorElArray] = useState([]);
    const [orderStatus, setOrderStatus] = useState("");
    const {adminsOrder} = useSelector(store=>store);
  
    useEffect(()=>{
      dispatch(getOrders())
    },[adminsOrder.delivered, adminsOrder.shipped, adminsOrder.confirmed, adminsOrder.deletedOrder])
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      setFormData({ ...formData, [name]: value });
    };
  
    function handlePaginationChange(event, value) {
      console.log("Current page:", value);
    }
  
    const handleUpdateStatusMenuClick = (e,index) => {
      const newAnchorElArray = [...anchorElArray];
      newAnchorElArray[index] = e.currentTarget;
      setAnchorElArray(newAnchorElArray);
    }
  
    const handleUpdateStatusMenuClose = (index) => {
      const newAnchorElArray = [...anchorElArray];
      newAnchorElArray[index] = null;
      setAnchorElArray(newAnchorElArray);
    };
  
    const handleConfirmedOrder = (orderId, index) => {
      handleUpdateStatusMenuClose(index);
      dispatch(confirmOrder(orderId));
      setOrderStatus("CONFIRMED")
    };
  
    const handleShippedOrder = (orderId,index) => {
      handleUpdateStatusMenuClose(index);
      dispatch(shipOrder(orderId))
      setOrderStatus("ShIPPED")
    };
  
    const handleDeliveredOrder = (orderId,index) => {
      handleUpdateStatusMenuClose(index);
      dispatch(deliveredOrder(orderId))
      setOrderStatus("DELIVERED")
    };
  
    const handleDeleteOrder = (orderId) => {
      handleUpdateStatusMenuClose();
      dispatch(deleteOrder(orderId));
    };
  
    console.log("Admin Orders", adminsOrder.orders)
    return (
      <Box>
        <Card className="p-3">
          <CardHeader
            title="Sort"
            sx={{
              pt: 0,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.status}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={"PLACED"}>PENDING</MenuItem>
                  <MenuItem value={"PLACED"}>PLACED</MenuItem>
                  <MenuItem value={"CONFIRMED"}>CONFIRMED</MenuItem>
                  <MenuItem value={"DELIVERED"}>DELIVERED</MenuItem>
                  <MenuItem value={"CANCELD"}>CANCELED</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.sort}
                  label="Sort By"
                  onChange={handleChange}
                >
                  <MenuItem value={"Newest"}>Newest</MenuItem>
                  <MenuItem value={"Older"}>Older</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Card>
        <Card className="mt-2">
          <CardHeader
            title="Recent Orders"
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
  
          />
          <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
  
                  <TableCell>Price</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminsOrder?.orders?.map((item, index) => (
                  <TableRow
                    hover
                    key={item.name}
                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  >
                    <TableCell sx={{}}>
                    <AvatarGroup max={4} sx={{justifyContent: 'start'}}>
        {item.orderItems.map((orderItem)=><Avatar  alt={item.title} src={orderItem.product.imageUrl} /> )}
      </AvatarGroup>
                      {" "}
                    </TableCell>
  
                    <TableCell
                      sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem !important",
                          }}
                        >
                          {item?.orderItems.map((order) => (
                            <span className=""> {order.product.title},</span>
                          ))}
                        </Typography>
                        <Typography variant="caption">
                          {item?.orderItems.map((order) => (
                            <span className="opacity-60">
                              {" "}
                              {order.product.brand},
                            </span>
                          ))}
                        </Typography>
                      </Box>
                    </TableCell>
  
                    <TableCell>{item.totalPrice}</TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell className="text-white">
                      <Chip
                        sx={{
                          color: "white !important",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                        label={item.orderStatus}
                        size="small"
                        color={
                          item.orderStatus === "PENDING" ? "info" :item.orderStatus==="DELIVERED"? "success":"secondary"
                        }
                        className="text-white"
                      />
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      className="text-white"
                    >
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    )
  }
  
  export default OrdersTableView