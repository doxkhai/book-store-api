const env = {
  port: Number(process.env.PORT!) ?? 3000,
  origin: process.env.ORIGIN!,
  jwt: {
    secret: process.env.ACCESS_SECRET!,
    expires: process.env.ACCESS_EXPIRES!,
  },
  db: {
    credentials: {
      username: process.env.DB_USRNAME!,
      password: process.env.DB_PASSWORD!,
    },
    timezone: process.env.TZ!,
    port: process.env.DB_PORT!,
    host: process.env.DB_HOST!,
    name: process.env.DB_NAME!,
  },
};

export default env;
