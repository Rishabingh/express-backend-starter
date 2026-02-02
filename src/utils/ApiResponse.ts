export class ApiResponse<T> {
  success: boolean;
  statuscode: number;
  message: string;
  data: T;

  constructor(statuscode: number, data: T, message: string="request fullfield") {
    this.statuscode = statuscode;
    this.data = data;
    this.message = message;
    this.success = statuscode < 400;
  }
}