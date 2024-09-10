import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Informacion.css";

const Informacion = () => {
  return (
    <>
      <Navbar />
      <div className="cuerpo">
      <h1 className="titulo_info">BIENVENIDOS</h1>
      <p className="parrafo_info">
        esta pagina se dedica a ofrecer servicios de diseño dentro de los cuales
        estan animaciones, renderizados, logos vectoriales entre otros.
        <br />
        se manejan diferentes tipos de arte ademas tambien se da servicio de
        sprites, uvMaps, efectos, y efectos de sonido c:.
      </p>
      </div>
    </>
  );
};

export default Informacion;
