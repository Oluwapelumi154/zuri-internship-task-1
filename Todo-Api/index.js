const http = require('http');
const mongoose = require('mongoose');
const app = require('./src/app');
server = http.createServer(app);
const PORT = process.env.PORT || 8000;
mongoose
  .connect('mongodb://127.0.0.1:27017/Todo', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log(`Connection Successfully Estabilished to the Database`);
  })
  .catch((err) => {
    console.log(`Not Connected to the Database`, err);
  });
server.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
