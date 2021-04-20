import Review from "../../../db/models/review";

const updateReview = async (parent:any, {id, title, score, description} )  => {
  console.log('try to update')
  try{
      let response = await Review.update(
        {
          title,
          score,
          description
        },
        {
          where: { id }
        }
    )
    console.log('response: ')
    console.log(response)
    if (response[0]> 0){
      return "review updated"
    }
    return " we can not update this review. Pleser check the information"
    
  }
  catch(e){
    console.error(e)
    return "somethign go wrong trying to updating the review"
  }
  
}

export default updateReview;