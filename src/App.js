import React, { Component } from 'react';

//Importar componentes
import CadastroAluno from './pages/cadastro/cadastroAluno';

class App extends Component {

  render() {
  //Retorno
    return (
      <div className='container'>
          <h1 className='m-3 align-items-center justify-content-center row'>Projeto Final</h1>
          <CadastroAluno />
      </div>
      
    )
  }

}

export default App;