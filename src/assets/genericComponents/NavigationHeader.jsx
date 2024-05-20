/* eslint-disable no-nested-ternary */
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { PATH } from "../../config";
import IMAGES from "../images";

export default function NavigationHeader() {
  const location = useLocation();

  const pathCheck = location.pathname;
  return (
    <Navbar expand="lg" fixed="top" className="modify-navbar">
      <Container>
        <Navbar.Brand href={PATH.HOME}>
          <img
            src={IMAGES.LEGAL_SMART_SM_LOGO}
            className="img-fluid lg-screen-logo"
            alt="header-logo"
            loading="lazy"
          />
          <img
            src={IMAGES.LEGAL_SMART_LOGO}
            className="img-fluid sm-screen-logo"
            alt="header-logo"
            loading="lazy"
          />
        </Navbar.Brand>
        <Navbar.Text className="sm-screen-logo">
          {pathCheck === PATH.HOME
            ? "Home"
            : pathCheck === PATH.PRICING_PLAN
            ? "Pricing"
            : pathCheck === PATH.FAQS
            ? "FAQs"
            : ""}
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              href={PATH.HOME}
              className="cool-link"
              active={pathCheck === PATH.HOME}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#" className="cool-link">
              Chat.Ai
            </Nav.Link>
            <Nav.Link
              href={PATH.PRICING_PLAN}
              className="cool-link"
              active={pathCheck === PATH.PRICING_PLAN}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              href={PATH.FAQS}
              className="cool-link"
              active={pathCheck === PATH.FAQS}
            >
              FAQs
            </Nav.Link>
            <Nav.Link href={PATH.LOGIN_IN} className="cool-link login-btn">
              Log in
            </Nav.Link>
            <Nav.Link href={PATH.CREATE_ACCOUNT} className="create-account-btn">
              Create Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
