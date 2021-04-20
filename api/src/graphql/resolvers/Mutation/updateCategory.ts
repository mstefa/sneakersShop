import Category from "../../../db/models/category";

const updateCategory = async (parent,args,context,info) => {
  const {id,input} = args
  const update = await Category.update({name:input},{
    where:{
      id: id
    }
  })

  return await Category.findByPk(parseInt(id));

  

  
}

export default updateCategory 
