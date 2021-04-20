import Models from "../../../db/models/models";
import {ModelAttributes} from '../../../db/models/types'

const createModelsResolver = async (context: any, {size,color}: ModelAttributes) =>{
  
  return await Models.create({size,color});
}

export default createModelsResolver