import express from "express";

import * as TypebotController from "../controllers/TypebotController";

const typebotRoutes = express.Router();

typebotRoutes.get("/typebot/flow", TypebotController.getUserFlows);
typebotRoutes.post("/typebot/createUser", TypebotController.storeUser);


export default typebotRoutes;
