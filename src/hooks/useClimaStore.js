import { useDispatch, useSelector } from "react-redux";
import {
  getDataClimaService,
  getInforCLimaSelectedService,
} from "../services/climaService";
import { onLoadDataClima, onLoadInfoCLima, onSelectClima } from "../slice/Clima/climaSlice";
import moment from "moment/moment";

export const useClimaStore = () => {
  const dispatch = useDispatch();
  const { dataClima, climaSelected, infoClima } = useSelector((state) => state.clima);
  /* Función para consumir la API */
  const startGetDataClima = () => {
    getDataClimaService()
      .then(({ data }) => {
        const dataFilter = data.results.map((cli) => {
          return {
            ...cli,
            lastreporttime: moment(cli.lastreporttime).format("YYYY/MM/DD"),
            lastReport: moment(cli.lastreporttime).format(
              "YYYY/MM/DD HH:mm:ss"
            ),
            llueve:
              cli.probabilityofprecip > 60 || cli.relativehumidity > 50
                ? "s"
                : "n",
          };
        });
        dispatch(onLoadDataClima(dataFilter));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const startGetInforSelected = (id) => {
    getInforCLimaSelectedService(id)
      .then(({ data }) => {
        const dataFilter = data.results.map((cli) => {
          return {
            ...cli,
            lastreporttime: moment(cli.lastreporttime).format("YYYY/MM/DD"),
            lastReport: moment(cli.lastreporttime).format(
              "YYYY/MM/DD HH:mm:ss"
            ),
            llueve:
              cli.probabilityofprecip > 60 || cli.relativehumidity > 50
                ? "s"
                : "n",
          };
        });
        dispatch(onLoadInfoCLima(dataFilter[0]));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  /* Función para guardar en un reducer el registro seleccionado */
  const setClimaSelect = (data) => {
    dispatch(onSelectClima(data));
  };
  return {
    /* Propiedades */
    dataClima,
    climaSelected,
    infoClima,
    /* Métodos */
    startGetDataClima,
    setClimaSelect,
    startGetInforSelected,
  };
};
