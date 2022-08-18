import React, { useState } from 'react'
import {Add as AddIcon} from "@mui/icons-material"
import { Tooltip, Fab, Modal, styled, Typography, Avatar, TextField, Button, ButtonGroup } from '@mui/material'
import { Box, Stack } from '@mui/system'
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import Image from '@mui/icons-material/Image';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import PersonAddAlt1 from '@mui/icons-material/PersonAddAlt1';
import CalendarMonth from '@mui/icons-material/CalendarMonth';


const StyledModal = styled(Modal)({
     display:"flex",
     alignItems:"center",
     justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"

    
})

export default function Add() {
    const [open, setOpen] = useState(false)
  return (
<>
    <Tooltip onClick={e=>setOpen(true)} title="Add New" sx={{position:"fixed", bottom: 20, left:{xs:"calc(50% - 25px)", md:30}}}>
    <Fab color="primary" aria-label="add">
    <AddIcon />
    </Fab>
    </Tooltip>
    <StyledModal
    open = {open}
    onClose = {e=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"> 
  <Box width={400}  height={280} bgcolor="#fff" p={3} borderRadius={5} >
        <Typography varient="h6" color={"gray"} textAlign="center">
            Create Post
        </Typography>
        <UserBox>
        <Avatar sx={{width:30, height:30}}
         alt="Cindy Baker" 
         src="https://img.freepik.com/premium-psd/3d-driver_382786-1263.jpg?w=740" />
         <Typography fontWeight={500} variant="span">
            Andreww
         </Typography>
        </UserBox>
        <TextField sx={{width:"100%"}}
          id="standard-helperText"
          multiline
          placeholder="What's on your mind..?"
          rows={4}
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary'/>
            <Image color='secondary'/>
            <VideoCameraBack color='success'/>
            <PersonAddAlt1 color='error'/>
        </Stack>
        <ButtonGroup 
        fullWidth
        variant="contained" aria-label="outlined primary button group">
          <Button>Post</Button>
          <Button sx={{width:"100px"}}><CalendarMonth/></Button>
          
        </ButtonGroup>
  </Box>
</StyledModal>
</>
  )
}
