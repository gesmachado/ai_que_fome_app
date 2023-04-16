

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
      <div>
        <img src={require(`../img/${image}.png`)} height="100px" width="150px"/>
        <h4>{name}</h4>
        <div className="input-group">
          <span className="input-group-btn">
            <button type="button" className="btn btn-primary" onClick={() => buttonClick('minus')}>-</button>
          </span>
          <input type="text" name="quant[1]" className="form-control input-number" defaultValue={quantidade} min="0" max="10" id={`input-${name}`} />
          <span className="input-group-btn">
              <button type="button" className="btn btn-primary" onClick={() => buttonClick('plus')}>+</button>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Salgados</h1>
      {ListItem('Hambúrguer', 'hamburguer')}
      {ListItem('Cachorro-quente', 'cachorroQuente')}
      {ListItem('Pizza', 'pizza')}
      <h1>Doces</h1>
      {ListItem('Torta', 'torta')}
      {ListItem('Brigadeiros', 'brigadeiro')}
    </div>
  );
}

export default Home;
