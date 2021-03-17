const env = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres:lunacharliemira@localhost:5432/quicksilver&sslmode=require',
  DATABASE_NAME: process.env.DATABASE_NAME || 'quicksilver',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'lunacharliemira',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
  JWT_SECRET: process.env.JWT_SECRET || 'D00gSw4gs',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;