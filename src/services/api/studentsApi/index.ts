import { AxiosResponse } from "axios";
import { apiGet } from "..";

const studentsApi = {
  getStudents: (): Promise<AxiosResponse<any>> => apiGet("students"),
};

export default studentsApi;
