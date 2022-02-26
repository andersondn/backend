import { NextFunction, Request, Response } from 'express';
import AppError from '../../../../helpers/AppError';

type ConfigAppError = {
    defaultMessage?: 'Internal Error' | string;
    defaultStatusError?: number;
};

 const appErrorMiddleware = ({
  defaultMessage,
  defaultStatusError,
}: ConfigAppError): any => {
  return (
    error: any,
    _: Request,
    response: Response,
    next: NextFunction
  ): void | Response<any, Record<string, any>> => {
    console.error(error);
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        error: true,
        message: error.message,
      });
    }

    return response.status(defaultStatusError || 500).json({
      message: defaultMessage || "Internal Error",
      error: true,
    });
  };
};

export { appErrorMiddleware };