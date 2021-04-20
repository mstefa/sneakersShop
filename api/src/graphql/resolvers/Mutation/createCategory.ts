import Category from "../../../db/models/category";
import {CategoryAttributes} from '../../../db/models/types'

const createCategoryResolver = async (context: any, {name}: CategoryAttributes) =>{

  
  return await Category.create({name});
}

export default createCategoryResolver
