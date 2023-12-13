import sequelize from "@config/connectDB";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface IBranchManager {
  id: CreationOptional<string>;
  email: string;
}

export interface IBranchManagerModel
  extends Model<
      InferAttributes<IBranchManagerModel>,
      InferCreationAttributes<IBranchManagerModel>
    >,
    IBranchManager {}

const BranchManagerModel = sequelize.define<IBranchManagerModel>(
  "branch_managers",
  {
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
  }
);

export default BranchManagerModel;
