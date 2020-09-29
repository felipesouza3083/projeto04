import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        consulta: state.compromissos.listagemDeCompromissos
    }
}

class GridCompromissos extends React.Component {
    render() {
        var self = this;
        return (
            <div>
                {
                    self.props.consulta.length > 0 ?
                        <table className="table table-bordered table-stripped table-hover">
                            <thead>
                                <tr>
                                    <th>Nome do Compromisso</th>
                                    <th>Data</th>
                                    <th>Hora</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    self.props.consulta.map(
                                        (item, i) => (
                                            <tr key={i}>
                                                <td>{item.nomeCompromisso}</td>
                                                <td>{item.dataCompromisso}</td>
                                                <td>{item.horaCompromisso}</td>
                                                <td>{item.descricao}</td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5">Quantidade de Compromissos: {self.props.consulta.length}</td>
                                </tr>
                            </tfoot>
                        </table> : <div>Não há registros</div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(GridCompromissos);