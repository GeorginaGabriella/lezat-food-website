"use client";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "Menu", id: "menu" },
  { name: "Tentang Kami", id: "tentang" },
  { name: "Kontak", id: "kontak" }
];

function NavbarComponent() {
  const [active, setActive] = useState("home");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 160) {
          current = item.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" expanded={expanded} onToggle={setExpanded} className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <span className="brand-icon">🍴</span>
          LEZAT<span className="brand-dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "page" : undefined}
                className={active === item.id ? "nav-custom-link active-menu" : "nav-custom-link"}
                onClick={() => {
                  setActive(item.id);
                  setExpanded(false);
                }}
              >
                {item.name}
              </Nav.Link>
            ))}
            <Nav.Link href="#menu" className="order-button" onClick={() => setExpanded(false)}>
              Order Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;