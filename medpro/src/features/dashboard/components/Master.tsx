import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/dashboard.css";
import BrandLogo from "./BrandLogo";
import NavbarMenu from "./NavbarMenu";
import SidebarMenu from "./SidebarMenu";
import ChatHistory from "../../chats/components/ChatHistory";

const Master = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
