import {
	Column,
	DataType,
	ForeignKey,
	BelongsTo,
	HasMany,
	Model,
	Table,
} from "sequelize-typescript";

import Product from "./products";
import Models from "./models";
import CartProduct from "./cartproduct";

// Definitions of tables and sequelize models
// Table productmodels
@Table({
	defaultScope: {
		attributes: { exclude: ["deleteAt"] },
	},
	paranoid: true,
	tableName: "finalproducts",
})
export class FinalProduct extends Model {
	@Column({
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER,
	})
	id?: string;

	@Column({
		type:DataType.INTEGER
	})
	stock?:number;

	@Column({
		allowNull: false,
		type: DataType.INTEGER,
	})
	@ForeignKey(() => Product)
	productId!: string;
	@BelongsTo(() => Product)
    product: Product;

	@Column({
		allowNull: false,
		type: DataType.INTEGER,
	})
	@ForeignKey(() => Models)
	modelId!: string;
	@BelongsTo(() => Models)
	model: Models;
	
	@HasMany(() => CartProduct)
  	cartproducts!: CartProduct[]

}

export default FinalProduct;
