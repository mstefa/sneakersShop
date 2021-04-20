import Review from "#root/db/models/review";
import User from "#root/db/models/users";

const getReview = async (parent:any, {productId} )  => {

  let search = await Review.findAll({
        where: {
          productId  
        },
        // include: [ User as any ]
  })
  let average = 0;
  let count = search.length
  
  const reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.score);
  if (count > 0){
    average = search.reduce(reducer, 0)/ count;
  }

  return {
    count,
    average,
    reviews: search
    }
}

export default getReview;