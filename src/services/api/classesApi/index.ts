import { AxiosResponse } from "axios";
import { apiGet, apiPost } from "..";

const classesApi = {
  getClasses: (): Promise<AxiosResponse<any>> => apiGet("courses"),
  postClasses: (
    name: string,
    studentIds: number[],
  ): Promise<AxiosResponse<any>> =>
    apiPost("courses", { course: { name, studentIds } }),
};

export default classesApi;
