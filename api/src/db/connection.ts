import { Sequelize } from "sequelize-typescript";

// import accessEnv from '../helpers/accessEnv';

import models from "./models";

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
  {
    dialectOptions: {
      charset: "utf8",
      multipleStatements: true,
    },
    logging: false,
    models,
  }
);

sequelize.sync({ force: false });

export default sequelize;
