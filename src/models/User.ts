import {
  Table,
  Column,

  Model,
  DataType,

  PrimaryKey,

} from "sequelize-typescript";

@Table({ tableName: 'User' })
class User extends Model<User> {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  company: string;

  @Column
  emailVerified: Date;

  @Column
  image: string;

  @Column({ type: DataType.JSONB })
  onboardingCategories: Record<string, any>;

  @Column({ type: DataType.JSONB })
  displayedInAppNotifications: Record<string, any>;



}

export default User;
