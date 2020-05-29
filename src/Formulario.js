import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {

        super(props);

        // state inicial
        this.setInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.setInicial;
    }
    escutadorDeInput = (event) => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        })
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.setInicial);
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                {/* não podemos user o "for" e sim o  htmlFor */}
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={nome} onChange={this.escutadorDeInput} />

                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value={livro} onChange={this.escutadorDeInput} />

                <label htmlFor="preco">Preco</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                    value={preco} onChange={this.escutadorDeInput} />

                <button onClick={this.submitFormulario} >Salvar</button>
            </form>
        )
    }
}

export default Formulario;