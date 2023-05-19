import React, {Component} from "react";

class CadastroAluno extends Component{

    //Render
    render(){
        return(
            <div className="container">
                <form className="form form-control">
                    <div>
                        <label><h3> Cadastro de Aluno</h3></label>
                        <br />
                        <input type="text" className="form-control m-1" name="nome" placeholder="Inform o Nome do aluno" />
                        <input type="number" className="form-control m-1" name="nota01" placeholder="Informe a Nota01"/>
                        <input type="number" className="form-control m-1" name="nota02" placeholder="Informe a Nota02"/>
                        <input type="submit" className="btn btn-success m-2" value="Cadastrar" />
                    </div>
                </form>
            </div>
        )
    }

}

export default CadastroAluno;