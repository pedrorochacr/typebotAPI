import User from "../../models/User";

interface RequestData{
    ownerId: string

}

export const RequestUserTokenService = async (data: RequestData) =>{

    const user = User.create(data);

    return user;


}