import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';

// componente
class App extends Component {

  // sempre que alterado é redezenhado o comp
  state = {
    autores: [
      {
        nome: "Herl",
        livro: "react",
        preco: "100"
      },
      {
        nome: "Maria",
        livro: "java",
        preco: "108"
      },
      {
        nome: "João",
        livro: "php",
        preco: "170"
      },
      {
        nome: "Vanila",
        livro: "js",
        preco: "80"
      },
      {
        nome: "Juliano",
        livro: "ruby",
        preco: "10"
      },
    ]
  }

  removeAutor = (index) => {
    // index é o button clicado

    const { autores } = this.state;
    // para fazer alterações no state
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          console.log(index, posAtual)
          // retorna todas as posições exceto quando posAtul === index
          return posAtual !== index;
        })
      }
    )
  }

  escutadorDeSubmit = (autor) => {
    this.setState({ autores:  [...this.state.autores, autor] });
  }

  // para passar as infos entre comps utiliza-se: props
  // autores = {autores} 
  render() {
   
    return (
      // quando tiramos a  <div className="App" > tomamos um erro
      // e, para retornar as tags, devemos utilizar o Fragment
      <Fragment>
        <Tabela autores={this.state.autores} removeAutor = {this.removeAutor} />
        <Formulario escutadorDeSubmit = {this.escutadorDeSubmit} />
        </Fragment>
    );
  }
}

export default App;
