import Review from "#root/db/models/review";

const deleteReview = async (parent:any, {id} )  => {
  
  try{
    let response = await Review.destroy({ where: { id } })

    if (response > 0) {
      return 'the review was delete succsefully'
    }
    else {
      return 'the review can not be delete'
    }
  }
  catch(e){
    console.error(e)
    return 'something go wrong trying to delete'
  }


  
}
export default deleteReview;