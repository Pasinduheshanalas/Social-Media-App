import React from 'react'
import {Box, Typography,AvatarGroup,Avatar, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider, } from "@mui/material"

export const Rightbar = () => {
  return (
    <Box flex="2" p={2}
    sx = {{display:{xs:"none", sm:"block"}}}>
     <Box position="fixed" width={300}>
          <Typography varient="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={5} mt={2} mb={2}>
              <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/photos/you-dont-have-to-go-outside-to-feel-the-sunshine-picture-id1307374438" />
              <Avatar alt="Travis Howard" src="https://media.istockphoto.com/photos/smiling-girl-playing-on-the-swing-picture-id1252210017" />
              <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/photos/happy-little-boy-on-swing-picture-id540234120" />
              <Avatar alt="Agnes Walker" src="https://media.istockphoto.com/photos/shot-of-a-young-man-taking-a-break-while-working-at-home-picture-id1347684123" />
              <Avatar alt="Agnes Walker" src="https://img.freepik.com/premium-vector/happy-girl-avatar-funny-child-profile-picture-isolated-white-background_176411-3188.jpg?w=740" />
              <Avatar alt="Trevor Henderson" src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" />
          </AvatarGroup>
          <Typography>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/you-dont-have-to-go-outside-to-feel-the-sunshine-picture-id1307374438"
            />
            </ImageListItem>
            <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/shot-of-a-young-man-taking-a-break-while-working-at-home-picture-id1347684123"
            />
            </ImageListItem>
            <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/shocked-african-businessman-having-issue-working-on-laptop-in-office-picture-id1305352386"
            />
            </ImageListItem>
            <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/home-office-coffee-break-picture-id1278946109"
            />
            </ImageListItem>
            <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343"
            />
            </ImageListItem>
            <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/portrait-of-a-confident-caucasian-mature-middleaged-man-wearing-at-picture-id1328351516"
            />
            </ImageListItem>
          </ImageList>
          <Typography varient="h6" fontWeight={100}>
            Recent Chats
          </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://img.freepik.com/premium-psd/3d-driver_382786-1263.jpg?w=740" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://media.istockphoto.com/photos/you-dont-have-to-go-outside-to-feel-the-sunshine-picture-id1307374438" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/photos/home-office-coffee-break-picture-id1278946109" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </React.Fragment>
                    }
                  />
                </ListItem>
            </List>
     </Box>
    </Box>
  )
}
