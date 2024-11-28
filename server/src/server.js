const http = require("http");

const { app } = require("./app");
const { connectToDatabase } = require("./services/postgres");

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

async function startServer() {
  try {
    await connectToDatabase();

    server.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

startServer();
