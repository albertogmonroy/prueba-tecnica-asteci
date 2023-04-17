import { axiosConfig } from "../config/axiosConfig";

export const getDataClimaService = async () => {
  let url = "condiciones-atmosfericas";
  return await axiosConfig.get(url);
};
export const getInforCLimaSelectedService = async (id) => {
  let url = `condiciones-atmosfericas?_id=${id}`;
  return await axiosConfig.get(url);
};
