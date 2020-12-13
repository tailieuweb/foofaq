module.exports = {
  //Token secret connecting the environment variable
  JWT_SECRET: process.env.JWT_SECRET,

  //Mongoose ​​connected environment variable
  mongoDB: {
    host: process.env.DATABASE_LOCAL
  },
  //MySQL ​​connected environment variable
  mySQL: {
    host: 'localhost',
    user: process.env.USER_MYSQL,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_MYSQL
  },
  //Github ​​connected environment variable
  github: {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
  },
  //MongoDB environment variable
  DB_TYPE: process.env.DATABASE_TYPE
}