import {
    Table,
    Column,
  
    Model,
    DataType,
  
    PrimaryKey,
  
  } from "sequelize-typescript";
  
  @Table({ tableName: 'ApiToken' })
  class ApiToken extends Model<ApiToken> {

    @Column
    ownerId: string;
    
  }
  
  export default ApiToken;
  