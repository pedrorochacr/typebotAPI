import axios from "axios";
import ApiToken from "../../models/ApiToken";
import User from "../../models/User";







export const GetFlowsService = async (token: string) =>{
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };


    const response = await axios.get(`${process.env.BUILDER_URL}/api/v1/typebots`,options)
    console.log("response", response.data)
    return response.data;

}