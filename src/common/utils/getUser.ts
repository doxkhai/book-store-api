import { get as getContext } from "express-http-context";
import { UserDTO } from "@type/user";

const getUser = () => {
  const user: Pick<UserDTO, "email" | "type"> = getContext("user");
  if (!user) throw new Error("User not set!");
  return user;
};

export default getUser;
