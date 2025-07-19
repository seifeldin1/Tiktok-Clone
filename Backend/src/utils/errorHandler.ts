import { Response } from "express";

export const ErrorResponse = (res: Response, statusCode: number, message: string , extra: object = {}) => {
    return res.status(statusCode).json({
        success: false,
        message,
        ...extra
    })
}



//400 code
export const BadRequest = (res: Response, message: string) => ErrorResponse(res, 400, message)
export const Unauthorized = (res: Response, message: string) => ErrorResponse(res, 401, message)
export const PaymentRequired = (res: Response, message: string) => ErrorResponse(res, 402, message)
export const Forbidden = (res: Response, message: string) => ErrorResponse(res, 403, message)
export const NotFound = (res: Response, message: string) => ErrorResponse(res, 404, message)
export const NotAcceptable = (res: Response, message: string) => ErrorResponse(res, 406, message)
export const Conflict = (res: Response, message: string) => ErrorResponse(res, 409, message)
export const UnprocessableEntity = (res: Response, message: string) => ErrorResponse(res, 422, message)
export const Locked = (res: Response, message: string) => ErrorResponse(res, 423, message)
export const FailedDependency = (res: Response, message: string) => ErrorResponse(res, 424, message)
export const TooManyRequests = (res: Response, message: string) => ErrorResponse(res, 429, message)


//500 code
export const InternalServerError = (res: Response, message: string) => ErrorResponse(res, 500, message)
export const NotImplemented = (res: Response, message: string) => ErrorResponse(res, 501, message)
export const BadGateway = (res: Response, message: string) => ErrorResponse(res, 502, message)
export const ServiceUnavailable = (res: Response, message: string) => ErrorResponse(res, 503, message)
export const GatewayTimeout = (res: Response, message: string) => ErrorResponse(res, 504, message)