import Workspace from "../../models/Workspace";
import WorkspaceMember from "../../models/WorkspaceMember";

interface WorkspaceData {
    userId: string;
    workspaceId: string;
    role:string;

}

export const CreateWorkspaceMemberService = async (data: WorkspaceData) =>{

    const workspaceMember = WorkspaceMember.create(data);

    return workspaceMember;


}