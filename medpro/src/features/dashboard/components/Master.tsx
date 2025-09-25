import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/dashboard.css";
import BrandLogo from "./BrandLogo";
import NavbarMenu from "./NavbarMenu";

const Master = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>
            <BrandLogo />
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <NavbarMenu />
          </Col>
        </Row>
        <Row>{/* Sidebar component goes here */}</Row>
      </Container>
    </React.Fragment>
  );
};

export default Master;
