import Review from "#root/db/models/review";

const undeleteReviewResolver = async (parent, args, context, info) => {
    await Review.restore({ where: { id: args.id }})
}

export default undeleteReviewResolver;
