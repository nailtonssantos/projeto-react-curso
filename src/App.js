import React, { Component } from 'react'

//Importar componentes
import CadastroAluno from './pages/cadastro/CadastroAluno'
import Tabela from './pages/tabela/Tabela'

class App extends Component {

  //Construtor
  constructor(props){
    super(props)

    this.state = {
      nome    : '',
      nota01  : '',
      nota02  : '',
      media   : '',
      vetor   : []
    }
  }

  //Função para pegar dados ao Digitar (onChange)
  aoDigitar = (campo) => {
      this.setState({[campo.target.name] : campo.target.value})
  }

  //Função de clique no botão (onSubmit)
  aoClicar = (botao) => {
      botao.preventDefault()
      
      var copiaVetor = [...this.state.vetor]
      var calculoMedia = ((Number(this.state.nota01) + Number(this.state.nota02)) / 2)

      copiaVetor.push({
        'nome'    : this.state.nome,
        'nota01'  : this.state.nota01,
        'nota02'  : this.state.nota02,
        'media'   : calculoMedia
      })

      this.setState({vetor: copiaVetor})

      this.setState({
        nome    : '',
        nota01  : '',
        nota02  : ''
      })
  }

  render() {
  //Retorno
    return (
      <div className='container'>
          <h1 className='m-3 align-items-center justify-content-center row'>Projeto Final</h1>
          <CadastroAluno campoNome={this.state.nome} campoNota01={this.state.nota01} campoNota02={this.state.nota02} funcaoBotao={this.aoClicar} funcaoCampos={this.aoDigitar}/>
          <Tabela dados={this.state.vetor}/>
      </div>
      
    )
  }

}

export default App;