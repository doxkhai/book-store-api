import { Response, NextFunction, Request } from "express";
import AuthService from "@modules/auth/service";
import catchAsync from "@wrappers/catchAsync";
import { set as setContext } from "express-http-context";

const verifyTokens = catchAsync(
  async (req: Request, _: Response, next: NextFunction) => {
    const { accessToken } = req.cookies;

    const accessValid: any = AuthService.verifyJWT(accessToken);
    if (!accessValid) return next(new Error("401"));

    setContext("user", accessValid);
    return next();
  }
);

export default verifyTokens;
