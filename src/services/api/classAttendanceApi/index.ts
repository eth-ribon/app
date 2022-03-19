import { AxiosResponse } from "axios";
import { apiPost } from "..";

const classAttendanceApi = {
  postClassAttendance: (
    classId: number,
    studentIds: number[],
  ): Promise<AxiosResponse<any>> =>
    apiPost("attendances", { attendance: { courseId: classId, studentIds } }),
};

export default classAttendanceApi;
