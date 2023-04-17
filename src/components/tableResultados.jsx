import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useClimaStore } from "../hooks/useClimaStore";
import { LluviaTemplate } from "./lluviaTemplate";
import { ModalInfoCLima } from "./modalInfoCLima";

export const TableResultados = () => {
  const {
    dataClima,
    climaSelected,
    startGetDataClima,
    setClimaSelect,
    startGetInforSelected,
  } = useClimaStore();
  useEffect(() => {
    startGetDataClima();
    //eslint-disable-next-line
  }, []);

  const handleSelect = (data) => {
    setClimaSelect(data);
    startGetInforSelected(data?._id);
  };

  return (
    <>
      <DataTable
        value={dataClima || []}
        header="Tabla de Resultados"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 15, 20]}
        selectionMode="single"
        selection={climaSelected}
        onSelectionChange={(e) => handleSelect(e.value)}
      >
        <Column header="ID" field="_id" />
        <Column header="City ID" field="cityid" />
        <Column header="Name" field="name" />
        <Column header="State" field="state" />
        <Column
          header="Probability of Precipitacion"
          field="probabilityofprecip"
        />
        <Column header="Relative Humidity" field="relativehumidity" />
        <Column header="Last Report Time" field="lastreporttime" />
        <Column
          header="Llueve"
          field="llueve"
          body={(rowData) => <LluviaTemplate rowData={rowData} />}
        />
      </DataTable>
      <ModalInfoCLima />
    </>
  );
};
