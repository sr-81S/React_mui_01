import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import Code from '../image/code.png' //import image from the file and use in the project

const CardText = () => {
  return (
    <>
        <Container> 
        <Grid container direction="row" alignItems="center"> 
            <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
                <Typography variant='h3'>
                    Hello From SERVER 
                </Typography>
                <Typography variant='h5'>
                    give solution for web
                </Typography>
                <Button variant='contained' size='large' sx={{borderRadius: 3,marginTop: 2}}>
                    Contact Us
                </Button>
            </Grid>
            <Grid container item xs={12} sm={6} justifyContent='center' order={{xs:1,sm:2}}>
                <Box component='img' src={Code}></Box>
            </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default CardText