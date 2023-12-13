import sequelize from "@config/connectDB";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface ICustomer {
  id: CreationOptional<string>;
  email: string;
}

export interface ICustomerModel
  extends Model<
      InferAttributes<ICustomerModel>,
      InferCreationAttributes<ICustomerModel>
    >,
    ICustomer {}

const CustomerModel = sequelize.define<ICustomerModel>("customers", {
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
});

export default CustomerModel;
