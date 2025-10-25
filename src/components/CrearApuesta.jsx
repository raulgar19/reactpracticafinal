import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CrearApuesta extends Component {
  url = Global.apiApuestas;
  cajaUsuario = React.createRef();
  cajaRM = React.createRef();
  cajaATM = React.createRef();
  cajaFecha = React.createRef();

  state = {
    status: false,
  };

  crearApuesta = (event) => {
    event.preventDefault();

    var request = "api/apuestas/";

    var apuesta = {
      idApuesta: 1,
      usuario: this.cajaUsuario.current.value,
      resultado:
        "RM: " +
        this.cajaRM.current.value +
        " ATM: " +
        this.cajaATM.current.value,
      fecha: this.cajaFecha.current.value,
    };

    axios.post(this.url + request, apuesta).then((response) => {
      console.log("Apuesta añadida");

      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.status === true && <Navigate to="/apuestas" />}
        <h1>Nueva Apuesta</h1>
        <form className="form">
          <label className="form-label">Usuario</label>
          <input className="form-control" type="text" ref={this.cajaUsuario} />
          <label className="form-label">Real Madrid</label>
          <input className="form-control" type="text" ref={this.cajaRM} />
          <label className="form-label">Atlético de Madrid</label>
          <input className="form-control" type="text" ref={this.cajaATM} />
          <label className="form-label">Fecha</label>
          <input className="form-control" type="date" ref={this.cajaFecha} />
          <br />
          <button className="btn btn-info" onClick={this.crearApuesta}>
            Crear Apuesta
          </button>
        </form>
      </div>
    );
  }
}
