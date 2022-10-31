require('dotenv').config();
require('./db/mongo');
const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());

// localhost/api/auth/signup
// localhost/api/auth/signin
// localhost/api/auth/test podamos ver todos los usuarios de la db

app.use('/api/auth', require('./routes/auth.routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
