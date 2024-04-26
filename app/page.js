import React from 'react';
import ReactPlayer from "react-player";
import { Row, Col } from 'antd';
import Image from 'next/image';
import Background from "../public/assests/homepage/background.jpeg"
import HomepageExperience from '../component/homepage/experience';
import HomePageCraft from '../component/homepage/craft';
import HomePageCraft2 from '../component/homepage/craft2';
import Subscribe from '../component/homepage/subscribe';
import Footer from '../component/homepage/footer';
import Carousel from '../component/homepage/carousel';
import Nav from '../component/homepage/nav';
import Hero from '../component/homepage/hero';


const HomePage = () => {
    return (
        <>
                <Row>
                    <Nav/>
                    <Hero/>
                </Row>
        <div className='background-black d-flex justify-center' >
            <Row className='homepage-main-container '>
                <Carousel />    
                <HomepageExperience />
                <HomePageCraft/>
                <HomePageCraft2/>
                <Subscribe/>
            </Row>
        </div>
                <Row>
                <Footer/>
                </Row>
        </>
    )
}

export default HomePage;
