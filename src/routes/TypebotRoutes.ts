import express from "express";

import * as TypebotController from "../controllers/TypebotController";

const typebotRoutes = express.Router();


typebotRoutes.post("/typebot/token", TypebotController.token);
typebotRoutes.post("/typebot/flow", TypebotController.getUserFlows);
typebotRoutes.post("/typebot/createUser", TypebotController.storeUser);
typebotRoutes.put("/typebot/user", TypebotController.updateEmail);

export default typebotRoutes;
