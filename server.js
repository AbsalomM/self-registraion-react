const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');
const proxy = require('http-proxy-middleware');
const httpsProxyAgent = require('https-proxy-agent');
const app = express();
const cors = require("cors");


module.exports = app => {

    app.use(cors({
        origin: "http://localhost:3000", // restrict calls to those this address
          methods: "POST", // only allow GET requests
          credentials: true
      }
      ));

    app.use(
      "/api/process",
      proxy({
        target: "http://localhost:4000",
        changeOrigin: true
      })
    );
  };
