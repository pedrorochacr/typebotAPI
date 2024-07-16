import {
    Table,
    Column,
  
    Model,
    DataType,
  
    PrimaryKey,
  
  } from "sequelize-typescript";
  
  @Table({ tableName: 'Workspace' })
  class Workspace extends Model<Workspace> {

    @PrimaryKey
    @Column
    id: string;

    @Column
    name: string;

    @Column
    createdAt: Date;


    @Column
    isQuarantined: boolean;
    @Column
    isSuspended:boolean;
    @Column
    isPastDue:boolean;

    @Column
    plan: string;
    
    @Column
    additionalChatsIndex:number;

    @Column
    additionalStorageIndex:number;


    
  }
  
  export default Workspace;
  