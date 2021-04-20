import Cart from "#root/db/models/carts";

export default async function updatePaymentId(userId: number, paymentId:any) {
  
  try {
    const update = await Cart.update(
      { paymentId: paymentId },
      {
        where: {
          userId: userId,
        },
      }
    );
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
