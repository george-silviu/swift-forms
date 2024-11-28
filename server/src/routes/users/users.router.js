const userRouter = require("express").Router();

const { pool } = require("../../services/postgres");

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: API for managing users
 */

/**
 * @openapi
 * /v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: User ID
 *                   name:
 *                     type: string
 *                     description: User name
 */
userRouter.get("/", async (req, res) => {
  res.status(200).json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
});

module.exports = userRouter;
