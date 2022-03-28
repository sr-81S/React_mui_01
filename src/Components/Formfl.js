import React from 'react'
import { Container, Typography, TextField, Button } from '@mui/material'
import { Box } from '@mui/system'
import { FormatUnderlined } from '@mui/icons-material'


const Formfl = () => {
  return (
    <>
        <Typography variant='h3' mt={3} mb={3} ml={25} sx={{color: '#EFAF37'}}>
            Contact Us
        </Typography>
        <Box component='form'>
        <Container sx={{mb: 4}}>
        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ml: 2}} helperText="Please enter your full name"/>
        <TextField id="outlined-basic" label="Phone" variant="outlined"  sx={{ml: 2}} helperText="Please enter your Phone No."/>
        <TextField  id="outlined-basic" label="Email" variant="outlined" sx={{ml: 2}} helperText="Please enter your Email" />
        <TextField
          fullWidth
          sx={{mt: 2, }}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        <Button size='large' sx={{ml: 1, mt: 2 }} variant="contained">submit</Button>
        </Container>
        </Box>
    </>
  )
}

export default Formfl