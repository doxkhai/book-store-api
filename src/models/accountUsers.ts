import sequelize from "@config/connectDB";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { UserType } from "@type/user";

export interface IAccountUser {
  id: CreationOptional<string>;
  email: string;
  password: string;
  role: UserType;
}

export interface IAccountUserModel
  extends Model<
      InferAttributes<IAccountUserModel>,
      InferCreationAttributes<IAccountUserModel>
    >,
    IAccountUser {}

const AccountUserModel = sequelize.define<IAccountUserModel>("accounts_user", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  role: {
    allowNull: false,
    type: DataTypes.ENUM,
    values: Object.values(UserType),
  },
});

export default AccountUserModel;
