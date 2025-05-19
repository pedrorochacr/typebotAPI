import axios from "axios";
import Typebot from "../../models/Typebot";
import { Op } from "sequelize";


export const GetFlowsService = async ( workspaceId: string) =>{

    const flows = await Typebot.findAll({
        where:{
            workspaceId,
            publicId: {
            [Op.not]: null,
            },
        }
    })
    // const response = await axios.get(`${process.env.BUILDER_URL}/api/v1/typebots?workspaceId=${workspaceId}`,options);
    console.log("response", flows)
    return flows;

}