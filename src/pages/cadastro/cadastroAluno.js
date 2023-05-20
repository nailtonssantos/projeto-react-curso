import React, {Component} from "react";

class CadastroAluno extends Component{

    //Render
    render(){
        return(
            <div className="container">
                <form className="form form-control">
                    
                        <label><h3> Cadastro de Aluno</h3></label>
                        <br />
                        <input type="text" className="form-control m-1" name="nome" value={this.props
                        .campoNome} placeholder="Inform o Nome do aluno" onChange={this.props.funcaoCampos} />
                        <input type="number" className="form-control m-1" name="nota01" value={this.props.campoNota01} placeholder="Informe a Nota01" onChange={this.props.funcaoCampos}/>
                        <input type="number" className="form-control m-1" name="nota02" value={this.props.campoNota02} placeholder="Informe a Nota02" onChange={this.props.funcaoCampos}/>

                    
                        <input type="submit" className="btn btn-success mt-2 mx-1" value="Cadastrar" onClick={this.props.funcaoCadastrar}/>
                        <input type="submit" className="btn btn-warning mt-2 mx-1" value="Alterar" />
                        <input type="submit" className="btn btn-danger mt-2 mx-1" value="Excluir" />
                        <input type="submit" className="btn btn-secondary mt-2 mx-1" value="Cancelar" />
                        
                        
                    

                </form>
            </div>
        )
    }

}

export default CadastroAluno;