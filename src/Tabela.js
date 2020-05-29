import React, { Component } from 'react';

// subcomponentes
const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}
// recebe o props, ou seja, o "autores = { autores }"
const TableBody = (props) => {
    const linhas = props.autores.map((linha, index) => {
        // para cada elemento ele retorna uma linha
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = { () => { props.removeAutor(index) }}>Remover</button></td>
            </tr>
        );
    })
    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {

    render() {
        // recebendo os dados
        const { autores, removeAutor } = this.props;
        return (
            <table>
                <TableHead />
                {/* passando params */}
                <TableBody autores= {autores } removeAutor = { removeAutor } />
            </table>
        );
    }
}

export default Tabela;