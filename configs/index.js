module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  mongoDB: {
    host: process.env.DATABASE_CLOUD,
    type: 'mongo',
  },
  mySQL: {
    host: 'localhost',
    user: process.env.USER_MYSQL,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_MYSQL,
    type: 'mysql'
  },
  github: {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
  }

}