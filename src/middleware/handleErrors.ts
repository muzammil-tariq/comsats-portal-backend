import { GeneralError } from "../utils/errors";

export const handleErrors = (err:any, req:any, res:any, next:any) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message
  });
}


// module.exports = handleErrors;