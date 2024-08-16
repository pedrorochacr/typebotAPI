import { Sequelize } from "sequelize-typescript";
import User from "../models/User";
import ApiToken from "../models/ApiToken";
import Workspace from "../models/Workspace";
import WorkspaceMember from "../models/WorkspaceMember";
import Typebot from "../models/Typebot";

// eslint-disable-next-line
const dbConfig = require("../config/database");
// import dbConfig from "../config/database";

const sequelize = new Sequelize(dbConfig);

const models = [
   User,
   Typebot,
   ApiToken,
   Workspace,
   WorkspaceMember
];

sequelize.addModels(models);

export default sequelize;
