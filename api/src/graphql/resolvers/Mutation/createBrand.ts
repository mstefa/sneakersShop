import Brand from "../../../db/models/brands";
import {BrandAttributes} from '../../../db/models/types'

const createBrand = async (parent: any,{name}: BrandAttributes, context: any , info: any) =>{
    return await Brand.create({name});
}

export default createBrand
