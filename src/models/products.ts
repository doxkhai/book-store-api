import sequelize from "@config/connectDB";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface IProduct {
  id: CreationOptional<string>;
  name: string;
  author: string;
  genre: string;
  price: number;
  cover: string;
}

export interface IProductModel
  extends Model<
      InferAttributes<IProductModel>,
      InferCreationAttributes<IProductModel>
    >,
    IProduct {}

const ProductModel = sequelize.define<IProductModel>("products", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  genre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  cover: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

export default ProductModel;
