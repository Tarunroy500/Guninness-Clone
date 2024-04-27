"use client";
import { React, useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import Experience from "../../public/assests/homepage/experience.avif";

const HomepageExperience = () => {
  const [isResponsiveScreen, setIsResponsiveScreen] = useState(
    window.innerWidth < 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsResponsiveScreen(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsResponsiveScreen(true);
    }
  }, []);

  return (
    <Row className="experience-main-container guiness-main-container nargin-b160">
      {isResponsiveScreen && (
        <>
          <Row>
            <Col className="padding-15">
              <p className="p-content">EXPERIENCE</p>
            </Col>
          </Row>
          <Col xs={24} sm={12} lg={12} className="image-holder">
            <Image src={Experience} alt="experience-img" />
          </Col>
        </>
      )}

      <Col xs={24} sm={12} lg={12} className="content">
        {!isResponsiveScreen && <p className="p-content">EXPERIENCE</p>}
        <h1 className="heading">&nbsp; GUINNESS AT HOME</h1>
        <p className="p-content">
          Discover the magic of Guinness at home. From mastering your pour, to
          using new innovations like Guinness Nitrosurge and MicroDraught to
          emulate that perfect pint of Guinness Draught in the comfort of your
          own home, we've got you covered
        </p>
        <Button className="find-out-btn d-flex justify-center align-center cursor-pointer ant-btn">
          Find out More <RightOutlined />
        </Button>
      </Col>

      {!isResponsiveScreen && (
        <Col lg={12} className="image-holder">
          <Image src={Experience} alt="experience-img" />
        </Col>
      )}
    </Row>
  );
};

export default HomepageExperience;
