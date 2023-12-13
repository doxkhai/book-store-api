import { Response, Request, NextFunction } from "express";
import getUser from "@utils/getUser";
import { RoleOrder, UserType } from "@type/user";
import catchAsync from "@wrappers/catchAsync";

const roleAuthorize = (requiredRole: UserType) =>
  catchAsync(async (_: Request, res: Response, next: NextFunction) => {
    const user = getUser();

    if (
      RoleOrder.findIndex((role) => role === user.type) <=
      RoleOrder.findIndex((role) => role === requiredRole)
    )
      return next();

    throw new Error("403 Forbidden");
  });

export default roleAuthorize;
