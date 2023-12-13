import { sign, verify } from "jsonwebtoken";
import env from "@config/env";
import { compare } from "bcrypt";
import { UserDTO, UserType } from "@type/user";
import AccountUserModel from "../../models/accountUsers";

class AuthService {
  private jwtConfig: { secret: string; expires: string };
  constructor() {
    this.jwtConfig = env.jwt;
  }

  async getUser(email: string, type: UserType) {
    const user = await AccountUserModel.findOne({ where: { email } });
    return user;
  }

  async login({ email, password, type }: UserDTO) {
    const user = await this.getUser(email, type);
    if (!user) throw new Error("User not exist");

    const valid = await compare(password, user.password);
    if (!valid) throw new Error("Wrong password");

    return this.signJWT({ email, type });
  }

  verifyJWT(token: string) {
    const payload = verify(token, this.jwtConfig.secret);
    return payload;
  }

  signJWT<T extends object>(payload: T) {
    return sign(payload, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.expires,
    });
  }
}

export default new AuthService();
