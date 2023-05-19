//Importar Módulos
import React, {Component} from 'react';

//Componente
class Tabela extends Component{

    //Render
    render(){
        return(
            <div className="container mt-5 text-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nota 01</th>
                            <th>Nota 02</th>
                            <th>Média</th>
                            <th>Situação</th>
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
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div>
                    {this.props.dados.map((elemento, indice) => {
                        return(
                            <div className='d-flex mt-5'>
                                <h3 className='bg-success p-2 m-2'>Aprovados: {elemento.totalAprovados}</h3>
                                <h3 className='bg-danger p-2 m-2'>Reprovados: {elemento.totalReprovados}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Tabela;