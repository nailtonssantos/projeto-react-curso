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
      situacao: '',
      totalAprovados : 0,
      totalReprovados : 0,
      btnCadastrar: true,
      vetor   : []
    }
  }

  //Função para pegar dados ao Digitar (onChange)
  aoDigitar = (campo) => {
      this.setState({[campo.target.name] : campo.target.value})
  }

  //Função de clique no botão (onSubmit)
  aoCadastrar = (botaoCadastrar) => {

      botaoCadastrar.preventDefault()
      var quantidadeAprovados = this.state.totalAprovados
      var quantidadeReprovados = this.state.totalReprovados
      
      var copiaVetor = [...this.state.vetor]
      var calculoMedia = ((Number(this.state.nota01) + Number(this.state.nota02)) / 2)
      var copiaSituacao
      
      if (calculoMedia >= 7){
        copiaSituacao =  'Aprovado'
        quantidadeAprovados++
      } else {
        copiaSituacao = 'Reprovado'
        quantidadeReprovados++
      }

      copiaVetor.push({
        'nome'    : this.state.nome,
        'nota01'  : this.state.nota01,
        'nota02'  : this.state.nota02,
        'media'   : calculoMedia,
        'situacao': copiaSituacao,
        'totalAprovados' : quantidadeAprovados,
        'totalReprovados' : quantidadeReprovados
      })

      this.setState({vetor: copiaVetor})

      this.setState({
        nome    : '',
        nota01  : '',
        nota02  : '',
        media   : '',
        situacao  : '',
        totalAprovados: quantidadeAprovados,
        totalReprovados: quantidadeReprovados
      })
  }

  render() {
  //Retorno
    return (
      <div className='container'>
          <h1 className='m-3 align-items-center justify-content-center row'>Projeto Final</h1>
          <CadastroAluno
              campoSituacao={this.state.situacao}
              campoNome={this.state.nome}
              campoNota01={this.state.nota01}
              campoNota02={this.state.nota02}
              funcaoCadastrar={this.aoCadastrar}
              funcaoCampos={this.aoDigitar}/>
          <Tabela
              dados={this.state.vetor}
              aprovados={this.state.totalAprovados}
              reprovados={this.state.totalReprovados}
          />
      </div>
      
    )
  }

}

export default App;