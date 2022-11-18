import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@mui/material/Button';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import HeadsetIcon from '@mui/icons-material/Headset';
import { AiOutlineDashboard } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { FaRegStar } from 'react-icons/fa';
import { GrStackOverflow } from 'react-icons/gr';
import { AiFillPlusCircle } from 'react-icons/ai';
import RestoreIcon from '@mui/icons-material/Restore';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {FcPortraitMode} from 'react-icons/fc';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import { green } from '@mui/material/colors';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const renderIcon = (index) => {
      switch(index) {
        case 0:
          return <AiOutlineDashboard className="iconstyle-dashboard" size={30}></AiOutlineDashboard>;
        case 1:
          return <RememberMeIcon className="iconstyle-phone" size={30}></RememberMeIcon>
        case 2:
          return <HeadsetIcon className="iconstyle-headset" size={30}></HeadsetIcon>;
        case 3:
          return <HiUserGroup className="iconstyle-hiuser" size={30} ></HiUserGroup>;
        case 4:
          return <AiOutlineCodepen className="iconstyle" size={30}></AiOutlineCodepen>;
        case 5:
          return <AiOutlineCodeSandbox className="iconstyle-sanbox" size={30}></AiOutlineCodeSandbox>;
        case 6:
          return <FaRegStar className="iconstyle-start" size={30}></FaRegStar>;
        default:
          return <GrStackOverflow className="iconstyle-work" size={30}></GrStackOverflow>;
      }
    }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };







    

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="nav">
        <Toolbar className="subnav">
          <IconButton
            className="subnav-icon"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            className="subnav-icon-mobile"
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="title-custommer">
            Customer Name 
          </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="search" color="inherit">
                    <AiFillPlusCircle className="iconstyle-plus"></AiFillPlusCircle>     
                </IconButton>
                <IconButton
                size="large"
                aria-haspopup="true"
                color="inherit"
                >
                <RestoreIcon />
                </IconButton>
                <IconButton
                size="large"
                aria-haspopup="true"
                color="inherit"
                >
                <SearchIcon />
                </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                size="large"
                aria-label="show 2 new notifications"
                color="inherit"
                >
                <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                </Badge>
                </IconButton>

                <IconButton
                size="large"
                aria-haspopup="true"
                color="inherit"
                >
                <SettingsIcon />
                </IconButton>


                <IconButton
                size="large"
                aria-haspopup="true"
                color="inherit"
                >
                <HelpOutlineIcon />
                </IconButton>

                <IconButton
                size="large"
                aria-haspopup="true"
                color="inherit"
                >
                <FcPortraitMode />
                </IconButton>

                <IconButton
                size="large"
                aria-haspopup="true"
                color="inherit"
                edge="end"
                >
                <LogoutIcon />
                </IconButton> 
            </Box>
        </Toolbar>
      </AppBar>



      <Drawer variant="permanent" open={open} className="sidebar-menu">
        <DrawerHeader className='logo-title'>
          <IconButton onClick={handleDrawerClose}>
                    <Typography className="title1"> <h4 className="crm-title-logo">HANBIRO</h4></Typography>
                    <Typography className="title2"> <h6 className="crm-text">CRM</h6></Typography>
            {theme.direction === 'ltr' ? <DensitySmallIcon className="iconstyle-title"></DensitySmallIcon> : <DensitySmallIcon className="iconstyle-title"></DensitySmallIcon>}
          </IconButton>
        </DrawerHeader>
        <Divider />


        
        <List className='content-menu'>
          {['DashBoard', 'My Work', 'Desk', 'Customer','Product','Demo Page','Favories','My Work'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   {renderIcon(index)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

      </Drawer>




      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Row>
            <Col sm={12} md={12} lg={6}>
              <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    '& > *': {
                      m: 1,
                    },
                  }}
                >
                
                <ButtonGroup variant="none" aria-label="text button group" className="group-btn" >
                  {/* <Button  variant="outlined" className="btn-back" size="small"><KeyboardBackspaceIcon /></Button> */}
                  <Button variant="outlined" className="btn-back" ><KeyboardBackspaceIcon /></Button>
                  <Button>
                  <FormControl sx={{ m: 0, minWidth: 120 }} size="small" >
                    
                    <Select
                      className="active-list"
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="">
                        <Typography>Activity</Typography>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  </Button>
                  
                  <Button ><Typography className="subject-sms"><b>SMS Subject</b></Typography></Button>
                </ButtonGroup>
              </Box>
            </Col>




            <Col sm={12} md={12} lg={6}>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ 
                  display: { 
                  xs: 'block', 
                  md: 'flex',
                  float:'right',
                  display: 'flex',
                  flexDirection: 'column',
                  
                } 
                  }}>
                
                <ButtonGroup variant="none" aria-label="text button group" className="group-btn" >
                  <Button  variant="outlined" className="btn-done" size="small">Done</Button>
                  <Button>
                  <FormControl sx={{ m: 0, minWidth: 120 }} size="small" >
                    
                    <Select
                      className="active-list"
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="">
                        <Typography>More</Typography>
                      </MenuItem>
                      <MenuItem value={10}>Clone</MenuItem>
                      <MenuItem value={20}>Delete</MenuItem>
                      
                    </Select>
                  </FormControl>
                  </Button>
                  <Button  variant="outlined" className="btn-new" size="small">+ New</Button>
                  <Avatar sx={{ bgcolor: green[500] }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg" className="avatar" > </Avatar>
                </ButtonGroup>
                
                
                
                </Box>
            </Col>



         
        </Row>
        <Divider />
        <Row>
          <Col md={12}>
            
          </Col>
        </Row>
        <Row>
                  <Col md={3}>
                      <Typography>Test1</Typography>
                  </Col>
                  <Col md={6}>
                    <Typography>Test2</Typography>
                  </Col>
                  <Col md={3}>
                  <Typography>Test3</Typography>
                  </Col>
        </Row>


        
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}