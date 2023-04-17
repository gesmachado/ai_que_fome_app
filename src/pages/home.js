import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Home() {

  const ListItem = (name, image) => {
    var quantidade = 0

    const buttonClick = (buttonType) => {
      if (buttonType === 'minus' & quantidade > 0) {
        quantidade--
      }
      if (buttonType === 'plus' & quantidade < 10) {
        quantidade++
      }
      document.getElementById(`input-${name}`).value = quantidade
    }


    return (
      <Container>
        <img
          src={require(`../img/${image}.png`)}
          height="100px"
          width="150px"
          className="img-thumbnail"
        />

        <Form.Group className='mb3'>
          <Form.Label>{name}</Form.Label>
          <div className="input-group">
            <span className="input-group-btn">
              <Button
                type="button"
                variant="dark"
                className="btn btn-primary"
                onClick={() => buttonClick("minus")}
              >
                -
              </Button>
            </span>
            <Form.Control
              type="text"
              name={`${name}`}
              className="form-control input-number"
              defaultValue={quantidade}
              min="0"
              max="10"
              id={`input-${name}`}
            />
            <span className="input-group-btn">
              <Button
                type="button"
                variant="dark"
                className="btn btn-primary"
                onClick={() => buttonClick("plus")}
              >
                +
              </Button>
            </span>
          </div>
        </Form.Group>
      </Container>
    );
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    let message = '';
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
      if (parseInt(input.value) > 0) {
        message += `${input.name}: ${input.value}\n`;
      }
    });
    if (message) {
      window.alert(`O seu pedido é:\n${message}`);
    }
  }
  
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>
            <header>
              <h1 style={{ textAlign: "center" }}>Faça Seu Pedido</h1>
            </header>
          </Col>
        </Row>
        <Form onSubmit={HandleSubmit}>
        <header>
            <h2 style={{ textAlign: "center" }}>Salgados</h2>
          </header>
          {ListItem("Hambúrguer", "hamburguer")}
          {ListItem("Cachorro-quente", "cachorroQuente")}
          {ListItem("Pizza", "pizza")}
          <header style={{marginTop: '50px'}}>
            <h2 style={{ textAlign: "center" }}>Doces</h2>
          </header>
          {ListItem("Torta", "torta")}
          {ListItem("Brigadeiros", "brigadeiro")}
          <Button variant="dark" type="submit" style={{ margin: "30px" }}>
            Pedir
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Home;
