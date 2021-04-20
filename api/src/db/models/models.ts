import {
    BelongsToMany,
    Table,
    Column,
    HasMany,
    DataType,
    Model
} from 'sequelize-typescript';

import Product from './products';
import FinalProduct from './finalproduct';

import {ModelAttributes} from './types';

@Table({
    defaultScope:{
        attributes:{
            exclude: ["deleteAt"]
        },
    },
    paranoid: true,
    tableName: 'models',
})
export class Models extends Model<ModelAttributes> {
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
    size!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
      })
      color!: string;

    @HasMany(() => FinalProduct)
    finalproducts!: FinalProduct[]
  
    @BelongsToMany(() => Product, { through: () => FinalProduct })
    products?: Array<Product & { FinalProduct: FinalProduct }>;
  }
  
  export default Models
