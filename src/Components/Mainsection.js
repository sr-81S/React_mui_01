import React from 'react'
import { Typography, CardContent, Card, CardMedia, Stack } from '@mui/material'

const Mainsection = () => {

    const codeImage =[
        {
            name: "Front End",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Backend",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Express",
            image: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "React js",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Mongo DB",
            image: "https://media.istockphoto.com/photos/devops-concept-sign-on-digital-display-picture-id1306893687?b=1&k=20&m=1306893687&s=170667a&w=0&h=4E-xHzpk-134UWeBd-z_ohKfVTuPG2An4sxYlDZVPaQ="
        },
        {
            name: "Python",
            image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Python boot camp",
            image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]

  return (
        <>
        <Typography variant='h4' mt={3} mb={3} sx={{marginLeft: 20}}>Main Section --</Typography>
        <Stack direction="row" sx={{flexWrap: 'wrap'}} justifyContent="space-evenly">
            {
                codeImage.map(imge=>{
                    return(
                <Card sx={{ maxWidth: "300px", mb: 2,marginLeft: 2 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={imge.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" >
                    {imge.name}
                    </Typography>
                </CardContent>
                
                </Card>
                    )
                })
            }
        
        </Stack>
        </>
  )
}

export default Mainsection