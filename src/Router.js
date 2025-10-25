import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import DetallesEquipo from "./components/DetallesEquipo";
import JugadoresEquipo from "./components/JugadoresEquipo";
import DetallesJugador from "./components/DetallesJugador";
import Apuestas from "./components/Apuestas";
import CrearApuesta from "./components/CrearApuesta";

export default class Router extends Component {
  render() {
    function DetallesEquipoElement() {
      var { idEquipo } = useParams();

      return <DetallesEquipo idEquipo={idEquipo} />;
    }

    function JugadoresEquipoElement() {
      var { idEquipo } = useParams();

      return <JugadoresEquipo idEquipo={idEquipo} />;
    }

    function DetallesJugadorElement() {
      var { idEquipo, idJugador } = useParams();

      return <DetallesJugador idEquipo={idEquipo} idJugador={idJugador} />;
    }

    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/detallesEquipo/:idEquipo"
            element={<DetallesEquipoElement />}
          />
          <Route
            path="/jugadoresEquipo/:idEquipo"
            element={<JugadoresEquipoElement />}
          />
          <Route
            path="/detallesJugador/:idEquipo/:idJugador"
            element={<DetallesJugadorElement />}
          />
          <Route path="/apuestas" element={<Apuestas />} />
          <Route path="/crearApuesta" element={<CrearApuesta />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
