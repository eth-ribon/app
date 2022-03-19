import { AxiosResponse } from "axios";
import { apiGet } from "..";

const classesApi = {
  getClasses: (): Promise<AxiosResponse<any>> => apiGet("courses"),
};

export default classesApi;
