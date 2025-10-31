import ApiToken from "../../models/ApiToken";
import User from "../../models/User";
import { CreateUserTokenService } from "./CreateTokenService";
import { v4 as uuidv4 } from "uuid";
interface Token {
    id: string;
    ownerId: string;
    name: string;
    token: string;

}

export const FindOrCreateUserTokenService = async (email: string) => {

    let token;
    const user = await User.findOne({ where: { email } });
    token = await ApiToken.findOne({ where: { ownerId: user.id } });
    if (!token) {
        const tokenData = {
            id: uuidv4(),
            token: uuidv4(),
            name: "Default",
            ownerId: user.id

        }
        token = await CreateUserTokenService(tokenData)
    }

    return token;


}