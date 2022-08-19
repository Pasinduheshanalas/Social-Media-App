import { Pets,Mail,Notifications } from '@mui/icons-material'
import { AppBar, InputBase, styled, Toolbar, Typography,Badge, Avatar,Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'

//Make styeldToolbar Component
const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
//Make Search Component
const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))
//Make Icons Component
const Icons = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))
//Make UserBox Component
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))


export const Navbar = () => { 
  //useState For Open Close Menu
  const [open,setOpen] = useState(false);
  return (
  //App Bar
  <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx = {{display:{xs:"none", sm:"block"}}}>
              Revos
        </Typography>
        <Pets sx = {{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
          <Mail></Mail>
          </Badge>
          <Badge badgeContent={4} color="error">
          <Notifications></Notifications>
          </Badge>
        </Icons>
        <UserBox>
          <Avatar
          sx = {{width:30, height:30}}
          src ="https://cdn.pixabay.com/photo/2016/03/31/20/27/avatar-1295773_960_720.png"
          onClick={e=>setOpen(true)} />
          <Typography variant='span'>
            Andrww
          </Typography>
        </UserBox>
      </StyledToolbar> 
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose = {e=>setOpen(false)}
          
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
  </AppBar>
  )
}
