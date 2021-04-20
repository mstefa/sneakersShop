export interface Action {
  type: String;
  payload?: any;
}

export interface Store {
  counter: number;
}

export interface User {
  name: String;
  id?: Number;
}

export interface QueryUsers {
  users: User[];
}

export interface CartAttributes {
  id: String;
  //finalproducts: [];
  cartproducts: [];
  userId: String;
}

export interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  brandId: String;
  CategoriesId: String[];
}

export interface QueryProducts {
  products: ProductAttributes[];
}

export interface CategoryAttributes {
  id?: string;
  name: String;
}

export interface QuertCategories {
  categories: CategoryAttributes[];
}
export interface Brand {
  id: String;
  name: String;
  __typename: String;
}

// interface para array de productos del catalogo // generar una para el detalle
export interface ProductBasic {
  name: String;
  description: String;
  price: Number;
  brandId: Brand;
  categories: String[];
  __typename: String;
}

export interface UserAttributes {
  id: string;
  userName: String;
  firstName: String;
  lastName: String;
  email: String;
  nlsuscribe: Boolean;
  isAdmin: Boolean;
}

export interface ModelAttributes {
  color: string;
  size: string;
  id: string;
}

export interface StockAttributes{
  id: string;
  stock: string;
  model:ModelAttributes;
  product:ProductAttributes;
}