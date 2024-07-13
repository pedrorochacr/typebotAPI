import User from "../../models/User";

interface UserData{
    id:string;
    name: string;
    email: string;
    company: string;
    onboardingCategories: string;

}

export const CreateUserService = async (data: UserData) =>{

    const user = User.create(data);

    return user;


}