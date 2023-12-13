import { config } from "dotenv";
config();
import env from "@config/env";

import cors from "cors";
import express from "express";
import verifyTokens from "./middleware/verifyTokens";
import cookieParser from "cookie-parser";
import httpContext from "express-http-context";
import { connectDB } from "@config/connectDB";

connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: [env.origin], credentials: true }));
app.use(cookieParser());

app.use(httpContext.middleware);
app.use(verifyTokens);

app.listen(env.port, () => {
  console.log(`App is listening on port ${env.port}!`);
});
