import Category from "#root/db/models/category";

const undeleteCategoryResolver = async (parent, args, context, info) => {
    await Category.restore({ where: { id: args.id }})
}

export default undeleteCategoryResolver;
