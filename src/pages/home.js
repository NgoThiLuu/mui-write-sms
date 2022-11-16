import React from "react";
import './Style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@mui/material/Button';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Typography from '@mui/material/Typography'
import { AiOutlineDashboard } from 'react-icons/ai';

const Home = () => {
    return (
        <Row>
            <Col md={2}>
                <nav className="sidebar sidebar-menu-collapsed">
                    <div className='logo-title'>
                            <Typography> <h4 className="crm-title-logo">HANBIRO</h4></Typography>
                            <Typography> <h5 className="crm-text">CRM</h5></Typography>
                        <a id='justify-icon'>
                            <DensitySmallIcon className="iconstyle-title"></DensitySmallIcon>
                        </a>
                    </div>
                    <div className='conten-menu'>
                        <ul>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle" size={30}></AiOutlineDashboard>
                                    <Typography className="expanded-element">Dashboard</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle" size={30}></AiOutlineDashboard>
                                    <Typography className="expanded-element">My Work</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle" size={30}></AiOutlineDashboard>
                                    <Typography className="expanded-element">Desk</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle" size={30}></AiOutlineDashboard>
                                    <Typography className="expanded-element">Customer</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle" size={30}></AiOutlineDashboard>
                                    <Typography className="expanded-element">Product</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle" size={30}></AiOutlineDashboard>
                                    <Typography className="expanded-element">Demo Page</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle" size={30}></AiOutlineDashboard>
                                    <Typography className="expanded-element">Favorites</Typography>
                                </a>
                            </li>
                            <li className='active' >
                                <a className='expandable' href="#">
                                    <AiOutlineDashboard className="iconstyle" size={30}></AiOutlineDashboard>
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