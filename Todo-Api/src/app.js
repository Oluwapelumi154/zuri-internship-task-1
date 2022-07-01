const express = require('express');
const { notFound } = require('./controller/todo-controller');
const app = express();
const todoRoute = require('./route/todo-route');
app.use(express.json());
app.use('/api/todo', todoRoute);
app.use('*', notFound);
module.exports = app;
