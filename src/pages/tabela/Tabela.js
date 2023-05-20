//Importar Módulos
import React, {Component} from 'react';

//Componente
class Tabela extends Component{

    //Render
    render(){
        return(
            <div className="container mt-3 text-center">
                <div>
                        <div className='mt-4'>
                            <div className='d-flex justify-content-center align-items-center mb-4'>
                            <h5 className='bg-success p-2 m-2 rounded '>Aprovados: {this.props.aprovados}</h5>
                            <h5 className='bg-danger p-2 m-2 rounded'>Reprovados: {this.props.reprovados}</h5>
                            </div>
                        </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nota 01</th>
                            <th>Nota 02</th>
                            <th>Média</th>
                            <th>Situação</th>
                            <th>Selecionar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.dados.map((elemento, indice) => {
                            return(
                                <tr key={indice}>
                                    <td>{elemento.nome}</td>
                                    <td>{elemento.nota01}</td>
                                    <td>{elemento.nota02}</td>
                                    <td>{elemento.media}</td>
                                    <td>{elemento.situacao}</td>
                                    <td></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Tabela;