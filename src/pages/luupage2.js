import React from "react";
import './Style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@mui/material/Button';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import HeadsetIcon from '@mui/icons-material/Headset';
import Typography from '@mui/material/Typography'
import { AiOutlineDashboard } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { FaRegStar } from 'react-icons/fa';
import { GrStackOverflow } from 'react-icons/gr';
import { red } from "@mui/material/colors";



const Home = () => {
    return (
        <Row>
            <Col md={2}>
                <nav className="sidebar sidebar-menu-collapsed">
                    <div className='logo-title'>
                            <Typography> <h3 className="crm-title-logo">HANBIRO</h3></Typography>
                            <Typography> <h6 className="crm-text">CRM</h6></Typography>
                        <a id='justify-icon'>
                            <DensitySmallIcon className="iconstyle-title"></DensitySmallIcon>
                        </a>
                    </div>
                    <div className='conten-menu'>
                        <ul>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle-dashboard" size={30}></AiOutlineDashboard>
                                    <Typography className="expanded-element">Dashboard</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <RememberMeIcon className="iconstyle-phone" size={30}></RememberMeIcon>
                                    <Typography className="expanded-element">My Work</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <HeadsetIcon className="iconstyle-headset" size={30}></HeadsetIcon>
                                    <Typography className="expanded-element">Desk</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <HiUserGroup className="iconstyle-hiuser" size={30} ></HiUserGroup>
                                    <Typography className="expanded-element">Customer</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineCodepen className="iconstyle" size={30}></AiOutlineCodepen>
                                    <Typography className="expanded-element">Product</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineCodeSandbox className="iconstyle-sanbox" size={30}></AiOutlineCodeSandbox>
                                    <Typography className="expanded-element">Demo Page</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <FaRegStar className="iconstyle-start" size={30}></FaRegStar>
                                    <Typography className="expanded-element">Favorites</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <GrStackOverflow className="iconstyle-work" size={30}></GrStackOverflow>
                                    <Typography className="expanded-element">My Work</Typography>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </Col>
            <Col md={10}>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Col>
        </Row>
        
    )
}

export default Home;