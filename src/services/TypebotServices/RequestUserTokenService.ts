import ApiToken from "../../models/ApiToken";
import User from "../../models/User";
import Workspace from "../../models/Workspace";
import WorkspaceMember from "../../models/WorkspaceMember";

interface RequestData{
    email: string;
    tokenName:string;

}

export const RequestUserTokenService = async (data: RequestData) =>{

    console.log(data)
    const user = await User.findOne({where:{ email: data.email }});
    console.log(user);
    const userToken = await ApiToken.findOne({where: {ownerId: user.id, name: data.tokenName}});
    const workspace = await WorkspaceMember.findOne({where:{userId: user.id}});
    console.log("userId", user.id)
    console.log("userToken",userToken);
    // const { token } = userToken;
    console.log(workspace)
    const {workspaceId} =workspace;
    console.log(workspaceId);
    return {workspaceId };


}