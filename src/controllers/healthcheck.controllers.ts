import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";

export const healthCheckController = asyncWrapper(async (req, res) => {
  return res.status(200).json(new ApiResponse<{}>(200, {}, 'server is running'))
});