import { Request, Response } from "express";

import axios from "axios";
import { CreateUserService } from "../services/TypebotServices/CreateUserService";
import { v4 as uuidv4 } from "uuid";
import { CreateUserTokenService } from "../services/TypebotServices/CreateTokenService";
import { CreateWorkspaceService } from "../services/TypebotServices/CreateWorkspaceService";
import { CreateWorkspaceMemberService } from "../services/TypebotServices/CreateWorkspaceMemberService";
import { RequestUserTokenService } from "../services/TypebotServices/RequestUserTokenService";
import { GetFlowsService } from "../services/TypebotServices/GetFlowsService";
import { UpdateUserEmailService } from "../services/TypebotServices/UpdateUserEmailService";

export const getUserFlows = async (req: Request, res: Response): Promise<Response> => {
  const tokenData = req.body;
  
  const { workspaceId} = await RequestUserTokenService(tokenData);
  console.log("workspaceId", workspaceId);
  const flows = await GetFlowsService(workspaceId);

  return res.json(flows);
};
export const updateEmail = async (req: Request, res: Response): Promise<Response> => {
  const {oldEmail, newEmail} = req.body;
  
  const newUser =  await UpdateUserEmailService(oldEmail, newEmail);

  return res.json(newUser);
};

export const storeUser = async (req: Request, res: Response): Promise<Response> => {
  const userData = req.body;

  console.log(userData);
  const userId = uuidv4();
  userData.id = userId;
  
  const typebotUser = await CreateUserService(userData);
  const tokenData ={
     id: uuidv4(),
     token: uuidv4(),
     name: "Default",
     ownerId: userId

  }

  const token = await CreateUserTokenService(tokenData);

  const workspaceData = {
     id:uuidv4(),
     name: 'My workspace',
     plan: 'UNLIMITED',
     isQuarantined: false,
     isSuspended:false,
     isPastDue:false,    
     additionalChatsIndex:0,
     additionalStorageIndex:0,
  }

  const workspace = await CreateWorkspaceService(workspaceData);

  const memberData ={ 
     userId,
     workspaceId: workspace.id,
     role: "ADMIN"
  }
  const memberWorkspace =  CreateWorkspaceMemberService(memberData);

  return res.json(typebotUser);
};



