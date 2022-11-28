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
import { FcPortraitMode } from 'react-icons/fc';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import { green } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FcLowPriority } from 'react-icons/fc';
import FactoryIcon from '@mui/icons-material/Factory';
import DescriptionIcon from '@mui/icons-material/Description';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import OutlinedInput from '@mui/material/OutlinedInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { FaRegClone } from 'react-icons/fa';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import CreateIcon from '@mui/icons-material/Create';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import WorkIcon from '@mui/icons-material/Work';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import DownloadIcon from '@mui/icons-material/Download';
import MessageIcon from '@mui/icons-material/Message';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Paper from '@mui/material/Paper';
import ImageIcon from '@mui/icons-material/Image';
import ClearIcon from '@mui/icons-material/Clear';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SiMicrosoftexcel } from 'react-icons/si';
import { HiOutlineDownload } from 'react-icons/hi';
import Hoasen from './image/hoasennho.jpg';
import Cachua from './image/cachua.jpg';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { BiLink } from 'react-icons/bi';
import { FaImage } from 'react-icons/fa';
import { ImAttachment } from 'react-icons/im';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TransformIcon from '@mui/icons-material/Transform';
import { FiVideo } from 'react-icons/fi';
import FaceIcon from '@mui/icons-material/Face';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import AodIcon from '@mui/icons-material/Aod';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { BiMessageRounded } from 'react-icons/bi';
import { GrDocumentWord } from 'react-icons/gr';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};








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
  const [opencreate, setOpencreate] = React.useState(false);

  const handleClickOpencreate = () => {
    setOpencreate(true);
  };
  const handleClosecreate = () => {
    setOpencreate(false);
  };






  const [valueluu, setValueluu] = React.useState(2);

  const handleChangeluu = (event, newValue) => {
    setValueluu(newValue);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const renderIcon = (index) => {
    switch (index) {
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
  // 
  const [value, setValue] = React.useState('1');

  const handleChangetab = (event, newValue) => {
    setValue(newValue);
  };




  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [valueaa, setValueaa] = React.useState('1');

  const handleChangetabmore = (event, newValue) => {
    setValueaa(newValue);
  };


  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));











  function notecontentuser($username, $time) {

    return (

      <CardContent className="content-card">
        <Typography>{$username}<QueryBuilderIcon></QueryBuilderIcon>{$time}</Typography>
        <Typography className="text-template-content-hour" >
          <Button variant="outlined" className="tab-more-note-icon-pen"><CreateIcon></CreateIcon></Button>
          <Button variant="outlined" className="tab-more-note-icon-delete"><ClearIcon></ClearIcon></Button>
        </Typography>
      </CardContent>


    )
  }




  const [items, setItems] = React.useState([])





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
          {['DashBoard', 'My Work', 'Desk', 'Customer', 'Product', 'Demo Page', 'Favories', 'My Work'].map((text, index) => (
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


              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem color="Brown" />}
                spacing={2}
              >
                <Button variant="outlined"  ><KeyboardBackspaceIcon /></Button>
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
                <Typography className="subject-sms"><b>SMS Subject</b></Typography>
              </Stack>

            </Box>
          </Col>




          <Col sm={12} md={12} lg={6}>
            <Box sx={{ flexGrow: 1 }} />
            <Box className="box-done-new" sx={{
              display: {
                xs: 'block',
                md: 'flex',
                float: 'right',


              }
            }}>

              <ButtonGroup variant="none" aria-label="text button group" className="group-btn" >
                <Button variant="outlined" className="btn-done" size="small">Done</Button>
                <Button variant="outlined" className="btn-more" size="small">

                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={openmenu ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openmenu ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      More<KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openmenu}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}><FaRegClone></FaRegClone> Clone </MenuItem>
                      <MenuItem onClick={handleClose}><DeleteOutlineIcon></DeleteOutlineIcon> Delete </MenuItem>

                    </Menu>
                  </div>


                </Button>
                <Button variant="outlined" className="btn-new" size="small" onClick={handleClickOpencreate}>+ New</Button>
                <BootstrapDialog
                  onClose={handleClosecreate}
                  aria-labelledby="customized-dialog-title"
                  open={opencreate}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClosecreate}>
                    Create SMS
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <Typography gutterBottom>
                       Direction
                    </Typography>
                  <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                  </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                      magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                      ullamcorper nulla non metus auctor fringilla.
                  </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClosecreate}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleClosecreate}>
                      Save changes
                    </Button>
                  </DialogActions>
                </BootstrapDialog>


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
          <Col sm={12} md={12} lg={3}>
            <Box className="box-summary">
              <List className="text-summary-list">
                <FormGroup>
                  <ListItem><Typography className="text-summmary">Summary</Typography></ListItem>

                </FormGroup>
                <FormGroup className="group-date">
                  <ListItem><Typography className="text-sms-gray">SMS Schedule</Typography></ListItem>
                  <ListItem><Typography className="text-schedule">Schedule</Typography></ListItem>
                </FormGroup>
                <FormGroup className="group-calendar">
                  <ListItem>
                    <ListItemIcon className="icon-calendar-par">
                      <CalendarMonthIcon className="icon-calendar-sche-par"></CalendarMonthIcon>
                    </ListItemIcon>
                    <Typography className="text-sms-gray">Date</Typography>

                  </ListItem>
                  <ListItem><Typography>2022-02-01 11:00</Typography>
                    <ListItemIcon className="icon-calendar">
                      <CalendarMonthIcon className="icon-calendar-sche"></CalendarMonthIcon>
                    </ListItemIcon>
                  </ListItem>
                </FormGroup>
                <FormGroup className="group-priority">
                  <ListItem>
                    <ListItemIcon className="stutus-priority">
                      <FcLowPriority className="icon-stutus-priority"></FcLowPriority>
                    </ListItemIcon>
                    <Typography className="text-sms-gray">Priority</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className="box-status">New</Typography>
                  </ListItem>
                </FormGroup>
                <FormGroup className="group-purpose">
                  <ListItem>
                    <ListItemIcon className="stutus-purpose">
                      <FactoryIcon className="icon-stutus-purpose"></FactoryIcon>
                    </ListItemIcon>
                    <Typography className="text-sms-gray">Purpose</Typography>

                  </ListItem>
                  <ListItem><Typography>Purpose SMS </Typography></ListItem>
                </FormGroup>
                <FormGroup className="group-priority">
                  <ListItem>
                    <ListItemIcon className="icon-descrip">
                      <DescriptionIcon className="icon-descrip-sub"></DescriptionIcon>
                    </ListItemIcon>
                    <Typography className="icon-stutus-priority">Description</Typography>
                  </ListItem>
                  <ListItem><Typography>Description </Typography></ListItem>
                </FormGroup>

              </List>



            </Box>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChangetab} aria-label="lab API tabs example">
                    <Tab label="Insctuction" value="1" className="tab1-inctuction" />
                    <Tab label="Timeline" value="2" className="tab2-timeline" />
                    <Tab label="+ More" value="3" className="tab3-more" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      // alignItems: 'center',
                      '& > *': {
                        m: 1,
                      },
                    }}
                    className="box-tab1-insctuction"

                  >
                    <ButtonGroup size="large" aria-label="large button group" className="btn-tab1-insctuction" >
                      <Button className="btntodo-tab1-insctuction"><Typography>Todo</Typography> </Button>
                      <Button className="btndoing-tab1-insctuction"><Typography>Doing</Typography> </Button>
                      <Button className="btndone-tab1-insctuction"><Typography>Done</Typography> </Button>
                    </ButtonGroup>

                    <Card variant="outlined" className="Card-template">
                      <React.Fragment className="card-insctuction">
                        <CardContent>
                          <ListItem>
                            <Typography className="text-template">Template:  </Typography>
                            <Typography className="text-template-content">Template 1</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="text-template">Direction: </Typography>
                            <Typography className="text-template-content" >Outgoing</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="text-template">From: </Typography>
                            <Avatar className="avtar-card"></Avatar>
                            <Typography className="text-template-content">MSM</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="text-template">To: </Typography>
                            <Typography className="text-template-content" >Allan Rey Palban &lt;010-1234-5678&gt; </Typography>
                          </ListItem>
                          <OutlinedInput className="text-content" placeholder="Content" />
                        </CardContent>
                      </React.Fragment>
                    </Card>
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Divider className="divider-date">
                    <Chip label="2021-03-17" variant="outlined" className="tab2-timeline-date" />
                  </Divider>



                  <Box >
                    <Grid container >
                      <Divider orientation="vertical" flexItem  >
                        <Avatar className="tab2-box-pen">
                          <CreateIcon className="tab2-icon-pen"></CreateIcon>
                        </Avatar>
                      </Divider>
                      <Grid item xs>
                        <Card variant="outlined" className="tab2-card-template">
                          <React.Fragment className="card-insctuction">
                            <CardContent className="content-card">
                              <Typography>Expected Duration was updated from <b>1 hour </b>to <b>1 day</b> by MSR</Typography>
                              <Typography className="text-template-content-hour" >15:28</Typography>
                            </CardContent>
                          </React.Fragment>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>


                  <Box >
                    <Grid container >
                      <Divider orientation="vertical" flexItem component="li" >
                        <Avatar className="tab2-box-pen">
                          <MessageIcon className="tab2-icon-pen"></MessageIcon>
                        </Avatar>
                      </Divider>
                      <Grid item xs>
                        <Card variant="outlined" className="tab2-card2-template">
                          <React.Fragment className="card-insctuction">
                            <CardContent className="content-card">
                              <Typography>KDH noted <b>" The demo location is changed. "</b> </Typography>
                              <Typography className="text-template-content-hour" >15:28</Typography>
                            </CardContent>
                          </React.Fragment>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box >
                    <Grid container >
                      <Divider orientation="vertical" flexItem component="li" >
                        <Avatar className="tab2-box-pen">
                          <FilePresentIcon className="tab2-icon-pen"></FilePresentIcon>
                        </Avatar>
                      </Divider>
                      <Grid item xs>
                        <Card variant="outlined" className="tab2-card2-template">
                          <React.Fragment className="card-insctuction">
                            <CardContent className="content-card">
                              <Typography>MSR uploaded a file <b>report.doc</b></Typography>
                              <Typography>15:28</Typography>
                            </CardContent>
                            <CardActions className="download-file-tab2">
                              <Button variant="text" className="download-file"><DownloadIcon></DownloadIcon>Download</Button>
                            </CardActions>
                          </React.Fragment>

                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>




                <TabPanel value="3">





                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueaa}>
                      <Box className="more-tab-two" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChangetabmore} aria-label="lab API tabs example" className="more-tab-two" centered>
                          <Tab label="Note" value="1" className="more-tab-note" />
                          <Tab label="TeamChannel" value="2" className="more-tab-teamchannel" />
                        </TabList>
                      </Box>
                      <TabPanel value="1" >
                        <Box >
                          <Paper >
                            <OutlinedInput className="tab-more-text-content-note" placeholder="Enter a message" />
                            <Divider />
                            <ListItemButton className="tab-more-text-paper-note">
                              <ListItemIcon>
                                <Button variant="outlined" className="tab3-tab-more-btn-attachfile"><FilePresentIcon className="tab-more-icon-attachfile-note" ></FilePresentIcon></Button>
                                <Button variant="outlined" className="tab3-tab-more-btn-attachfile"><ImageIcon className="tab-more-icon-attachfile-note" ></ImageIcon></Button>
                              </ListItemIcon>
                              <ListItemText primary=" " />
                              <Button variant="outlined" className="tab-more-note-btn-post">Post</Button>
                            </ListItemButton>
                          </Paper>
                        </Box>



                        <Box >
                          <Grid container >
                            <Divider orientation="vertical" flexItem  >
                              <Box sx={{ p: 1, my: 1, border: '1px solid' }} className="tab3-box-date" >
                                2021-03-17
                              </Box>
                            </Divider>
                            <Grid item xs>
                            </Grid>
                          </Grid>
                        </Box>


                        <Grid container >
                          <Divider orientation="vertical" flexItem component="li" >
                            <Avatar className="tab2-box-pen">
                              <IconButton
                                size="large"
                                aria-haspopup="true"
                                color="inherit"
                              >
                                <FcPortraitMode />
                              </IconButton>
                            </Avatar>
                          </Divider>
                          <Grid item xs>
                            <Card variant="outlined" className="tab2-card2-template">
                              <React.Fragment className="card-insctuction">
                                {notecontentuser("MSR", "13:00")}
                                <Divider />
                                <CardActions >

                                  <List>
                                    <ListItem>
                                      <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                                    </ListItem>
                                    <ListItem disablePadding>
                                      <ListItemButton>
                                        <ListItemIcon>
                                          <FilePresentIcon />
                                        </ListItemIcon>
                                        <ListItemText className="text-downloadfile">abc.doc </ListItemText>
                                      </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                      <ListItemButton>
                                        <ListItemIcon>
                                          <FilePresentIcon />
                                        </ListItemIcon>
                                        <ListItemText className="text-downloadfile">def.pdf </ListItemText>
                                      </ListItemButton>
                                    </ListItem>
                                  </List>

                                </CardActions>
                              </React.Fragment>
                            </Card>
                          </Grid>
                        </Grid>

                        <Box >
                          <Grid container >
                            <Divider orientation="vertical" flexItem component="li" >
                              <Avatar className="tab2-box-pen">
                                <IconButton
                                  size="large"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FcPortraitMode />
                                </IconButton>
                              </Avatar>
                            </Divider>
                            <Grid item xs>
                              <Card variant="outlined" className="tab2-card2-template">
                                <React.Fragment className="card-insctuction">
                                  {notecontentuser("KDH", "10:00")}
                                  <Divider />
                                  <CardActions >

                                    <List>
                                      <ListItem>
                                        <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ligula, ornare sit amet porttitor quis, placerat quis lacus. Mauris lectus turpis, rutrum non placerat id, placerat et nisl. " />
                                      </ListItem>
                                    </List>
                                  </CardActions>
                                </React.Fragment>
                              </Card>
                            </Grid>
                          </Grid>
                        </Box>





                      </TabPanel>
                      <TabPanel value="2" >

                        <Grid container >
                          <Box className="box-par-content"
                            style={{
                              height: 500,
                              overflow: 'auto',
                              display: 'flex',
                              flexDirection: 'column-reverse',
                            }}>
                            <InfiniteScroll
                              inverse={true} //
                              hasMore={true}
                              dataLength={1}
                              scrollableTarget="scrollableDiv"
                              className="scroll-bar" >
                              <Box >
                                <Divider>
                                  <Chip label="2021-06-15" />
                                </Divider>
                                <List>
                                  <ListItem disablePadding>
                                    <ListItemIcon>
                                      <Stack direction="row" spacing={1}>
                                        <Avatar>H</Avatar>
                                      </Stack>
                                    </ListItemIcon>
                                    <ListItemText>
                                      <Typography>John</Typography>
                                    </ListItemText>
                                  </ListItem>
                                </List>
                                <Box className="content-chat">
                                  <Typography>How Can I order the products?</Typography>
                                  <List>
                                    <ListItem disablePadding>
                                      <Box className="box-image-cot">
                                        <ListItem disablePadding>
                                          <ListItemIcon>
                                            <Stack direction="row" spacing={1}>
                                              <SiMicrosoftexcel className="icon-excel"></SiMicrosoftexcel>
                                            </Stack>
                                          </ListItemIcon>
                                          <ListItemText>
                                            <Typography>list.xls</Typography>
                                          </ListItemText>
                                        </ListItem>
                                      </Box>

                                      <Box className="box-image-cot">
                                        <Button variant="outlined" className="btn-icon-download"><HiOutlineDownload className="icon-download"></HiOutlineDownload></Button>
                                      </Box>
                                    </ListItem>

                                    <ListItem disablePadding className="box-image-line" >
                                      <Box className="box-image-cot-icon-image">
                                        <Paper>
                                          <img src={Hoasen} className="image-channel"></img>
                                          <Typography className="image-text-channel">hoasennho.jpg</Typography>
                                        </Paper>

                                      </Box>

                                      <Box className="box-image-cot-image">
                                        <Button variant="outlined" className="btn-icon-download"><HiOutlineDownload className="icon-download"></HiOutlineDownload></Button>
                                      </Box>
                                    </ListItem>

                                  </List>
                                </Box>
                              </Box>
                              <Typography className="box-image-hours">15:30</Typography>
                              <Box className="chat-right">
                                <List>
                                  <ListItem disablePadding>
                                    <Box className="box-message">
                                      <ListItem disablePadding>

                                        <Alert icon={false} severity="success" className="box-message-chat content">
                                          <Typography>KDH</Typography>
                                          <Typography>Let me create a ticket for you</Typography>
                                        </Alert>

                                      </ListItem>
                                    </Box>
                                    <Box className="box-message-image">
                                      <Avatar className="avatar-chat"><FcPortraitMode /></Avatar>
                                    </Box>

                                  </ListItem>
                                  <Typography>15:30</Typography>
                                </List>
                              </Box>
                              <Divider><Chip label="Today" /></Divider>
                              <List>
                                <ListItem disablePadding>
                                  <ListItemIcon>
                                    <Stack direction="row" spacing={1}>
                                      <Avatar>K</Avatar>
                                    </Stack>
                                  </ListItemIcon>
                                  <ListItemText>
                                    <Typography>Katherine</Typography>
                                  </ListItemText>
                                </ListItem>
                              </List>
                              <Box className="content-chat">
                                <Typography>Hello</Typography>
                                <List>
                                  <ListItemText>
                                    <Typography>Im interested in hearing more about the new features.</Typography>
                                  </ListItemText>


                                </List>
                              </Box>
                              <Typography className="box-image-hours">15:30</Typography>
                              <Box className="chat-right">
                                <List>
                                  <ListItem disablePadding>
                                    <Box className="box-message">
                                      <ListItem disablePadding>

                                        <Alert icon={false} severity="success" className="box-message-chat content">
                                          <Typography>MSR</Typography>
                                          <Typography>Let me create a ticket for you</Typography>
                                        </Alert>

                                      </ListItem>
                                    </Box>
                                    <Box className="box-message-image">
                                      <Avatar alt="Remy Sharp" src={Cachua} />
                                    </Box>
                                  </ListItem>
                                  <Typography>15:30</Typography>

                                  <ListItem disablePadding>
                                    <Box className="box-message-two">
                                      <ListItem disablePadding>

                                        <Alert icon={false} severity="success" className="box-message-chat-content2">
                                          <Typography>MSR</Typography>
                                          <Typography className="txt-message">Let me create a ticket for you</Typography>
                                        </Alert>

                                      </ListItem>
                                      <Typography>15:30</Typography>
                                    </Box>

                                  </ListItem>
                                </List>
                              </Box>
                            </InfiniteScroll>


                          </Box>
                          <Paper className="luuluu">
                            <OutlinedInput className="tab-more-text-content-note" placeholder="Enter a message" />
                            <Divider />
                            <ListItemButton className="tab-more-text-paper-note">
                              <ListItemIcon className="listbutton-chat">
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FormatBoldIcon className="tab-channel-icon-chat-message" ></FormatBoldIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FormatItalicIcon className="tab-channel-icon-chat-message" ></FormatItalicIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <BiLink className="tab-channel-icon-chat-message" ></BiLink>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <ImageIcon className="tab-channel-icon-chat-message" ></ImageIcon>
                                </IconButton>

                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <ImAttachment className="tab-channel-icon-chat-message" ></ImAttachment>
                                </IconButton>
                                <Divider orientation="vertical" flexItem color="Brown" />
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <AlternateEmailIcon className="tab-channel-icon-chat-message" ></AlternateEmailIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FaceIcon className="tab-channel-icon-chat-message" ></FaceIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <TransformIcon className="tab-channel-icon-chat-message" ></TransformIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FiVideo className="tab-channel-icon-chat-message" ></FiVideo>
                                </IconButton>
                              </ListItemIcon>
                            </ListItemButton>

                            <ListItemButton className="list-btn-mobile">
                              <ListItemIcon className="listbutton-chat">
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FormatBoldIcon className="tab-channel-icon-chat-message" ></FormatBoldIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FormatItalicIcon className="tab-channel-icon-chat-message" ></FormatItalicIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <BiLink className="tab-channel-icon-chat-message" ></BiLink>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <ImageIcon className="tab-channel-icon-chat-message" ></ImageIcon>
                                </IconButton>

                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <ImAttachment className="tab-channel-icon-chat-message" ></ImAttachment>
                                </IconButton>
                                <Divider orientation="vertical" flexItem color="Brown" />
                              </ListItemIcon>




                              <ListItemIcon className="listbutton-chat">
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <AlternateEmailIcon className="tab-channel-icon-chat-message" ></AlternateEmailIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FaceIcon className="tab-channel-icon-chat-message" ></FaceIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <TransformIcon className="tab-channel-icon-chat-message" ></TransformIcon>
                                </IconButton>
                                <IconButton
                                  size="small"
                                  aria-haspopup="true"
                                  color="inherit"
                                >
                                  <FiVideo className="tab-channel-icon-chat-message" ></FiVideo>
                                </IconButton>
                              </ListItemIcon>
                            </ListItemButton>

                          </Paper>

                        </Grid>




                      </TabPanel>


                    </TabContext>

                  </Box>




                </TabPanel>
              </TabContext>
            </Box>

          </Col>


          <Col sm={12} md={12} lg={3}>
            <Box className="card-custom">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <DragIndicatorIcon /><Typography className="txt-customer">Customer</Typography>
                </AccordionSummary>
                <AccordionDetails>

                  <Grid container justifyContent="center">
                    <Grid item xs={6}>

                      <Tooltip placement="left-end">

                        <Box className="username1-custom">
                          <Avatar alt="Remy Sharp" src={Cachua} />
                          <Typography className="txt-name-user">Allan Rey Palban</Typography>
                        </Box>
                      </Tooltip>
                    </Grid>
                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                      <Grid item>
                        <Tooltip placement="right-start">
                          <Box>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Send Mail"
                            >
                              <EmailIcon className="icon-message" ></EmailIcon>
                            </IconButton>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Send SMS"
                            >
                              <AodIcon className="icon-phone" ></AodIcon>
                            </IconButton>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Delete"
                            >
                              <ClearIcon className="icon-clear" ></ClearIcon>
                            </IconButton>
                          </Box>

                        </Tooltip>
                      </Grid>

                    </Grid>
                  </Grid>


                  <Grid container justifyContent="center" className="line-username">
                    <Grid item xs={6}>

                      <Tooltip placement="left-end">
                        <Box className="username1-custom">
                          <Avatar alt="Remy Sharp" />
                          <Typography className="txt-name-user">Situmay</Typography>
                        </Box>
                      </Tooltip>
                    </Grid>
                    <Grid item container xs={6} alignItems="flex-end" direction="column" >
                      <Grid item>
                        <Tooltip placement="right-start">
                          <Box >
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Send Mail"
                            >
                              <EmailIcon className="icon-message" ></EmailIcon>
                            </IconButton>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Send SMS"
                            >
                              <AodIcon className="icon-phone" ></AodIcon>
                            </IconButton>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Delete"
                            >
                              <ClearIcon className="icon-clear" ></ClearIcon>
                            </IconButton>

                          </Box>


                        </Tooltip>
                      </Grid>

                    </Grid>
                  </Grid>






                  <Grid container justifyContent="center" className="paper-click-user">
                    <Grid item xs={10} >

                      <Tooltip placement="left-end">
                        <Box >
                          <OutlinedInput className="txt-type-or-click" placeholder="Type or click to add an user" />
                        </Box>
                      </Tooltip>
                    </Grid>
                    <Grid item container xs={2} direction="column" className="icon-click-user">
                      <Grid item >
                        <Tooltip placement="right-start" >
                          <Box className="icon-user">
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                            >
                              <PersonOutlineIcon  ></PersonOutlineIcon>
                            </IconButton>
                          </Box>

                        </Tooltip>
                      </Grid>

                    </Grid>
                  </Grid>

                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <DragIndicatorIcon /><Typography className="txt-customer">Assigned Rep</Typography>
                </AccordionSummary>
                <AccordionDetails >
                  <Grid container justifyContent="center" className="box-assigned-rep">
                    <Grid item xs={6}>

                      <Tooltip placement="left-end">
                        <Box className="avatar-assign-box">
                          <Avatar alt="Remy Sharp" src={Hoasen} className="avatar-assign-image" />
                          <Typography className="txt-name-user">Situmay</Typography>
                        </Box>
                      </Tooltip>
                    </Grid>
                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                      <Grid item>
                        <Tooltip placement="right-start">
                          <IconButton
                            size="small"
                            aria-haspopup="true"
                            color="inherit"
                            title="Delete"
                            className="icon-right"
                          >
                            <ClearIcon className="icon-clear-radius" ></ClearIcon>
                          </IconButton>

                        </Tooltip>
                      </Grid>

                    </Grid>
                  </Grid>

                  <Grid container justifyContent="center" className="line-username">
                    <Grid item xs={6}>

                      <Tooltip placement="left-end">
                        <Box className="username1-custom">
                          <Avatar alt="Remy Sharp" />
                          <Typography className="txt-name-user">KDH</Typography>
                        </Box>
                      </Tooltip>
                    </Grid>
                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                      <Grid item>
                        <Tooltip placement="right-start">
                          <Box>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Send Mail"
                            >
                              <EmailIcon className="icon-message" ></EmailIcon>
                            </IconButton>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Send SMS"
                            >
                              <BiMessageRounded className="icon-phone" ></BiMessageRounded>
                            </IconButton>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Delete"
                            >
                              <ClearIcon className="icon-clear" ></ClearIcon>
                            </IconButton>

                          </Box>


                        </Tooltip>
                      </Grid>

                    </Grid>






                  </Grid>
                  <Grid container justifyContent="center" className="paper-click-user">
                    <Grid item xs={10} >

                      <Tooltip placement="left-end">
                        <Box >
                          <OutlinedInput className="txt-type-or-click" placeholder="Type or click to add an user" />
                        </Box>
                      </Tooltip>
                    </Grid>
                    <Grid item container xs={2} direction="column" className="icon-click-user" >
                      <Grid item>
                        <Tooltip placement="right-start">
                          <Box className="icon-user">
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                            >
                              <PersonOutlineIcon  ></PersonOutlineIcon>
                            </IconButton>
                          </Box>

                        </Tooltip>
                      </Grid>

                    </Grid>
                  </Grid>



                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <DragIndicatorIcon /><Typography className="txt-customer">Attachments</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container justifyContent="center">
                    <Grid item xs={9}>

                      <Tooltip placement="left-end">
                        <Box className="username1-custom">
                          <Box>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"

                            >
                              <GrDocumentWord className="icon-filedoc"></GrDocumentWord>
                            </IconButton>
                          </Box>


                          <Box className="box-text-attachmentfile">
                            <Typography>계약서계약서</Typography>
                            <Typography>(18.94 KB) </Typography>
                          </Box>
                        </Box>

                      </Tooltip>
                    </Grid>
                    <Grid item container xs={3} alignItems="flex-end" direction="column">
                      <Grid item>
                        <Tooltip placement="right-start">
                          <Box>

                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Send SMS"
                            >
                              <DownloadIcon className="icon-download" ></DownloadIcon>
                            </IconButton>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Delete"
                            >
                              <ClearIcon className="icon-clear" ></ClearIcon>
                            </IconButton>
                          </Box>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="center">
                    <Grid item xs={9}>

                      <Tooltip placement="left-end">
                        <Box className="username1-custom">
                          <Box>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"

                            >
                              <GrDocumentWord className="icon-filedoc"></GrDocumentWord>
                            </IconButton>
                          </Box>


                          <Box className="box-text-attachmentfile">
                            <Typography>계약서계약서</Typography>
                            <Typography>(18.94 KB) </Typography>
                          </Box>
                        </Box>

                      </Tooltip>
                    </Grid>
                    <Grid item container xs={3} alignItems="flex-end" direction="column">
                      <Grid item>
                        <Tooltip placement="right-start">
                          <Box>

                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Send SMS"
                            >
                              <DownloadIcon className="icon-download" ></DownloadIcon>
                            </IconButton>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Delete"
                            >
                              <ClearIcon className="icon-clear" ></ClearIcon>
                            </IconButton>
                          </Box>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Button className="btn-download-all-file">
                    <AiOutlineCloudUpload className="icon-clouddisk"></AiOutlineCloudUpload>
                    <Typography>Drag &#38; Drop Files </Typography>
                  </Button>
                  <Button >
                    <SystemUpdateAltIcon className="icon-download-clod"></SystemUpdateAltIcon>
                    <Typography>Download All </Typography>
                  </Button>






                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <DragIndicatorIcon /><Typography className="txt-customer">Product</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container justifyContent="center">
                    <Grid item xs={6}>
                      <Tooltip placement="left-end">
                        <Button >
                          <Typography>Woman Peacoat </Typography>
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                      <Grid item>
                        <Tooltip title="Add" placement="right-start">
                          <Box>
                            <IconButton
                              size="small"
                              aria-haspopup="true"
                              color="inherit"
                              title="Delete"
                            >
                              <ClearIcon className="icon-clear" ></ClearIcon>
                            </IconButton>
                          </Box>
                        </Tooltip>
                      </Grid>

                    </Grid>
                  </Grid>





                </AccordionDetails>
              </Accordion>

            </Box>
          </Col>
        </Row>




      </Box>
    </Box>
  );
}