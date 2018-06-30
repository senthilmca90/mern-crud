import express from 'express';
import customerRoute from "../customer/customerRoute";

const app = express();

app.use('/customers',customerRoute);

module.exports = app;