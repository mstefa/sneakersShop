import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
  Unique
} from "sequelize-typescript";
import ProductCategory from './productcategory'
import Product from './products'

import { CategoryAttributes } from './types'

@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "categories",
})
export class Category extends Model<CategoryAttributes> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id?: string;

  @Unique
  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @BelongsToMany(() => Product, { through: () => ProductCategory })
  products?: Array<Product & { ProductCategory: ProductCategory }>;
}

export default Category
