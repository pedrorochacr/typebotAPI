import ApiToken from "../../models/ApiToken";
import User from "../../models/User";

interface RequestData{
    email: string;
    tokenName:string;

}

export const RequestUserTokenService = async (data: RequestData) =>{

    const user = await User.findOne({where:{ email: data.email }});
    const userToken = await ApiToken.findOne({where: {ownerId: user.id, name: data.tokenName}});
    console.log("userToken",userToken)
    const { token } = userToken;
    return token;


}