export class ApiError extends Error {
  statuscode: number
  success: boolean
  errors?: any[]

  constructor(statuscode: number, message: string, errors?: any[]) {
    super(message)
    this.statuscode = statuscode;
    this.success = statuscode < 400;
    if (errors) {
      this.errors = errors
    }
    Error.captureStackTrace(this, this.constructor)
  }
}