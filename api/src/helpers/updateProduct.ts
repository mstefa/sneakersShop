export const handlerUpdate = (atr, input) => {
  switch (atr) {
    case "description":
      return {
        description: input[0],
      };
    case "price":
      return {
        price: parseInt(input[0]),
      };
    case "name":
      return {
        name: input[0],
      };
    case "brand":
      return {
        brandId: input[0],
      };
    case "muestraimg":
      return {
        muestraimg: input[0],
      };
    case "detalleimg1":
      return {
        muestraimg: input[0],
      };
    case "detalleimg2":
      return {
        detalleimg2: input[0],
      };
    case "detalleimg3":
      return {
        detalleimg3: input[0],
      };
    default:
      return atr;
  }
};
