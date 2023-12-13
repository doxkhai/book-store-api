import sequelize from "@config/connectDB";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface IInventoryManager {
  id: CreationOptional<string>;
  email: string;
}

export interface IInventoryManagerModel
  extends Model<
      InferAttributes<IInventoryManagerModel>,
      InferCreationAttributes<IInventoryManagerModel>
    >,
    IInventoryManager {}

const InventoryManagerModel = sequelize.define<IInventoryManagerModel>(
  "inventory_managers",
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

export default InventoryManagerModel;
