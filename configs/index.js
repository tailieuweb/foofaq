module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,

  mongoDB: {
    host: 'mongodb+srv://<username>:<password>@cluster0.0v1l9.mongodb.net/quanly?retryWrites=true'
  },
  mySQL: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testapi'
  },
  github: {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
  }

}