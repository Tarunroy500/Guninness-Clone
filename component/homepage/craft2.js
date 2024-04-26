import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import OurCraft2 from '../../public/assests/homepage/our-craft2.avif';

const HomePageCraft2 = () => {
    return (
        <Row className='homepage-craft-main'>
            <Col span={24} className='p-content p15-left'>OUR CRAFT</Col>
            <Col className='image-holder' lg={24} >
                <Image
                    src={OurCraft2}
                    alt='our-craft-img-1'
                />
            </Col>
            <Col className='content-holder d-flex' lg={24} >
                <Row className='d-flex space-around w-100 content-row'>
                    <Col lg={14}>
                        <h1 className='heading' >&nbsp; &nbsp;REGERATIVE <br />FARMING</h1>
                    </Col>

                    <Col lg={7} className='para d-flex justify-center flex-column'>
                        <div className='content'>
                            <p className='p-content'>
                            We are working alongside Irish barley farmers to support them on the transition towards regenerative agriculture. We aim to scale the adoption of practices that employ nature-based solutions to support the production of low carbon barley and improve shared natural resources such as biodiversity and water under a regeneratively-grown model.
                            </p>
                            <Button className='find-out-btn' >
                                Find out more <RightOutlined />
                            </Button>
                        </div>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

export default HomePageCraft2;