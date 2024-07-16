import axios from "axios";


export const GetFlowsService = async (token: string, workspaceId: string) =>{
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };


    const response = await axios.get(`${process.env.BUILDER_URL}/api/v1/typebots?workspaceId=${workspaceId}`,options)
    return response.data;

}