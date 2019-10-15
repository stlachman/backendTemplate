const express = require("express");

const server = express();

const authRouter = require("./auth/auth-router.js");

server.use(express.json());
server.use("/", authRouter);

module.exports = server;