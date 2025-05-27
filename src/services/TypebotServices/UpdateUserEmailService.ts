import ApiToken from "../../models/ApiToken";
import User from "../../models/User";
import Workspace from "../../models/Workspace";
import WorkspaceMember from "../../models/WorkspaceMember";


export const UpdateUserEmailService = async (oldEmail: string, newEmail:string) =>{

    const user = await User.findOne({where:{ email: oldEmail}});
    await user.update({email: newEmail});
    await user.save();

    return {user}



}