import {
    Table,
    Column,
  
    Model,
    DataType,
  
    PrimaryKey,
  
  } from "sequelize-typescript";
  
  @Table({ tableName: 'MemberInWorkspace',  })
  class WorkspaceMember extends Model<WorkspaceMember> {

    @PrimaryKey
    @Column
    userId: string;

    @PrimaryKey
    @Column
    workspaceId: string;

    @Column
    role: string;



    
  }
  
  export default WorkspaceMember;
  