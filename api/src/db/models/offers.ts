import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";

// import Product from './products';
// import User from './users';


@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "offers",
})
export class Offer extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  target: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  targetId: string;

  @Column({
    allowNull: false,
    type: DataType.FLOAT,
  })
  discount: number;

  @Column({
    allowNull: false,
    type: DataType.FLOAT,
  })
  duration: number;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
  })
  active: boolean;

}

export default Offer;