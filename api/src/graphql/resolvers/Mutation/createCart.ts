import { CartAttributes } from '#root/db/models/types';
import Cart from '../../../db/models/carts';


const createCartResolver = async (context: any, {userId}: CartAttributes) =>{
  
    const [cart, created] = await Cart.findOrCreate({
        where: {
            userId
        },
        defaults: {userId}
    });

    return cart;

}
  
export default createCartResolver