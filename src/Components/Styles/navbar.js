import React from "react";
// import { useLocation } from "react-router-dom";

// Basic components of the Navbar to navigate the site. The format will remain simple for now with hopes to add sign in/out functionality soon with functionality to save a team and return to see them.

function Nav() {
    // This allows the component to check the route any time the user uses a link to navigate.
    // const location = useLocation();

    return (
        <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>
    );
}

export default Nav;