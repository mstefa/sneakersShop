export interface UserAttributes {
  id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  isAdmin: Boolean;
  email: string;
  password: string;
  country?: string;
  city?: string;
  street?: string;
  addressnumber?: string;
  postcode?: string;
  nlsuscribe: Boolean;
  isGmail: Boolean;
  count: number;
  ReviewId?: [string];
}

export interface ProductAttributes {
  id?: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  muestraimg: string;
  brandId: string;
  CategoriesId: [string];
  ModelsId: [string];
  ReviewId?: [string];
  detalleimg1: string;
  detalleimg2: string;
  detalleimg3: string;
}

export interface CategoryAttributes {
  id?: string;
  name: string;
}

export interface BrandAttributes {
  id?: string;
  name: string;
}

export interface ImageAttributes {
  id?: string;
  title: string;
  productId: string;
}

export interface ModelAttributes {
  id?: string;
  size: string;
  color: string;
}

export interface CartAttributes {
  id?: string;
  paymentId?: string;
  userId: string;
}

export interface CartProductAttributes {
  id?: string;
  finalproductId: string;
  cartId: string;
  quantity: number;
  price: number;
  state: string;
}

export interface UpdateProductAttributes {
  id: string;
  atr: string;
  input: [string];
}

export interface UpdateUserAttributes {
  id?: string;
  atr: string;
  input: string;
}

export interface ReviewAttributes {
  id?: string;
  productId: string;
  userId: string;
  score: number;
  title: string;
  description: string;
}
