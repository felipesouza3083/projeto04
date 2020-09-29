import React from 'react';
import FormCadastroCompromisso from './FormCadastroCompromisso';
import * as services from '../../services/compromissoServices';

class CadastroCompromissoContainer extends React.Component {

    //construtor
    constructor(props) {
        super(props);

        //declarando o state do componente
        this.state = {
            mensagem: '',
            erroValidacao: ''
        };

        //registrando a função handleSubmit dentro do construtor
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //função para executar o SUBMIT do formulário
    handleSubmit = (values) => {

        this.setState({
            mensagem: 'Processando requisição, por favor aguarde...',
            erroValidacao: ''
        });

        services.post(values)
            .then(
                data => {
                    this.setState({
                        mensagem: data
                    });
                }
            )
            .catch(
                e => {
                    var error = e.response;

                    switch (error.status) {
                        case 400:
                            this.setState({
                                mensagem: '',
                                erroValidacao: 'Ocorreram erros de validação.'
                            });
                            break;
                        case 401:
                            this.setState({
                                mensagem: '',
                                erroValidacao: 'Não autorizado'
                            });
                            break;
                        default:
                            console.log(error);
                            break;
                    }
                }
            );
    }

    render() {
        return (
            <div>
                <h1 className="h3 mb-2 text-gray-800">Cadastro de Compromissos</h1>
                <p className="mb-4">
                    Preencha o formulário abaixo para cadastrar compromissos em sua agenda.
                </p>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Formulário de Cadastro</h6>
                    </div>
                    <div className="card-body">

                        <div className="mt-2 mb-2">
                            <h5><strong>{this.state.mensagem}</strong></h5>
                        </div>

                        <div className="mt-2 mb-2 text-danger">
                            <h5><strong>{this.state.erroValidacao}</strong></h5>
                        </div>

                        <FormCadastroCompromisso
                            onSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastroCompromissoContainer;