const express = require("express");
const userRouter = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const { sendUserData, login } = require("../controllers/usercontroller");

userRouter.post("/senduserdata", sendUserData);
userRouter.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: "Protected route access granted", user: req.user });
});
userRouter.post('/login',login)
module.exports = userRouter;
