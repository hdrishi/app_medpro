import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Dashboard.css";
import BrandLogo from "./BrandLogo";
import NavbarMenu from "./NavbarMenu";
import SidebarMenu from "./SidebarMenu";

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
        <Row>
          <SidebarMenu />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Master;
