import {
  Column,
  DataType,
  Model,
  BelongsToMany,
  HasOne,
  HasMany,
  Table
} from "sequelize-typescript";
import Product from "./products";
import Cart from './carts';
import wishList from './wishList';
import Review from "./review";

import { UserAttributes, ReviewAttributes } from './types'

@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "users",
})
export class User extends Model<UserAttributes> {
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
  firstName!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  lastName!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  })
  userName!: string;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
  })
  isAdmin!: Boolean;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
    validate:{
      isEmail: true
    }
  })
  email!: string;
  

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  country: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  city: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  street: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  addressnumber: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  postcode: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  count: any;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  nlsuscribe?: String;
	
	@Column({
		allowNull: true,
		type: DataType.BOOLEAN,
	})
	isGmail?:Boolean;

  @HasOne(() => Cart)
  cartId!: Cart;

  @HasMany(() => Review)
  reviews: ReviewAttributes[]

  @BelongsToMany(() => Product, { through: () => wishList })
  products?: Array<Product & { wishList: wishList }>;
}

export default User
