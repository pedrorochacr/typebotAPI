import Workspace from "../../models/Workspace";

interface WorkspaceData{
    id: string;
    plan: string;
    name:string;
    isQuarantined: boolean;
    isSuspended:boolean;
    isPastDue:boolean;    
    additionalChatsIndex:number;
    additionalStorageIndex:number;
}

export const CreateWorkspaceService = async (data: WorkspaceData) =>{

    const workspace = Workspace.create(data);

    return workspace;


}