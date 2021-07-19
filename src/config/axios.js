import axios from "axios";

const clienteAxios = axios.create({ baseURL: "https://fakerapi.it/api/v1/" });
export default clienteAxios;
