import { Request, Response } from "express";

import axios from "axios";
import { CreateUserService } from "../services/TypebotServices/CreateUserService";
import { v4 as uuidv4 } from "uuid";

export const getUserFlows = async (req: Request, res: Response): Promise<Response> => {
  const { whatsappName } = req.params ;


  const { typebot, enabled, delay_message} = await ShowTypebotService(whatsappName);

  return res.json({ typebot, enabled, delay_message});
};

export const storeUser = async (req: Request, res: Response): Promise<Response> => {
  const userData = req.body;

  console.log(userData);
  const userId = uuidv4();
  userData.id = userId;


  const typebotUser = await CreateUserService(userData)

  return res.json(typebotUser);
};



