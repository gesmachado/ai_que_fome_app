import Main from './pages/main';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <Navbar  bg="dark">
        <Container style={{background:"white"}}>  
          <Navbar.Brand href="/login" style={{textAlign:"left"}}>
            <img
              src={require("./img/logo.png")}
              height="50px"
            />
            <> </>
            <>AI QUE FOME DELIVERY</>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='page-content'/>
      <Main/>
    </>
  );
}

export default App;
