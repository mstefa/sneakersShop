import Review from "#root/db/models/review";

const addReview = async (parent:any, {productId, userId, title, score, description} )  => {
  
  try{
    let check = await Review.findAll({
          where: {
            userId,
            productId  
          }, 
    })

    if( check.length < 1){
      return await Review.create({
          productId,
          userId,
          title,
          score,
          description
      })

    }else{
      return {
        id: "0",
        productId: "0",
        userId: "0",
        title: "ERROR",
        score: 9999,
        description: "Review alredy exist"
      }
    }
  }
  catch(e){
    console.error(e)
    return{
        id: "0",
        productId: "0",
        userId: "0",
        title: "ERROR",
        score: 9999,
        description: "somethign go wrong trying to add the review"
      }
  }
  
}

export default addReview;