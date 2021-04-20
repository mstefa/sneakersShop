import {
  Column,
  DataType,
  ForeignKey,
  Model,
  BelongsTo,
  Table
} from "sequelize-typescript";

import Product from './products'
import User from './users'
import {ReviewAttributes} from "./types"

@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "reviews",
})

export class Review extends Model<ReviewAttributes>{
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id?: string;

  @ForeignKey(() => Product)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  productId!: string;
  
  @BelongsTo(() => Product)
  product: Product
  
  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  userId: string;
  
  @BelongsTo(() => User)
  user: User
  

  @Column({
  		allowNull: false,
  		type: DataType.FLOAT,
   })
  score!: number;

		@Column({
  		allowNull: false,
  		type: DataType.STRING,
   })
  title!: string;

		@Column({ 
  		allowNull: false,
  		type: DataType.STRING(1000),
   })
  description!: string;
}

export default Review
