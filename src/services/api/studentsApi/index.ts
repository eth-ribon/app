import { AxiosResponse } from "axios";
import { apiGet, apiPost } from "..";

const studentsApi = {
  getStudents: (): Promise<AxiosResponse<any>> => apiGet("students"),
  postStudents: (
    name: string,
    familyWalletAddress: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("students", {
      name,
      familyWalletAddress,
    }),
};

export default studentsApi;
