import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table
} from "sequelize-typescript";

import Product from './products'
import { ImageAttributes } from "./types";

@Table({
    defaultScope:{
        attributes: {exclude: ['deleteAt']}
    },
    paranoid: true,
    tableName: 'images'
})

export class Image extends Model<ImageAttributes>{
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    })
    id?: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    title!: string;

    @Column({
        allowNull: true,
        type: DataType.INTEGER,
    })
    @ForeignKey(() => Product)
    productId!: string;
    @BelongsTo(() => Product)
    product!: Product
}

export default Image;
  