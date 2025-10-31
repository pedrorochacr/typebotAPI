import ApiToken from "../../models/ApiToken";
import User from "../../models/User";

interface Token{
    id: string;
    ownerId: string;
    name:string;
    token:string;

}

export const CreateUserTokenService = async (data: Token) =>{

    const apiToken = await ApiToken.create(data);

    return apiToken.token;


}