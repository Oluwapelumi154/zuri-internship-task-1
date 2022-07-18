const dotenv = require('dotenv');
dotenv.config('../.env');
const express = require('express');
const { emailRoute } = require('./router');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.use('/api', emailRoute);
app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
