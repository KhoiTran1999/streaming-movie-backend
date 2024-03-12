exports.env = {
  PORT: process.env.PORT || 3200,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || "streaming-movie",
  MYSQL_USERNAME: process.env.MYSQL_USERNAME || "root",
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "khoitran990120",
  MYSQL_HOST: process.env.MYSQL_HOST || "127.0.0.1",
  MYSQL_DIALECT: process.env.MYSQL_DIALECT || "mysql",
};
