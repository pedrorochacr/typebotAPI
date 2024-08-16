import {
    Table,
    Column,
  
    Model,
    DataType,
  
    PrimaryKey,
  
  } from "sequelize-typescript";
  
  @Table({ tableName: 'Typebot', timestamps:false })
  class Typebot extends Model<Typebot> {

    @PrimaryKey
    @Column
    id: string;

    @Column
    name: string;

    @Column
    publicId: string;

    @Column
    workspaceId: string;



    
  }
  
  export default Typebot;
  