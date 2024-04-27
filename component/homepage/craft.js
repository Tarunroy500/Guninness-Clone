import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import OurCraft1 from '../../public/assests/homepage/our-craft1.avif'


const HomePageCraft = () => {
    return (
        <Row className='homepage-craft-main' >
            <Col span={24} className='p-content p15-left' > OUR CRAFT</Col>
            <Col className='image-holder' lg={24} >
                <Image className='image1'
                    src={OurCraft1}
                    alt='our-craft-img-1'
                />
            </Col>
            <Col className='content-holder d-flex' lg={24} >
                <Row className='d-flex space-between w-100 content-row'>
                    <Col lg={14}>
                        <h1 className='craft-heading'><span className='move-content'></span>THE STORY OF <br />GUINNESS</h1>
                    </Col>

                    <Col lg={7} className='para d-flex justify-center flex-column'>
                        <div className='content'>
                            <p className='p-content' >
                                From Arthur Guinness' legacy of philanthropy to how Guinness has been taking care of its people for over 200 years.
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

export default HomePageCraft;