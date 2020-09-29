import React from 'react';
import FormConsultaCompromisso from './FormConsultaCompromisso';
import GridCompromissos from './GridCompromissos';
import * as actions from '../../actions/compromissoActions';
import { connect } from 'react-redux';

class ConsultaCompromissoContainer extends React.Component {
    handleSubmit = (values) => {
        this.props.dispatch({
            type: actions.CONSULTAR_COMPROMISSOS,
            data: values
        }
        )
    };

    render() {
        return (
            <div>
                <h1 className="h3 mb-2 text-gray-800">Consulta de Compromissos</h1>
                <p className="mb-4">
                    Pesquise abaixo os compromissos em sua agenda
                </p>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Formulário de Pesquisa</h6>
                    </div>
                    <div className="card-body">
                        <FormConsultaCompromisso
                            onSubmit={this.handleSubmit}
                        />
                        <div className="table-responsive mt-2">
                            <GridCompromissos />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ConsultaCompromissoContainer)