module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  mongoDB: {
    host: process.env.DATABASE_CLOUD
  },
  mySQL: {
    host: 'localhost',
    user: process.env.USER_MYSQL,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_MYSQL
  },
  github: {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
  }

}