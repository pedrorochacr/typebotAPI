import {
    Table,
    Column,
  
    Model,
    DataType,
  
    PrimaryKey,
  
  } from "sequelize-typescript";
  
  @Table({ tableName: 'ApiToken', timestamps:false })
  class ApiToken extends Model<ApiToken> {

    @PrimaryKey
    @Column
    id: string;

    @Column
    ownerId: string;

    @Column
    token: string;

    @Column
    name: string;
    
    @Column
    createdAt: Date;



    
  }
  
  export default ApiToken;
  