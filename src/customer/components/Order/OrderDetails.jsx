import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className="font-bold text-xl py-4">Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid container className='space-y-5'>
                {[1, 1, 1, 1, 1, 1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className="flex  items-center ">
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70' alt='' />
                        </div>

                        <div className='space-y-2 ml-5'>
                            <p className=''>Men Slim Mid Rise Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold space-x-5'><span>Color : pink</span> <span>Size : M</span></p>
                            <p className=''>Seller: COPER BUCK</p>
                            <p>$1099</p>
                        </div>
                    </Grid>

                    <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>
                            <StarIcon
                                sx={{ fontSize: "2rem" }}
                                className="px-2 text-5xl"
                            />
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}

            </Grid>

        </div>
    )
}

export default OrderDetails