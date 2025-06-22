const express = require("express");
const userRouter = express.Router();

const { sendUserData } = require("../controllers/usercontroller");

userRouter.post("/senduserdata", sendUserData);

module.exports = userRouter;
