const swaggerJsDoc = require("swagger-jsdoc");

const PORT = process.env.PORT || 3000;

// Swagger setup
const swaggerOptions = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SwiftForms API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/**/*.router.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs };
