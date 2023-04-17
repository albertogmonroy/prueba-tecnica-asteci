import React from "react";
import { Dialog } from "primereact/dialog";
import { useClimaStore } from "../hooks/useClimaStore";

export const ModalInfoCLima = () => {
  const { infoClima, climaSelected, setClimaSelect } = useClimaStore();
  const handleClose = () => {
    setClimaSelect(null);
  };
  return (
    <Dialog
      visible={climaSelected}
      onHide={handleClose}
      header="Datos del registro Seleccionado"
      style={{ width: "50vw" }}
    >
      <div className="col-12 grid p-fluid">
        <div className="col-12">
          <label>
            Lugar:
            <strong>{`${infoClima?.name} - ${infoClima?.state}`}</strong>
          </label>
        </div>
        <div className="col-12">
          <label>
            Húmedad:
            <strong>{`${infoClima?.relativehumidity}%`}</strong>
          </label>
        </div>
        <div className="col-12">
          <label>
            Temperatura:
            <strong>{`${infoClima?.tempc}°C`}</strong>
          </label>
        </div>
        <div className="col-12">
          <label>
            Pronóstico:
            <strong>{`${infoClima?.skydescriptionlong}`}</strong>
          </label>
        </div>
        <div className="col-12">
          <label>
            Última actualización:
            <strong>{`${infoClima?.lastReport}`}</strong>
          </label>
        </div>
      </div>
    </Dialog>
  );
};
