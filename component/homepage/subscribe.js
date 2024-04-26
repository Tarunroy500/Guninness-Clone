import React from 'react';
import { Row, Col, Button } from 'antd';
import Image from 'next/image';
import SubscribeImage from '../../public/assests/homepage/subscribe.avif';

const Subscribe = () => {
    return (
        <Row className='homepage-subscribe w-100 margin-b160'>
            <Col lg={24} className='content-holder p15-left' >
                <p className='p-content' >SUBSCRIBE</p>
                <div>
                    <p className='p-content'>
                        KEEP UPDATED WITH ALL THINGS GUINNESS
                    </p>
                </div>
                <Button className='find-out-btn'>
                    SIGN UP
                </Button>
            </Col>
            <Col lg={24} className='image-holder '>
                <Image
                    src={SubscribeImage}
                    alt='subscribe-image'
                />
            </Col>


        </Row>
      
    )
}

export default Subscribe;