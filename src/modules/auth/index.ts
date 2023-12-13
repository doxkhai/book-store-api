import { NextFunction, Request, Response, Router } from "express";
import catchAsync from "@wrappers/catchAsync";
import AuthService from "./service";
import { UserDTO } from "../../common/types/user";

const router = Router();

router.post(
  "/login",
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = await AuthService.login(req.body);
    return res.cookie("accessToken", token);
  })
);
