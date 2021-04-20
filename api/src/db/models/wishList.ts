import {
  BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from "sequelize-typescript";
  
  import Product from './products';
  import User from './users';
  

  @Table({
    defaultScope: {
      attributes: { exclude: ["deleteAt"] },
    },
    paranoid: true,
    tableName: "wishlist",
  })
  export class wishList extends Model {
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
    @ForeignKey(() => Product)
    productId!: string;
    @BelongsTo(()=> Product)
    product: Product

    @Column({
      allowNull: false,
      type: DataType.INTEGER,
    })
    @ForeignKey(() => User)
    userId!: string;

  }

  export default wishList;