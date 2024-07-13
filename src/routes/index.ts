import { Router } from "express";
import typebotRoutes from "./TypebotRoutes";


const routes = Router();
routes.use(typebotRoutes)


export default routes;
