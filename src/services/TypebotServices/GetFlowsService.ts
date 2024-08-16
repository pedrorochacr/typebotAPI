import axios from "axios";
import Typebot from "../../models/Typebot";


export const GetFlowsService = async (token: string, workspaceId: string) =>{
    // const options = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     }
    // };


    const flows = await Typebot.findAll({
        where:{
            workspaceId
        }
    })
    // const response = await axios.get(`${process.env.BUILDER_URL}/api/v1/typebots?workspaceId=${workspaceId}`,options);
    console.log("response", flows)
    return flows;

}