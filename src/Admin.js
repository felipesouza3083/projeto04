import React from 'react';
import { Route, NavLink, HashRouter, Redirect } from 'react-router-dom';

import CadastroCompromissoContainer from './components/agenda/CadastroCompromissoContainer';
import ConsultaCompromissoContainer from './components/agenda/ConsultaCompromissoContainer';

import * as auth from './auth/authServices';

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailUsuario: ''
        };

        this.obterUsuarioAutenticado = this.obterUsuarioAutenticado.bind(this);
    };

    obterUsuarioAutenticado() {
        this.setState({
            emailUsuario: auth.getUserEmail()
        })
    }

    componentDidMount() {
        this.obterUsuarioAutenticado();
    }

    logout() {
        auth.signOutCredentials();
        auth.redirectToLoginPage();
    }

    render() {
        return auth.isAuthenticated() ? (

            <HashRouter>

                <div id="wrapper">
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Agenda de Compromissos</div>
                        </a>
                        <hr className="sidebar-divider my-0" />
                        <li className="nav-item">
                            <a className="nav-link" href="/admin">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Página inicial</span></a>
                        </li>
                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            Menu de Opções
                    </div>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/admin#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Gerenciar Compromissos</span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <NavLink to="/cadastro-compromisso" className="collapse-item">
                                        Cadastrar Compromissos
                                </NavLink>
                                    <NavLink to="/consulta-compromisso" className="collapse-item">
                                        Consultar Compromissos
                                </NavLink>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="/admin#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small"><strong>Usuário Autenticado:</strong><br />{this.state.emailUsuario}</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="/admin#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Minha Conta
                                        </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/admin#"
                                                onClick={() => this.logout()}>
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Sair do Sistema
                                        </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div className="container-fluid">

                                <Route path="/cadastro-compromisso"
                                    component={CadastroCompromissoContainer} />

                                <Route path="/consulta-compromisso"
                                    component={ConsultaCompromissoContainer} />

                            </div>
                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; COTI Informática 2020</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </HashRouter>
        ) : (
                <Redirect to={{ pathname: auth.redirectToLoginPage() }} />
            )
    }
}

export default Admin;