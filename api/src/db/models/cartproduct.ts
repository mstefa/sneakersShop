import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Cart from "./carts";
import FinalProduct from "./finalproduct";

// Definitions of tables and sequelize models
// Table cartproduct
@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "cartproduct",
})
export class CartProduct extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Cart)
  cartId!: string;
  @BelongsTo(() => Cart)
  cart!: Cart;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => FinalProduct)
  finalproductId!: string;
  @BelongsTo(() => FinalProduct)
  finalproducts!: FinalProduct;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  quantity?: number;

  @Column({
    allowNull: true,
    type: DataType.FLOAT,
  })
  price?: number;

  @Column({
    allowNull: false,
    type: DataType.ENUM("reserved", "paid", "finished", "rejected"),
  })
  state!: string;
}

export default CartProduct;
