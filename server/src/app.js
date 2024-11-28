const express = require("express");
const swaggerUi = require("swagger-ui-express");

const { swaggerDocs } = require("./config/swagger");
const v1 = require("./routes/v1");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/v1", v1);

module.exports = { app };
