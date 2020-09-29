import React from 'react';
import FormLogin from './components/usuarios/FormLogin';
import * as services from './services/loginServices';
import * as auth from './auth/authServices';

class Login extends React.Component {
    //construtor
    constructor(props) {
        super(props);

        //declarando o state do componente
        this.state = {
            mensagem: '',
            erroAcessoNegado: '',
            erroValidacao: ''
        };

        //registrando a função handleSubmit dentro do construtor
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //função para executar o SUBMIT do formulário
    handleSubmit = (values) => {

        this.setState({
            mensagem: 'Processando requisição, por favor aguarde...',
            erroAcessoNegado: '',
            erroValidacao: ''
        });

        services.post(values)
            .then(
                data => {
                    auth.signInCredentials(values.email, data);

                    auth.redirectToAdminPage();
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
                        case 403:
                            this.setState({
                                mensagem: '',
                                erroAcessoNegado: error.data
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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Acesso ao Sistema</h1>
                                                <hr />
                                            </div>
                                            <FormLogin onSubmit={this.handleSubmit} />
                                            <div className="mt-2">
                                                <h5><strong>{this.state.mensagem}</strong></h5>
                                            </div>
                                            <div className="mt-2 text-danger">
                                                <h5><strong>{this.state.erroAcessoNegado}</strong></h5>
                                            </div>
                                            <div className="mt-2 text-danger">
                                                <h5><strong>{this.state.erroValidacao}</strong></h5>
                                            </div>
                                            <hr />
                                            <div className="text-center">
                                                <a href="/register">Criar conta de usuário</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login