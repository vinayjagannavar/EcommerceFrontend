import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div className="">
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar
                            className="text-white"
                            sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
                        >
                            R
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold text-lg">Vinay</p>
                            <p className="opacity-70">April 5, 2023</p>
                        </div>
                    </div>
                    <Rating
                        value={4.5}
                        name="half-rating"
                        readOnly
                    />

                    <p>
                        I recently purchased the Cozy Knit Sweater in a beautiful deep blue color, and I have to say, it lives up to its name. The material is incredibly soft and comfortable, making it perfect for those chilly days when you just want to feel warm and snug. The fit is true to size, and the sweater drapes nicely without being too loose or too tight.
                    </p>

                </Grid>

            </Grid>
        </div>
    )
}

export default ProductReviewCard