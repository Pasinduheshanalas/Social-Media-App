import React from 'react'
import {Box,List, ListItemIcon, ListItemText, ListItem, ListItemButton, Switch} from "@mui/material"
import Home from '@mui/icons-material/Home';
import Pages from '@mui/icons-material/Pages';
import Groups from '@mui/icons-material/Groups';
import LocalGroceryStore from '@mui/icons-material/LocalGroceryStore';
import GroupAdd from '@mui/icons-material/GroupAdd';
import Settings from '@mui/icons-material/Settings';
import Person from '@mui/icons-material/Person';
import DarkMode from '@mui/icons-material/DarkMode';

export const Slidebar = ({mode,setMode}) => {
  return (
    <Box  flex="2" p={2}
    sx = {{display:{xs:"none", sm:"block"}}}>
     <Box position="fixed">
    {/* Side List */}
     <List>
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#home">
              <ListItemIcon>
              <Home/>
              </ListItemIcon>
              <ListItemText primary="Home Page"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#pages">
              <ListItemIcon>
              <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#groups">
              <ListItemIcon>
              <Groups/>
              </ListItemIcon>
              <ListItemText primary="Groups"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#marketplaces">
              <ListItemIcon>
              <LocalGroceryStore/>
              </ListItemIcon>
              <ListItemText primary="Market Places"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#mfriends">
              <ListItemIcon>
              <GroupAdd/>
              </ListItemIcon>
              <ListItemText primary="Friends"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#settings">
              <ListItemIcon>
              <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#person">
              <ListItemIcon>
              <Person/>
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#moon">
          {/* Dark Mode */}
              <ListItemIcon>
              <DarkMode/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light"?"dark":"light")}/>
            </ListItemButton>
          </ListItem> 
     </List>
     </Box>
      </Box>
  )
}
 