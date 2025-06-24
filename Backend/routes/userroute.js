const express = require("express");
const userRouter = express.Router();

const { sendUserData, login } = require("../controllers/usercontroller");

userRouter.post("/senduserdata", sendUserData);
userRouter.post('/login',login)
module.exports = userRouter;
