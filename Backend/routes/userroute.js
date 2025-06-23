const express = require("express");
const userRouter = express.Router();

const { sendUserData, loginUser } = require("../controllers/usercontroller");

userRouter.post("/senduserdata", sendUserData);
userRouter.post('/login',loginUser)
module.exports = userRouter;
