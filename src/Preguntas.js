import React, {Component }from 'react';
import Data from './components/data.json'

class Preguntas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrarPregunta: 1,
            respuesta: '',
            historial: []  
        };
      }

    render()   {
      return (
      <div className="App">
        {
            Data.map ( (data, index) => {
                if(data.id === this.state.mostrarPregunta + this.state.respuesta){
                    return <div class="layout">
                        <span class="historia">{data.historia} {this.state.mostrarPregunta + this.state.respuesta}</span>
                        <div class="opciones">
                            <div class="opcion opcion-a">
                                <button onClick={() => this.setState({ 
                                    mostrarPregunta: this.state.mostrarPregunta+1, 
                                    respuesta: 'a',
                                    historial: [...this.state.historial, "a"]})} 
                                    class="botones">A </button>
                                {data.opciones.a} 
                            </div>
                            <div class="opcion opcion-b">
                                <button onClick={() => this.setState({
                                     mostrarPregunta: this.state.mostrarPregunta+1, 
                                     respuesta: 'b',
                                     historial: [...this.state.historial, "b"]})} 
                                    class="botones">B</button>
                                {data.opciones.b}
                            </div>
                        </div>
                        <div class="recordatorio"> 
                            <h4>
                                Selección anterior: {this.state.respuesta}
                            </h4>
                            Historial de opciones elegidas
                            {this.state.historial.map( historias => <li>{historias}</li>)}
                            
                        </div>
                    </div>
                } else if (this.state.mostrarPregunta === 6) {
                    alert("Fin.");
                    this.state.mostrarPregunta = 5;
                }
            })
        }
          
      </div>
    )};
  }

export default Preguntas;