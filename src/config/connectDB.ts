import { Options, Sequelize } from "sequelize";
import env from "./env";

const dbConfig: Options = {
  dialect: "oracle",
  database: env.db.name,
  host: env.db.host,
  port: Number(env.db.port),
  username: env.db.credentials.username,
  password: env.db.credentials.password,
  timezone: env.db.timezone,
  logging: false,
  pool: {
    max: 20,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
};

const sequelize = new Sequelize(dbConfig);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Database connect successfully");
  } catch (e) {
    console.error("Database connect failed");
    throw e;
  }
}

export default sequelize;
