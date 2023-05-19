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