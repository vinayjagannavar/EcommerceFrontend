import { useTheme } from '@emotion/react'
import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TriangleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:'absolute'
})

const Achievement = () => {
    const theme = useTheme()

    const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
      <Typography variant='h6' sx={{ letterSpacing: '0.25px' }}>
          Cloth Crafters
        </Typography>
        <Typography variant='body2' >Congratulations 🥳</Typography>
        
        <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
          420.8k
        </Typography>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default Achievement