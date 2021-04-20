import Category from "#root/db/models/category";
import Product from "../../../db/models/products";
import Offer from "../../../db/models/offers"; 
import sendOffersNotification from '#root/helpers/sendOffersNotification'

const setOffers = async ( parent:any, args: any )  => {
    let {target, targetId, discount, duration} = args
    duration = duration * 60 * 60 * 1000; // change from hours to miliseconds
    discount = (discount / 100);
    let productsToUpdate = [];
    
    switch (target){
      case "category":
        
        let prod = await Product.findAll(
          {
            include: {
              model: Category as any,
              where: {
                id: targetId
              }
              
            }
          }
        )
        prod.forEach(element => {
          productsToUpdate.push(element.id);     
        });
        break;

      case "product":
        productsToUpdate.push(targetId);
        break;

      default:
        return "please check the target field"
      
    }

    let update = defineOffert(discount, productsToUpdate, 0);

    //Save offer on DB
    let offert = await Offer.create(
      {
      target,
      targetId,
      discount,
      duration,
      active: true
      }
      );

    console.log(`offert`, offert.id)

    let restore = setTimeout( defineOffert, duration, 0, productsToUpdate, offert.id);  // DO NOT USE AWAIT HERE!

    sendOffersNotification()
    return "todo Ok"
}

async function defineOffert(discount: number, productsToUpdate: string[], offertId:number){
  let update = await Product.update(
    {discount},
    {where: 
      { id: productsToUpdate} 
    }
  ) 
  
  if (offertId !== 0){
    await Offer.update(
        { active: false },
        {where:{
          id: offertId,
        }}
      );
    console.log(`offert #${offertId} has finished`)
  }

  return update
}

export default setOffers