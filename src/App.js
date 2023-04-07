import { useState } from "react";
import Main from "./pages/main";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Navbar bg="dark">
        <Container style={{ background: "white" }}>
          <Navbar.Brand style={{ textAlign: "left" }}>
            <img src={require("./img/logo.png")} height="50px" />
            <Navbar.Text>AI QUE FOME DELIVERY</Navbar.Text>
          </Navbar.Brand>
          {isLogged && (
            <Nav className="justify-content-end">
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      <div className="page-content" />
      <Main setIsLogged={setIsLogged} />
    </>
  );
}

export default App;
